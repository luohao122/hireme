import React, { useState } from "react";

import "./timeline.css";

const Timeline = (props) => {
  const [timeline, setTimeline] = useState([
    {
      id: 1,
      year: "2019",
      company: "SEZAX VN",
      title: "Front End Engineer",
      company_summary:
        "A traditional printing company in Japan. Sezax Corporation was founded in 1948",
      job_summary:
        "I joined Sezax as a mid level front end developer and has been working on ImageStore project, which is a content management system just like Google Drive ever since.",
      image: "/sezax.jpg",
    },
    {
      id: 2,
      year: "2017 - 2019",
      company: "Hyakusenrenma VN",
      title: "Front End Developer",
      company_summary:
        "Hyakusenrenma is a Japanese company with stayjapan.com is its main business.",
      job_summary:
        "I joined Hyakusenrenma as a junior front end developer and working closely on their project (StayJapan) which is an online home-sharing service.",
      image: "/hyakusen.png",
    },
    {
      id: 3,
      year: "2015 - 2016",
      company: "Rubify Technology",
      title: "Fullstack Developer",
      company_summary:
        "Rubify is an outsourcing company which provided not only good solutions, but great UI/UX to many of its customers.",
      job_summary:
        "I started there as a Fullstack developer after graduated and worked on YeyeahDelight project, which is an online food ordering service.",
      image: "/rubify.png",
    },
  ]);

  const renderTimelineTree = () => {
    return timeline.map((time) => {
      return (
        <div
          key={time.id}
          className={`timeline-container timeline-${
            time.id % 2 === 0 ? "right" : "left"
          }`}
        >
          <div className="content">
            <h2 className="timeline-year">{time.year}</h2>
            {time.image ? (
              <img
                className="img-fluid mb-3"
                src={time.image}
                alt={time.company}
                title={time.company}
              />
            ) : null}
            <h5>{time.company}</h5>
            <p className="mb-2 timeline-title">{time.title}</p>
            <p>{time.company_summary}</p>
            <p>{time.job_summary}</p>
          </div>
        </div>
      );
    });
  };

  return <div className="timeline">{renderTimelineTree()}</div>;
};

export default Timeline;
