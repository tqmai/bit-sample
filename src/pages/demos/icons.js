import React from "react";
import Grid from "@material-ui/core/Grid";

import {
  LeftArrow,
  RightArrow,
  Dot,
  Add,
  Attachment,
  Back,
  Cancel,
  Checkmark,
  Download,
  Dropdown,
  Forward,
  Info,
  Warning,
  Menu,
  Play,
  Search,
  Setting,
  Share,
  Submit,
  Previous,
  Next,
} from "components/Icon";

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
    <h2>Utility Icons</h2>

    <Grid container>
      <Grid item xs={6} sm={3} md={2}>
        <span>leftarrow - new</span>
        <LeftArrow />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>rightarrow - new</span>
        <RightArrow />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>Dot - new</span>
        <Dot />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>Add - new</span>
        <Add />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>Attachment - new</span>
        <Attachment />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>Back - new</span>
        <Back />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>Cancel - new</span>
        <Cancel />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>Checkmark - new</span>
        <Checkmark />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>Download - new</span>
        <Download />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>Dropdown - new</span>
        <Dropdown />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>Forward - new</span>
        <Forward />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>Info - new</span>
        <Info />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>Warning - new</span>
        <Warning />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>Menu - new</span>
        <Menu />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>Play - new</span>
        <Play />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>Search - new</span>
        <Search />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>Setting - new</span>
        <Setting />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>Share - new</span>
        <Share />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>Submit - new</span>
        <Submit />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>Previous - new</span>
        <Previous />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <span>Next - new</span>
        <Next />
      </Grid>
    </Grid>
  </div>
);

export default IconsDemo;
