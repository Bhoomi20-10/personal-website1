// src/components/Portfolio.js
import { useState } from "react";
import Project from "./Project";

const allProjects = [
  {
    title: "Notetaking App",
    desc: "A simple app to take and save notes.",
    type: "Personal",
    domain: "JS",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/yourrepo/notetaking",
  },
  {
    title: "FS Practical App",
    desc: "Full stack project developed during practicals.",
    type: "Course",
    domain: "FS",
    tech: ["React", "Node"],
    link: "/fsapp",
  },
  {
    title: "Audio Visualizer",
    desc: "React app for audio visualization.",
    type: "Personal",
    domain: "JS",
    tech: ["React"],
    link: "https://github.com/yourrepo/audio-visualizer",
  },
  {
    title: "Price Prediction",
    desc: "ML model to predict prices using Python.",
    type: "Course",
    domain: "DBMS",
    tech: ["Python"],
    link: "https://github.com/yourrepo/price-prediction",
  },
];

function Portfolio() {
  const [filters, setFilters] = useState({ type: [], domain: [] });

  const handleChange = (category, value) => {
    setFilters((prev) => {
      const newValues = prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value];
      return { ...prev, [category]: newValues };
    });
  };

  const filteredProjects = allProjects.filter((p) => {
    const typeMatch = filters.type.length === 0 || filters.type.includes(p.type);
    const domainMatch =
      filters.domain.length === 0 || filters.domain.includes(p.domain);
    return typeMatch && domainMatch;
  });

  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>

      <div className="filters">
        <div>
          <strong>By Type:</strong>
          <label>
            <input type="checkbox" onChange={() => handleChange("type", "Course")} /> Course
          </label>
          <label>
            <input type="checkbox" onChange={() => handleChange("type", "Personal")} /> Personal
          </label>
        </div>

        <div>
          <strong>By Domain:</strong>
          <label>
            <input type="checkbox" onChange={() => handleChange("domain", "FS")} /> FS
          </label>
          <label>
            <input type="checkbox" onChange={() => handleChange("domain", "DBMS")} /> DBMS
          </label>
          <label>
            <input type="checkbox" onChange={() => handleChange("domain", "JS")} /> JS
          </label>
          <label>
            <input type="checkbox" onChange={() => handleChange("domain", "Python")} /> Python
          </label>
        </div>
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((proj, idx) => (
          <Project key={idx} {...proj} />
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
