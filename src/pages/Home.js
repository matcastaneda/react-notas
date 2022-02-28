import Notes from '../components/note/Notes';
import Footer from '../components/layout/Footer';
import { useEffect } from 'react';
import { googleAnalyticsAction } from '../utils/googleAnalyticsInit';

const Home = () => {
  useEffect(() => {
    googleAnalyticsAction.initGoogleAnalytics('UA-199392592-4');
  }, []);

  return (
    <>
      <Notes />

      <Footer />
    </>
  );
};

export default Home;
