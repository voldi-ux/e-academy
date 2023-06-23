
import "./home.css"

import Blocks from '../../components/listBlocks/blocks';
import Questions from '../../components/QuestionComponent/Questions'
import Slider from '../../components/slider/slider';

import Graph from '../../components/graph/graph';
import Notifications from '../../components/Notification/Notifications/Notifications'
import Stats from '../../components/stats/stats';

const Home = () => {
  return (
    <div className='home-container'>
      <Slider />
      <Blocks />
      <Graph />
      <Stats />
    </div>
  );
};

export default Home;
