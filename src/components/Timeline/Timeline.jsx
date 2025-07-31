import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TimelineElement } from './TimelineElement.jsx';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Timeline = ({ 
  steps = [],
  orientation = 'vertical',
  lineColor = '#e2e8f0',
  activeColor = '#3b82f6',
  stepSize = 32,
  className = '',
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const timelineRef = useRef(null);
  const stepRefs = useRef([]);
  const progressLineRef = useRef(null);

  useEffect(() => {
    if (!timelineRef.current || typeof window === 'undefined') return;


    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    if (progressLineRef.current) {
      gsap.set(progressLineRef.current, {
        [orientation === 'vertical' ? 'height' : 'width']: '0%'
      });
    }

    stepRefs.current.forEach((step, index) => {
      if (step) {
        const dot = step.querySelector('.timeline-dot');
        gsap.set(step, { opacity: 0.3 });
        gsap.set(dot, { 
          scale: 0.8,
          backgroundColor: lineColor,
          borderColor: lineColor
        });
      }
    });

    // Create scroll trigger for progress line and steps
    ScrollTrigger.create({
      trigger: timelineRef.current,
      start: "top 70%",
      end: "bottom 30%",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Update progress line
        if (progressLineRef.current) {
          gsap.to(progressLineRef.current, {
            [orientation === 'vertical' ? 'height' : 'width']: `${progress * 100}%`,
            duration: 0.1,
            ease: "none"
          });
        }

        // Calculate and update active step
        const newActiveStep = Math.floor(progress * steps.length);
        const clampedStep = Math.max(0, Math.min(newActiveStep, steps.length - 1));
        
        if (clampedStep !== activeStep) {
          setActiveStep(clampedStep);
          
          // Animate steps
          stepRefs.current.forEach((step, index) => {
            if (step) {
              const dot = step.querySelector('.timeline-dot');
              const isActive = index <= clampedStep;
              
              gsap.to(step, {
                opacity: isActive ? 1 : 0.3,
                duration: 0.3,
                ease: "power2.out"
              });
              
              gsap.to(dot, {
                scale: isActive ? 1.1 : 0.8,
                backgroundColor: isActive ? activeColor : lineColor,
                borderColor: isActive ? activeColor : lineColor,
                duration: 0.3,
                ease: "power2.out"
              });
            }
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [steps.length, orientation, lineColor, activeColor, activeStep]);

  if (!steps.length) return null;

  return (
    <div 
      ref={timelineRef}
      className={`timeline-container ${orientation} ${className} sticky top-0`}
      style={{
        '--line-color': lineColor,
        '--active-color': activeColor,
        '--step-size': `${stepSize}px`
      }}
    >
      {/* Timeline Line */}
      <div className="timeline-line">
        <div ref={progressLineRef} className="timeline-progress" />
      </div>

      {/* Timeline Steps */}
      <div className="timeline-steps">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={el => stepRefs.current[index] = el}
            className="timeline-step"
            data-step={index}
          >
            {/* Step Dot */}
            <div className="timeline-dot" />
            
            {/* Step Content Slot */}
            <div className="timeline-content">
              <TimelineElement
                title={step.content.title}
                subtitle={step.content.subtitle}
                date={step.content.date}
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .timeline-container {
          position:sticky;
          padding: 2rem 0;
          top: 200px;
          margin-bottom: 100px;
        }

        .timeline-line {
          position:absolute;
          background-color: var(--line-color);
          z-index: 1;
        }

        .timeline-container.vertical .timeline-line {
          left: calc(var(--step-size) / 2 - 1px);
          top: 0;
          bottom: 0;
          width: 2px;
        }

        .timeline-container.horizontal .timeline-line {
          top: calc(var(--step-size) / 2 - 1px);
          left: 0;
          right: 0;
          height: 2px;
        }

        .timeline-progress {
          background-color: var(--active-color);
          width: 100%;
          height: 100%;
        }

        .timeline-steps {
          position: relative;
          z-index: 2;
        }

        .timeline-container.vertical .timeline-steps {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .timeline-container.horizontal .timeline-steps {
          display: flex;
          flex-direction: row;
          gap: 3rem;
          align-items: flex-start;
        }

        .timeline-step {
          display: flex;
          align-items: flex-start;
          opacity: 0.3;
        }

        .timeline-container.vertical .timeline-step {
          flex-direction: row;
          gap: 1.5rem;
        }

        .timeline-container.horizontal .timeline-step {
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }

        .timeline-dot {
          width: var(--step-size);
          height: var(--step-size);
          border-radius: 50%;
          background-color: var(--line-color);
          border: 3px solid var(--line-color);
          flex-shrink: 0;
        }

        .timeline-content {
          flex: 1;
          min-width: 0;
        }

        .timeline-container.vertical .timeline-content {
          padding-top: 0.25rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .timeline-container.horizontal {
            overflow-x: auto;
            padding-bottom: 1rem;
          }
          
          .timeline-container.horizontal .timeline-steps {
            min-width: max-content;
          }
        }
      `}</style>
    </div>
  );
};

export default Timeline;
