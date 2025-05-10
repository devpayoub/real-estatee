
declare interface Window {
  AOS: {
    init(options?: any): void;
    refresh(): void;
  }
}

declare module 'aos' {
  interface AosOptions {
    duration?: number;
    once?: boolean;
    offset?: number;
    easing?: string;
    delay?: number;
    mirror?: boolean;
    anchorPlacement?: string;
  }

  function init(options?: AosOptions): void;
  function refresh(): void;

  export default { init, refresh };
}
