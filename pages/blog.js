import React from "react";
import Link from "next/link";
import Styles from "../styles/blog.module.css";

const Blog = () => {
  return (
    <>
      <div className="container">
        <div className="blogs">
          <div className="blogItem">
            <Link href={"/blogpost/learn-javascript"}>
              <h3>How to learn javascript for beginners?</h3>
            </Link>
            <p>Javascript is a language used to design logic for web </p>
          </div>
          <div className="blogItem">
            <h3>How to learn javascript for beginners?</h3>
            <p>Javascript is a language used to design logic for web </p>
          </div>
          <div className="blogItem">
            <h3>How to learn javascript for beginners?</h3>
            <p>Javascript is a language used to design logic for web </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
