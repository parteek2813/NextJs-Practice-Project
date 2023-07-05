import React from "react";
import { useRouter } from "next/router";
import Styles from "../../styles/blogPost.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <main className={Styles.main}>
        <div>Whats'up {slug}</div>
        <h1>Title of the page: {slug}</h1>
        <hr />
        <div>
          Nulla Lorem eiusmod reprehenderit laborum laboris consequat esse
          officia exercitation voluptate nisi ut. Non nulla sit deserunt
          cupidatat qui non. Dolore et ea aliquip enim velit officia excepteur
          est voluptate nulla qui.
        </div>
      </main>
    </>
  );
};

export default slug;
