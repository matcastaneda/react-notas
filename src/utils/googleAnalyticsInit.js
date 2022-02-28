import ReactGA from 'react-ga';

const googleAnalyticsAction = {};

googleAnalyticsAction.initGoogleAnalytics = async key => {
  ReactGA.initialize(key);
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export { googleAnalyticsAction };
