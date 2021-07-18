export const pageview = (url) => {
  if (window && window.gtag) {
    window.gtag('config', secrets.GA_TRACKING_ID, {
      page_path: url
    });
  }
};

export const event = ({ action, category, label, value }) => {
  if (window && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value
    });
  }
};
