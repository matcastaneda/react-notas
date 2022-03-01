import ReactGA from 'react-ga';

const googleAnalyticsAction = {};

googleAnalyticsAction.initGoogleAnalytics = async key => {
  ReactGA.initialize(key, {
    gaOptions: { cookieFlags: 'SameSite=None;Secure' },
  });
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export { googleAnalyticsAction };
