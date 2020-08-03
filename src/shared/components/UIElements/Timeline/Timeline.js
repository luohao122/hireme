import React, { useState } from "react";

import "./timeline.css";

const Timeline = (props) => {
  const [timeline, setTimeline] = useState([
    {
      id: 1,
      year: "2019",
      company: "SEZAX VN",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum",
      image: "/sezax.jpg",
    },
    {
      id: 2,
      year: "2017",
      company: "Hyakusenrenma VN",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum",
      image: "/hyakusen.png",
    },
    {
      id: 3,
      year: "2015",
      company: "Rubify Technology",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum",
      image: "/rubify.png",
    },
  ]);

  const renderTimelineTree = () => {
    return timeline.map((time) => {
      return (
        <div
          className={`timeline-container timeline-${
            time.id % 2 === 0 ? "right" : "left"
          }`}
        >
          <div className="content">
            {time.image ? (
              <img
                className="img-fluid"
                src={time.image}
                alt={time.company}
                title={time.company}
              />
            ) : null}
            <h2>{time.year}</h2>
            <h5>{time.company}</h5>

            <p>{time.content}</p>
          </div>
        </div>
      );
    });
  };

  return <div className="timeline">{renderTimelineTree()}</div>;
};

export default Timeline;
