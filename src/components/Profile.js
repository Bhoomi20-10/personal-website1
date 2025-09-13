// src/components/Profile.js
function Profile() {
  return (
    <section className="profile">
      <div className="profile-text">
        <h2>Hi, I'm [Your Name]</h2>
        <p>
          I'm a passionate, friendly, and creative person with a strong interest in technology and arts. 
          I enjoy coding, learning new technologies, and building projects step by step as part of my journey. 
          Apart from academics, I have a deep interest in music and love playing instruments — it helps me stay balanced and inspired.
        </p>

        <h3>My Skills</h3>
        <div className="skills">
          <span className="skill-badge">React</span>
          <span className="skill-badge">Java</span>
          <span className="skill-badge">Python</span>
          <span className="skill-badge">HTML & CSS</span>
        </div>
      </div>

      <div className="profile-image">
            <img src="/mypic.png" alt="My Profile" />

      </div>
    </section>
  );
}

export default Profile;
