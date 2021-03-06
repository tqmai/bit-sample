import React, { useState, useLayoutEffect } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { Colors, Radii, Durations } from "../../styles/tokens";

const rippleAnimation = keyframes`
  from {
    opacity: 0.75;
    transform: scale(0);
  }

  to {
    opacity: 0;
    transform: scale(2);
  }
`;

const RippleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span {
    transform: scale(0);
    border-radius: ${Radii.circle};
    position: absolute;
    opacity: 0.25;
    background-color: ${(props) => props.color};
    animation: ${rippleAnimation} ${(props) => props.duration}ms;
  }
`;

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
  useLayoutEffect(() => {
    let bounce = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

const Ripple = ({ duration, color }) => {
  const [rippleArray, setRippleArray] = useState([]);

  const addRipple = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height;
    const x = event.clientX - rippleContainer.x - size / 2;
    const y = event.clientY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size,
      key: uuidv4(),
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  return (
    <RippleContainer duration={duration} color={color} onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple) => (
          <span
            key={ripple.key}
            style={{
              top: ripple.y,
              left: ripple.x,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
    </RippleContainer>
  );
};

Ripple.propTypes = {
  duration: PropTypes.number,
  color: PropTypes.string,
};

Ripple.defaultProps = {
  duration: parseFloat(Durations.long, 10) * 1000,
  color: Colors.neutral500,
};

export default Ripple;
