import React, { useState } from "react";

import {
  Grid,
  Box,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { CSSTransition } from "react-transition-group";
import "../../../../../assets/styles/transitionAnimations/leftRight.css";
import "./ParticipantRadioSelection.css";

const ParticipantRadioSelection = (props) => {
  //Component state
  const [page, setPage] = useState(1);
  const [directionIsLeft, setDirectionIsLeft] = useState(false);
  const timeoutTime = 400;

  //Functions
  const handleChange = (e) => {
    props.onChange(e.target.value);
  };

  const pageUpHandler = (direction) => {
    setDirectionIsLeft(true);
    setPage((p) => p + 1);
  };
  const pageDownHandler = (direction) => {
    setDirectionIsLeft(false);
    setPage((p) => p - 1);
  };

  const pageOneButtons = (
    <CSSTransition
      in={page === 1}
      timeout={timeoutTime}
      classNames={directionIsLeft ? "card-slide-left" : "card-slide-right"}
      mountOnEnter
      unmountOnExit
    >
      <Grid
        className="radio-selection-grid"
        sx={{ flexGrow: 1, justifyContent: "space-evenly" }}
        container
      >
        <Grid item>
          <FormControlLabel
            value={0}
            control={<Radio onChange={handleChange} />}
            label="0"
            labelPlacement="bottom"
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            value={1}
            control={<Radio onChange={handleChange} />}
            label="1"
            labelPlacement="bottom"
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            value={2}
            control={<Radio onChange={handleChange} />}
            label="2"
            labelPlacement="bottom"
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            value={3}
            control={<Radio onChange={handleChange} />}
            label="3"
            labelPlacement="bottom"
          />
        </Grid>
      </Grid>
    </CSSTransition>
  );
  const pageTwoButtons = (
    <CSSTransition
      in={page === 2}
      timeout={timeoutTime}
      classNames={directionIsLeft ? "card-slide-left" : "card-slide-right"}
      mountOnEnter
      unmountOnExit
    >
      <Grid
        className="radio-selection-grid"
        sx={{ flexGrow: 1, justifyContent: "space-evenly" }}
        container
      >
        <Grid item>
          <FormControlLabel
            value={4}
            control={<Radio onChange={handleChange} />}
            label="4"
            labelPlacement="bottom"
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            value={5}
            control={<Radio onChange={handleChange} />}
            label="5"
            labelPlacement="bottom"
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            value={6}
            control={<Radio onChange={handleChange} />}
            label="6"
            labelPlacement="bottom"
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            value={7}
            control={<Radio onChange={handleChange} />}
            label="7"
            labelPlacement="bottom"
          />
        </Grid>
      </Grid>
    </CSSTransition>
  );
  const pageThreeButtons = (
    <CSSTransition
      in={page === 3}
      timeout={timeoutTime}
      classNames={directionIsLeft ? "card-slide-left" : "card-slide-right"}
      mountOnEnter
      unmountOnExit
    >
      <Grid
        className="radio-selection-grid"
        sx={{ flexGrow: 1, justifyContent: "space-evenly" }}
        container
      >
        <Grid item>
          <FormControlLabel
            value={8}
            control={<Radio onChange={handleChange} />}
            label="8"
            labelPlacement="bottom"
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            value={9}
            control={<Radio onChange={handleChange} />}
            label="9"
            labelPlacement="bottom"
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            value={10}
            control={<Radio onChange={handleChange} />}
            label="10"
            labelPlacement="bottom"
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            value={11}
            control={<Radio onChange={handleChange} />}
            label="11"
            labelPlacement="bottom"
          />
        </Grid>
      </Grid>
    </CSSTransition>
  );

  return (
    <div className="participant-radio-selection-wrapper">
      <FormLabel
        sx={{ textAlign: "center", fontWeight: "600", fontSize: "15px" }}
        id="demo-form-control-label-placement"
      >
        {props.label}
      </FormLabel>
      <Box
        className="participant-label"
        sx={{
          fontSize: "13px",

          fontWeight: "400",
          color: "var(--gray)",
          textAlign: "center",
        }}
      >
        {props.subLabel}
      </Box>
      <RadioGroup
        row
        className="radio-selection-container"
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue={0}
      >
        {page !== 1 && (
          <button className="pager-button back" onClick={pageDownHandler}>
            {leftArrow}
          </button>
        )}

        {pageOneButtons}
        {pageTwoButtons}
        {pageThreeButtons}

        {page !== 3 && (
          <button className="pager-button next" onClick={pageUpHandler}>
            {rightArrow}
          </button>
        )}
      </RadioGroup>
    </div>
  );
};
export default ParticipantRadioSelection;

const rightArrow = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path>
  </svg>
);
const leftArrow = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"></path>
  </svg>
);
