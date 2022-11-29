/** @format */

import { Badge, BadgeDelta } from "@tremor/react";
import React from "react";
import "./stats.css";

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="cotainer-1">
        <div className="table-1">
          <h1>Top 5 best Topics</h1>
          <div className="table-item">
            <h1>Financial Mathematics</h1>
            <Badge size="lg" color="green" text="+97%" />
          </div>
          <div className="table-item">
            <h1>Linear Patterns</h1>
            <Badge size="lg" color="green" text="+97%" />
          </div>
          <div className="table-item">
            <h1>Exponents</h1>
            <Badge size="lg" color="green" text="+90%" />
          </div>
          <div className="table-item">
            <h1>Factoring</h1>
            <Badge size="lg" color="green" text="+88%" />
          </div>
          <div className="table-item">
            <h1>Geometry</h1>
            <Badge size="lg" color="green" text="+85%" />
          </div>
        </div>
        <div className="live-action">
          <div className="live-count">
            <h1>15</h1>
            <small>/25</small>
          </div>
          <p>leaners are Practicing now</p>
          <button>view leaners</button>
        </div>
      </div>

      <div className="table-2">
        <h1>Top 5 worst Topics</h1>
        <div className="table-item">
          <h1>World Problems</h1>
          <Badge size="lg" color="red" text="5%" />
        </div>
        <div className="table-item">
          <h1>Curve Sketching</h1>
          <Badge size="lg" color="red" text="9%" />
        </div>
        <div className="table-item">
          <h1>Quadradic Patterns</h1>
          <Badge size="lg" color="red" text="10%" />
        </div>
        <div className="table-item">
          <h1>Probability</h1>
          <Badge size="lg" color="red" text="15%" />
        </div>
        <div className="table-item">
          <h1>Solving Trig Equations</h1>
          <Badge size="lg" color="red" text="17%" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
