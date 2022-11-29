/** @format */

// you guys can replace the h1 with the respective components you have built. no need to touch app.js file.
// I will implemnting routing as soon as possible.


import Blocks from '../../components/listBlocks/blocks';
import Questions from '../../components/QuestionComponent/Questions'
import Slider from '../../components/slider/slider';

import Graph from '../../components/graph/graph';
import Notifications from '../../components/Notification/Notifications/Notifications'
import Stats from '../../components/stats/stats';

const Home = () => {
  return (
    <div>
      <Slider />
      <Blocks />
      <Graph />
      <Stats />
    </div>
  );
};

export default Home;
