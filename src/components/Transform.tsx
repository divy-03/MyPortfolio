import { useState, useEffect } from 'react';

const TransformElement = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate scale and translate values based on scrollY
  const scale = 1 + scrollY / 1000;
  const translateY = scrollY / 2;

  return (
    <div
      className="transform-element"
      style={{
        transform: `translate(-50%, -50%) scale(${scale}) translateY(${translateY}px)`,
      }}
    >
      Transform Me
    </div>
  );
};

export default TransformElement;
