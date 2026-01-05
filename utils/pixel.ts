declare global {
  interface Window {
    fbq: any;
  }
}

export const trackPixelEvent = (eventName: string, options?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, options);
  } else {
    console.log(`[Pixel Mock] Track: ${eventName}`, options);
  }
};