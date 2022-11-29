import React from 'react';
import { AreaChart, BadgeDelta, Title } from "@tremor/react";

import "@tremor/react/dist/esm/tremor.css";
import './graph.css';


const chartdata = [
  {
    weekNumber: 1,
    grade10: 59,
    grade11: 1850,
    grade12: 1136
  },
  {
    weekNumber: 2,
    grade10: 993,
    grade11: 163,
    grade12: 391
  },
  {
    weekNumber: 3,
    grade10: 290,
    grade11: 374,
    grade12: 204
  },
  {
    weekNumber: 4,
    grade10: 1202,
    grade11: 822,
    grade12: 2424
  },
  {
    weekNumber: 5,
    grade10: 3314,
    grade11: 3437,
    grade12: 777
  },
  {
    weekNumber: 6,
    grade10: 714,
    grade11: 3510,
    grade12: 3482
  },
  {
    weekNumber: 7,
    grade10: 1463,
    grade11: 1690,
    grade12: 1538
  },
  {
    weekNumber: 8,
    grade10: 6654,
    grade11: 233,
    grade12: 3817
  },
  {
    weekNumber: 9,
    grade10: 5307,
    grade11: 6014,
    grade12: 1071
  },
  {
    weekNumber: 10,
    grade10: 1013,
    grade11: 6507,
    grade12: 546
  },
  {
    weekNumber: 11,
    grade10: 3418,
    grade11: 7802,
    grade12: 1369
  },
  {
    weekNumber: 12,
    grade10: 6413,
    grade11: 1272,
    grade12: 3077
  },
  {
    weekNumber: 13,
    grade10: 5277,
    grade11: 2911,
    grade12: 4069
  },
  {
    weekNumber: 14,
    grade10: 6219,
    grade11: 1338,
    grade12: 3640
  },
  {
    weekNumber: 15,
    grade10: 7533,
    grade11: 2874,
    grade12: 1453
  },
  {
    weekNumber: 16,
    grade10: 12342,
    grade11: 5688,
    grade12: 11183
  },
  {
    weekNumber: 17,
    grade10: 6478,
    grade11: 11845,
    grade12: 8663
  },
  {
    weekNumber: 18,
    grade10: 15675,
    grade11: 2813,
    grade12: 8495
  },
  {
    weekNumber: 19,
    grade10: 3922,
    grade11: 15756,
    grade12: 15665
  },
  {
    weekNumber: 20,
    grade10: 10386,
    grade11: 135,
    grade12: 8873
  },
  {
    weekNumber: 21,
    grade10: 2571,
    grade11: 6660,
    grade12: 14976
  },
  {
    weekNumber: 22,
    grade10: 16023,
    grade11: 3260,
    grade12: 16858
  },
  {
    weekNumber: 23,
    grade10: 20668,
    grade11: 3236,
    grade12: 11058
  },
  {
    weekNumber: 24,
    grade10: 13144,
    grade11: 3264,
    grade12: 3868
  },
  {
    weekNumber: 25,
    grade10: 19039,
    grade11: 14597,
    grade12: 22384
  },
  {
    weekNumber: 26,
    grade10: 24468,
    grade11: 18179,
    grade12: 1117
  },
  {
    weekNumber: 27,
    grade10: 11419,
    grade11: 17664,
    grade12: 16496
  },
  {
    weekNumber: 28,
    grade10: 18271,
    grade11: 9665,
    grade12: 16829
  },
  {
    weekNumber: 29,
    grade10: 495,
    grade11: 8842,
    grade12: 12730
  },
  {
    weekNumber: 30,
    grade10: 7668,
    grade11: 19831,
    grade12: 13893
  },
  {
    weekNumber: 31,
    grade10: 4096,
    grade11: 20872,
    grade12: 29166
  },
  {
    weekNumber: 32,
    grade10: 16055,
    grade11: 22226,
    grade12: 14274
  },
  {
    weekNumber: 33,
    grade10: 13698,
    grade11: 25078,
    grade12: 10221
  },
  {
    weekNumber: 34,
    grade10: 10128,
    grade11: 11433,
    grade12: 17828
  },
  {
    weekNumber: 35,
    grade10: 27150,
    grade11: 11156,
    grade12: 20994
  },
  {
    weekNumber: 36,
    grade10: 1700,
    grade11: 8193,
    grade12: 3471
  },
  {
    weekNumber: 37,
    grade10: 3020,
    grade11: 13891,
    grade12: 29381
  },
  {
    weekNumber: 38,
    grade10: 31831,
    grade11: 19499,
    grade12: 21361
  },
  {
    weekNumber: 39,
    grade10: 11654,
    grade11: 3388,
    grade12: 4347
  },
  {
    weekNumber: 40,
    grade10: 7213,
    grade11: 37967,
    grade12: 23538
  },
  {
    weekNumber: 41,
    grade10: 17680,
    grade11: 21225,
    grade12: 4178
  },
  {
    weekNumber: 42,
    grade10: 36812,
    grade11: 20707,
    grade12: 1259
  },
  {
    weekNumber: 43,
    grade10: 20894,
    grade11: 41218,
    grade12: 17488
  },
  {
    weekNumber: 44,
    grade10: 39180,
    grade11: 11637,
    grade12: 18638
  },
  {
    weekNumber: 45,
    grade10: 23300,
    grade11: 35650,
    grade12: 40538
  },
  {
    weekNumber: 46,
    grade10: 38621,
    grade11: 6587,
    grade12: 8676
  },
  {
    weekNumber: 47,
    grade10: 30202,
    grade11: 45089,
    grade12: 26729
  },
  {
    weekNumber: 48,
    grade10: 2017,
    grade11: 321,
    grade12: 1225
  },
  {
    weekNumber: 49,
    grade10: 43762,
    grade11: 43317,
    grade12: 32938
  },
  {
    weekNumber: 50,
    grade10: 17977,
    grade11: 17558,
    grade12: 34482
  },
  {
    weekNumber: 51,
    grade10: 15867,
    grade11: 47793,
    grade12: 30179
  },
  {
    weekNumber: 52,
    grade10: 50652,
    grade11: 20057,
    grade12: 16243
  }
];

const Graph = () => { 
      return (
        <div className="graph-container">
          <h1>Practice Trends for Each Individual grades</h1>
          <AreaChart data={chartdata} categories={["grade10", "grade11", "grade12"]} dataKey="week" height="h-72" colors={["purple", "red"]} showTooltip={true} showXAxis={false} showYAxis={false} showGridLines={false} marginTop="mt-4" />
          <div className="feedback">
            <BadgeDelta size="lg" text="+30%" />
            <p className="content">Grade 10's have been Practicing a lot for the last couple of weeks</p>
          </div>
          <div className="feedback">
            <BadgeDelta size="lg" text="+29%" />
            <p className="content">Grade 11's have been Practicing a lot for the last couple of weeks</p>
          </div>
          <div className="feedback">
            <BadgeDelta size="lg" text="+35%" />
            <p className="content">Grade 12's have been Practicing a lot for the last couple of weeks</p>
          </div>
        </div>
      );
}



export default Graph;