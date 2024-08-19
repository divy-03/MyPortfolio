declare module 'locomotive-scroll' {
    interface LocomotiveScrollOptions {
      el: HTMLElement;
      smooth: boolean;
      // Add more options as needed based on your usage
    }
  
    class LocomotiveScroll {
      constructor(options: LocomotiveScrollOptions);
      on(event: string, callback: (args: any) => void): void;
      update(): void;
      destroy(): void;
    }
  
    export default LocomotiveScroll;
  }
  