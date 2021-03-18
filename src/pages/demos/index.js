/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";

const DemoList = () => (
  <div>
    <h1>Demos</h1>
    <p>
      <Link href="/demos/buttons">
        <a>Buttons</a>
      </Link>
    </p>
  </div>
);

export default DemoList;
