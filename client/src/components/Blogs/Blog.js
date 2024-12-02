import React, { useState } from "react";
import "./Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "", videoUrl: "" });

  // Handle input change
  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  // Add new post
  const addPost = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.content) {
      setPosts([...posts, newPost]);
      setNewPost({ title: "", content: "", videoUrl: "" });
    }
  };

  // Update post content
  const updatePost = (index) => {
    const updatedContent = prompt("Enter updated content:", posts[index].content);
    if (updatedContent) {
      const updatedPosts = [...posts];
      updatedPosts[index].content = updatedContent;
      setPosts(updatedPosts);
    }
  };

  return (
    <div className="blog-section container py-5">
      <h2 className="text-center mb-4">Blog</h2>

      {/* Blog Post Form */}
      <div className="mb-5">
        <h4>Create a New Post</h4>
        <form onSubmit={addPost}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Post Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={newPost.title}
              onChange={handleChange}
              placeholder="Enter post title"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">Post Content</label>
            <textarea
              className="form-control"
              id="content"
              name="content"
              value={newPost.content}
              onChange={handleChange}
              placeholder="Enter post content"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="videoUrl" className="form-label">Video URL</label>
            <input
              type="url"
              className="form-control"
              id="videoUrl"
              name="videoUrl"
              value={newPost.videoUrl}
              onChange={handleChange}
              placeholder="Enter video URL (optional)"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Add Post</button>
        </form>
      </div>

      {/* Blog Posts */}
      <div>
        <h4>All Posts</h4>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={index} className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                {post.videoUrl && (
                  <div className="video-wrapper">
                    <iframe
                      width="100%"
                      height="250"
                      src={post.videoUrl}
                      title={post.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                <button
                  className="btn btn-secondary mt-3"
                  onClick={() => updatePost(index)}
                >
                  Update Content
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No posts available. Create one to get started!</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
