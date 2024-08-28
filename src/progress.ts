import { useEffect, useState } from "react";

// Rename to a custom hook
const useProgressTracker = () => {
  const [progress, setProgress] = useState<number>(0);
  const [pr, setPr] = useState<number>(0);

  useEffect(() => {
    const resources = document.querySelectorAll<
      HTMLImageElement | HTMLScriptElement
    >("img, script");
    const totalResources = resources.length;
    let loadedResources = 0;

    const updateProgress = () => {
      loadedResources += 1;
      const percentage = Math.round((loadedResources / totalResources) * 100);
      setTimeout(() => {
        setProgress(percentage);
      }, 1000);
    };

    resources.forEach((resource) => {
      if (resource instanceof HTMLImageElement) {
        if (resource.complete) {
          updateProgress();
        } else {
          resource.addEventListener("load", updateProgress);
          resource.addEventListener("error", updateProgress); // Handle failed loads too
        }
      } else {
        updateProgress();
      }
    });

    return () => {
      resources.forEach((resource) => {
        if (resource instanceof HTMLImageElement) {
          resource.removeEventListener("load", updateProgress);
          resource.removeEventListener("error", updateProgress);
        }
      });
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pr < progress) {
        setPr((prev) => Math.min(prev + 1, progress));
      }
    }, 10);
    
    return () => clearInterval(interval);
  }, [pr, [progress]]);

  return pr; // Return the progress number
};

export default useProgressTracker;
