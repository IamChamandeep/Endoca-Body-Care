import React from 'react';

declare global {
  interface Window {
    fbq: any;
  }
}

export const trackPixelEvent = (eventName: string, options?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    console.log(`[Facebook Pixel] 🟢 Firing Event: ${eventName}`, options || '');
    window.fbq('track', eventName, options);
  } else {
    console.warn(`[Facebook Pixel] 🔴 Event Blocked/Missing: ${eventName} (window.fbq not found)`);
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