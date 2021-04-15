import React from "react";
// import Grid from "@material-ui/core/Grid";

import { Search } from "src/components/icon/search";

const IconsDemo = () => (
  <div>
    <style jsx global>{`
      span {
        font-size: 0.875rem;
        white-space: nowrap;
        color: #666;
        display: block;
        text-align: center;
        margin-bottom: 0.5rem;
      }

      svg {
        display: block;
        margin: 0 auto 1rem;
      }
    `}</style>
    <h1>Refactored Icons Page</h1>
    <br />
    <br />
    <Search />
  </div>
);

export default IconsDemo;
