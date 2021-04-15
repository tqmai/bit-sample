/* eslint-disable import/no-extraneous-dependencies */
import React from "react";

import Grid from "@material-ui/core/Grid";
import { Search } from "@paclife/plds.icon.search";
import { Colors } from "@paclife/plds.tokens";
import ButtonBase from "./ButtonBase";
import { Button } from "./button";

export const Buttons = () => (
  <section
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      textAlign: "center",
      marginTop: "3rem",
      marginBottom: "3rem",
      width: "96%",
      maxWidth: "75rem",
      margin: "0 auto",
    }}
  >
    <h3>Button Demo</h3>
    <Grid container>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <div>
          <h3>Base</h3>
          <br />
          <ButtonBase>Default</ButtonBase>
          <br />
          <br />
          <ButtonBase disabled>Disabled</ButtonBase>
          <br />
          <br />
          <ButtonBase href="/">Link to Home</ButtonBase>
          <br />
          <br />
          <ButtonBase href="https://reactjs.org/">External Link</ButtonBase>
          <br />
          <br />
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <div>
          <h3>Primary</h3>
          <br />
          <Button href="/" variant="primary" size="large" startIcon={<Search />}>
            Large
          </Button>
          <br />
          <br />
          <Button variant="primary" disabled size="medium" startIcon={<Search />}>
            Medium
          </Button>
          <br />
          <br />
          <Button variant="primary" size="small">
            Small
          </Button>
          <br />
          <br />
          <Button variant="primary" size="large" fixedWidth>
            L Fixed
          </Button>
          <br />
          <br />
          <Button variant="primary" size="medium" fixedWidth>
            M Fixed
          </Button>
          <br />
          <br />
          <Button variant="primary" size="small" fixedWidth>
            S Fixed
          </Button>
          <br />
          <br />
          <Button variant="primary" size="large" fullWidth>
            L fullWidth
          </Button>
          <br />
          <br />
          <Button variant="primary" size="medium" fullWidth>
            M fullWidth
          </Button>
          <br />
          <br />
          <Button variant="primary" size="small" fullWidth>
            S fullWidth
          </Button>
          <br />
          <br />
          <div
            style={{
              backgroundColor: "black",
            }}
          >
            <br />
            <Button variant="primary" size="large" dark endIcon={<Search />}>
              L Dark
            </Button>
            <br />
            <br />
            <Button variant="primary" disabled size="medium" dark startIcon={<Search />}>
              M Dark
            </Button>
            <br />
            <br />
            <Button variant="primary" size="small" dark>
              S Dark
            </Button>
            <br />
            <br />
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <div>
          <h3>Secondary</h3>
          <br />
          <Button variant="secondary" size="large" startIcon={<Search />}>
            Large
          </Button>
          <br />
          <br />
          <Button variant="secondary" disabled size="medium" startIcon={<Search />}>
            Medium
          </Button>
          <br />
          <br />
          <Button variant="secondary" size="small" startIcon={<Search />}>
            Small
          </Button>
          <br />
          <br />
          <Button variant="secondary" size="large" fixedWidth>
            L Fixed
          </Button>
          <br />
          <br />
          <Button variant="secondary" size="medium" fixedWidth>
            M Fixed
          </Button>
          <br />
          <br />
          <Button variant="secondary" size="small" fixedWidth>
            S Fixed
          </Button>
          <br />
          <br />
          <Button variant="secondary" size="large" fullWidth>
            L fullWidth
          </Button>
          <br />
          <br />
          <Button variant="secondary" size="medium" fullWidth>
            M fullWidth
          </Button>
          <br />
          <br />
          <Button variant="secondary" size="small" fullWidth>
            S fullWidth
          </Button>
          <br />
          <br />
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <div>
          <h3>Text</h3>
          <br />
          <Button variant="text" size="large" startIcon={<Search />}>
            Large
          </Button>
          <br />
          <br />
          <Button variant="text" disabled size="medium" startIcon={<Search />}>
            Medium
          </Button>
          <br />
          <br />
          <Button variant="text" size="small" startIcon={<Search color={Colors.colorNeutral1000} />}>
            Small
          </Button>
          <br />
          <br />
          <Button variant="text" size="large" fixedWidth>
            L Fixed
          </Button>
          <br />
          <br />
          <Button variant="text" size="medium" fixedWidth>
            M Fixed
          </Button>
          <br />
          <br />
          <Button variant="text" size="small" fixedWidth>
            S Fixed
          </Button>
          <br />
          <br />
          <Button variant="text" size="large" fullWidth>
            L fullWidth
          </Button>
          <br />
          <br />
          <Button variant="text" size="medium" fullWidth>
            M fullWidth
          </Button>
          <br />
          <br />
          <Button variant="text" size="small" fullWidth>
            S fullWidth
          </Button>
          <br />
          <br />
          <div
            style={{
              backgroundColor: "black",
            }}
          >
            <br />
            <Button variant="text" size="large" dark startIcon={<Search color={Colors.colorNeutral1000} />}>
              L Dark
            </Button>
            <br />
            <br />
            <Button variant="text" disabled size="medium" dark startIcon={<Search />}>
              M Dark
            </Button>
            <br />
            <br />
            <Button variant="text" size="small" dark>
              S Dark
            </Button>
            <br />
            <br />
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <div>
          <h3>Icon</h3>
          <br />
          <Button variant="icon" size="medium" startIcon={<Search />} />
          <br />
          <br />
          <Button variant="icon" disabled size="medium" startIcon={<Search />} />
          <br />
          <br />
          <Button variant="icon" size="small" startIcon={<Search />} />
          <br />
          <br />
          <div
            style={{
              backgroundColor: "black",
            }}
          >
            <br />
            <Button variant="icon" size="medium" dark startIcon={<Search color={Colors.colorNeutral1000} />} />
            <br />
            <br />
            <Button variant="icon" disabled size="medium" dark startIcon={<Search />} />
            <br />
            <br />
            <Button variant="icon" size="small" dark startIcon={<Search color={Colors.colorNeutral1000} />} />
            <br />
            <br />
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <div>
          <h3>Destructive</h3>
          <br />
          <Button variant="destructive" size="large" startIcon={<Search />}>
            Large
          </Button>
          <br />
          <br />
          <Button variant="destructive" disabled size="medium" startIcon={<Search />}>
            Medium
          </Button>
          <br />
          <br />
          <Button variant="destructive" size="small">
            Small
          </Button>
          <br />
          <br />
          <Button variant="destructive" size="large" fixedWidth>
            L Fixed
          </Button>
          <br />
          <br />
          <Button variant="destructive" size="medium" fixedWidth>
            M Fixed
          </Button>
          <br />
          <br />
          <Button variant="destructive" size="small" fixedWidth>
            S Fixed
          </Button>
          <br />
          <br />
          <Button variant="destructive" size="large" fullWidth>
            L fullWidth
          </Button>
          <br />
          <br />
          <Button variant="destructive" size="medium" fullWidth>
            M fullWidth
          </Button>
          <br />
          <br />
          <Button variant="destructive" size="small" fullWidth>
            S fullWidth
          </Button>
          <br />
          <br />
        </div>
      </Grid>
    </Grid>
  </section>
);

// export default Buttons2;
