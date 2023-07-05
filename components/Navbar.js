import React from "react";
import Link from "next/link";
import Script from "next/script";

const Navbar = () => {
  return (
    <>
      <div className="mainnav">
        <ul>
          <Link href="/" legacyBehavior>
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a>
              <li>About</li>
            </a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a>
              <li>Blogs</li>
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a>
              <li>Contact</li>
            </a>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
