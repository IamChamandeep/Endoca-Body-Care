import React from 'react';

declare global {
  interface Window {
    fbq: any;
  }
}

export const trackPixelEvent = (eventName: string, options?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    console.log('[Facebook Pixel] Tracking:', eventName, options);
    window.fbq('track', eventName, options);
  } else {
    console.warn('[Facebook Pixel] window.fbq is not defined or blocked');
  }
};

export const handleOutboundClick = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  url: string,
  eventName: string,
  options?: any
) => {
  e.preventDefault();
  trackPixelEvent(eventName, options);
  
  // Delay navigation slightly to allow pixel request to complete
  setTimeout(() => {
    window.location.href = url;
  }, 300);
};