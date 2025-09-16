// src/components/AnimatedSection.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

// This component will wrap other components to animate them when they appear
function AnimatedSection({ children }) {
  const { ref, inView } = useInView({
    // Options
    triggerOnce: true, // The animation will only trigger once
    threshold: 0.1,    // Trigger the animation when 10% of the component is visible
  });

  return (
    // The `ref` is attached to this div. The library will watch this div.
    <div
      ref={ref}
      // We conditionally apply CSS classes based on the `inView` status
      className={`animated-section ${inView ? 'visible' : 'hidden'}`}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;