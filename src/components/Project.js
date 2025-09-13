// src/components/Project.js
function Project({ title, desc, type, domain, tech, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <p><b>Type:</b> {type}</p>
      <p><b>Domain:</b> {domain}</p>
      <div className="tech-badges">
        {tech.map((t, idx) => (
          <span key={idx} className="skill-badge">{t}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        View Project
      </a>
    </div>
  );
}
export default Project;
