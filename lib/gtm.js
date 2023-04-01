export const gtmVirtualPageView = (rest) => {
    window.dataLayer?.push({
      event: 'VirtualPageView',
      ...rest,
    });
  };