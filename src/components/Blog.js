// src/components/Blog.js
function Blog() {
  const posts = [
    {
      title: "My Journey in Computer Science",
      content: "I started my Computer Science degree with curiosity and excitement. Projects like ATM System and FitnessPoint taught me real-world coding and problem-solving.",
      author: "Me",
      date: "2025-09-01",
    },
    {
      title: "Learning React",
      content: "React was challenging at first, but building my own portfolio website gave me confidence to keep learning frontend frameworks.",
      author: "Me",
      date: "2025-09-05",
    },
    {
      title: "My Goals & Hobbies",
      content: "I want to become strong in web development, improve my knowledge of Java and Python, and keep growing as a student. Outside of studies, I love playing instruments, which keeps me creative and motivated.",
      author: "Me",
      date: "2025-09-10",
    },
  ];

  return (
    <div className="blog">
      <h2>My Blog</h2>
      <div className="blog-grid">
        {posts.map((post, idx) => (
          <div className="blog-card" key={idx}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>{post.author} | {post.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
