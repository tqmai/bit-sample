import React from "react";
import styled, { css } from "styled-components";

import {
  Colors,
  FontFamilies,
  FontSizes,
  FontWeights,
  LineHeights,
  Spacing,
  Radii,
  Durations,
  BorderWidths,
  // eslint-disable-next-line import/no-extraneous-dependencies
} from "@paclife/plds.tokens";
import ButtonBase from "./ButtonBase";
import Ripple from "./Ripple";

const StyledButtonBase = styled(ButtonBase)<ButtonProps>`
  /**
    Font Styling
    Note: I am not using the Typography component here because it is difficult 
    to style the text in the hover/active states with it
  */
  font-family: ${FontFamilies.openSans};
  font-style: normal;
  font-weight: ${FontWeights[700]};
  font-size: ${FontSizes.brandBody};
  line-height: ${LineHeights[200]};

  border-radius: ${Radii.rounded};

  /* Button Sizing */
  ${({ size, fixedWidth, fullWidth, variant }) => {
    if (variant === "icon") {
      return css`
        padding: ${Spacing[8]};

        /* there are two size possibilites: small and medium */
        width: ${size === "small" ? Spacing[32] : Spacing[40]};
        height: ${size === "small" ? Spacing[32] : Spacing[40]};
      `;
    }

    if (size === "large") {
      if (fixedWidth) {
        return css`
          padding: 12px ${Spacing[24]};
          width: 120px;
        `;
      }
      if (fullWidth) {
        return css`
          padding: 12px ${Spacing[24]};
          width: 100%;
        `;
      }
      return css`
        padding: 12px ${Spacing[24]};
      `;
    }

    if (size === "medium") {
      if (fixedWidth) {
        return css`
          padding: ${Spacing[8]} ${Spacing[16]};
          width: 104px;
        `;
      }
      if (fullWidth) {
        return css`
          padding: ${Spacing[8]} ${Spacing[16]};
          width: 100%;
        `;
      }
      return css`
        padding: ${Spacing[8]} ${Spacing[24]};
      `;
    }

    if (size === "small") {
      if (fixedWidth) {
        return css`
          padding: ${Spacing[4]} ${Spacing[8]};
          width: 96px;
        `;
      }
      if (fullWidth) {
        return css`
          padding: ${Spacing[4]} ${Spacing[8]};
          width: 100%;
        `;
      }
      return css`
        padding: ${Spacing[4]} 12px;
      `;
    }

    return undefined;
  }}
`;

const PrimaryButton = styled(StyledButtonBase)`
  background-color: ${Colors.blue600};
  color: ${Colors.neutral0};
  border: ${BorderWidths.regular} solid ${Colors.blue600};

  /* styling to pass to icons */
  fill: ${Colors.neutral0};
  stroke: ${Colors.neutral0};

  &:hover {
    background-color: ${Colors.blue700};
    border-color: ${Colors.blue700};
    transition: background-color ${Durations.medium}s, border-color ${Durations.medium}s;
  }

  &:active {
    background-color: ${Colors.blue800};
    border-color: ${Colors.blue800};
  }

  &:focus-visible {
    border-color: ${Colors.neutral0};
    box-shadow: 0px 0px 0px 2px ${Colors.primary};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${Colors.neutral300};
      border-color: ${Colors.neutral300};
    `}

  /* dark mode colors */
  ${({ dark, disabled }) =>
    dark &&
    css`
      background-color: ${Colors.blue300};
      border-color: ${Colors.blue300};
      color: ${Colors.neutral1000};

      fill: ${Colors.neutral1000};
      stroke: ${Colors.neutral1000};

      &:hover {
        background-color: ${Colors.blue200};
        border-color: ${Colors.blue200};
        transition: background-color ${Durations.medium}s, border-color ${Durations.medium}s;
      }

      &:active {
        background-color: ${Colors.blue100};
        border-color: ${Colors.blue100};
      }

      &:focus-visible {
        border-color: ${Colors.neutral0};
        box-shadow: 0px 0px 0px 2px ${Colors.blue300};
      }

      ${disabled &&
      css`
        background-color: ${Colors.neutral200};
        border-color: ${Colors.neutral200};
      `}
    `}
`;

const SecondaryButton = styled(StyledButtonBase)`
  background-color: transparent;
  color: ${Colors.primary};
  border: ${BorderWidths.regular} solid ${Colors.neutral200};

  fill: ${Colors.primary};
  stroke: ${Colors.primary};

  &:hover {
    border-color: ${Colors.neutral300};
    color: ${Colors.blue700};
    transition: border-color ${Durations.medium}s, color ${Durations.medium}s;

    fill: ${Colors.blue700};
    stroke: ${Colors.blue700};
  }

  &:active {
    color: ${Colors.blue800};
    border-color: ${Colors.neutral200};

    fill: ${Colors.blue800};
    stroke: ${Colors.blue800};
  }

  &:focus-visible {
    box-shadow: 0px 0px 0px 2px ${Colors.primary};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${Colors.neutral300};

      fill: ${Colors.neutral300};
      stroke: ${Colors.neutral300};
    `}
`;

const TextButton = styled(SecondaryButton)`
  border: none;

  &:hover {
    background-color: ${Colors.blue100};
    color: ${Colors.blue700};
    transition: background-color ${Durations.medium}s, color ${Durations.medium}s;
  }

  &:focus-visible {
    background-color: ${Colors.blue200};
    color: ${Colors.blue700};
    box-shadow: none;
  }

  &:active {
    background-color: transparent;
    color: ${Colors.blue800};
  }

  /* dark mode colors */
  ${({ dark, disabled }) =>
    dark &&
    css`
      color: ${Colors.blue300};

      fill: ${Colors.blue300};
      stroke: ${Colors.blue300};

      &:hover {
        color: ${Colors.blue200};
        background-color: ${Colors.blue900};
        transition: background-color ${Durations.medium}s, color ${Durations.medium}s;

        fill: ${Colors.blue200};
        stroke: ${Colors.blue200};
      }

      &:active {
        color: ${Colors.blue100};

        fill: ${Colors.blue100};
        stroke: ${Colors.blue100};
      }

      &:focus-visible {
        background-color: ${Colors.blue800};
        color: ${Colors.blue300};

        fill: ${Colors.blue300};
        stroke: ${Colors.blue300};
      }

      &:active {
        background-color: transparent;
        color: ${Colors.blue100};
      }

      ${disabled &&
      css`
        color: ${Colors.neutral200};

        fill: ${Colors.neutral200};
        stroke: ${Colors.neutral200};
      `}
    `}
`;

// icon button size is determined in StyledButtonBase
const IconButton = styled(TextButton)``;

const DestructiveButton = styled(StyledButtonBase)`
  background-color: ${Colors.destructive};
  border-color: ${Colors.destructive};
  color: ${Colors.neutral0};

  fill: ${Colors.neutral0};
  stroke: ${Colors.neutral0};

  &:hover {
    background-color: ${Colors.red700};
    border-color: ${Colors.red700};
    transition: background-color ${Durations.medium}s, border-color ${Durations.medium}s;
  }

  &:active {
    background-color: ${Colors.red800};
    border-color: ${Colors.red800};
  }

  &:focus-visible {
    box-shadow: 0px 0px 0px 2px ${Colors.neutral0}, 0px 0px 0px ${Spacing[4]} ${Colors.destructive};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${Colors.neutral300};
      border-color: ${Colors.neutral300};
    `}
`;

const Label = styled.span`
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
  fill: inherit;
  stroke: inherit;
`;

const IconSpan = styled.span`
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
  position: relative;
  fill: inherit;
  stroke: inherit;

  /* styling applied to icons */
  > * {
    /* these values are inherited from its parent button component */
    fill: inherit;
    stroke: inherit;
  }
`;

const StartIconSpan = styled(IconSpan)<ButtonProps>`
  /* only add margin if variant is not 'icon' */
  margin-right: ${({ variant }) => (variant === "icon" ? 0 : Spacing[8])};
`;

const EndIconSpan = styled(IconSpan)<ButtonProps>`
  /* only add margin if variant is not 'icon' */
  margin-left: ${({ variant }) => (variant === "icon" ? 0 : Spacing[8])};
`;

const VariantMapping = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  text: TextButton,
  icon: IconButton,
  destructive: DestructiveButton,
};

export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  dark?: boolean;
  disabled?: boolean;
  endIcon?: React.ReactNode;
  fixedWidth?: boolean;
  fullWidth?: boolean;
  href?: string;
  size?: "large" | "medium" | "small";
  startIcon?: React.ReactNode;
  variant?: "primary" | "secondary" | "text" | "icon" | "destructive";
}

/**
 * A React button component that dynamically changes themes, sizes, and adds icons depending on the props passed to it.
 * Variants: ["primary", "secondary", "text", "icon", "destructive"] and their respective dark versions.
 * @name Button
 * @param {node} children - button text
 * @param {string} className - className props in case we want to add custom styling
 * @param {boolean} dark - switches to dark mode version of variant
 * @param {boolean} disabled - enabled/disables the button
 * @param {node} endIcon - icon element placed after the children
 * @param {boolean} fixedWidth - button width can be set to a specific value
 * @param {boolean} fullWidth - if true, button will take up the full width of its container
 * @param {string} href - the URL to link to when the button is clicked.
 * @param {string} size - the size of the button
 * @param {node} startIcon - icon element placed before the children
 * @param {string} variant  - the version of a button
 * @return - returns a button component with various prop options to change its styling.
 */
export const Button = React.forwardRef(
  (
    {
      children = null,
      className = "",
      dark = false,
      disabled = false,
      endIcon = null,
      href = "",
      fixedWidth = false,
      fullWidth = false,
      startIcon = null,
      size = "medium",
      variant = "primary",
      ...others // used to receive any native HTML element props
    }: ButtonProps,
    ref
  ) => {
    // ensure that startIcon and endIcon are the right size
    // all icons are 16px except for the medium version of the icon button variant
    const iconSizeChooser = (buttonSize, buttonVariant) => {
      if (buttonSize === "medium" && buttonVariant === "icon") {
        return 24;
      }
      return 16;
    };

    const iconSize = iconSizeChooser(size, variant);
    let startIconWithWidth: React.ReactNode = null;
    if (startIcon) {
      startIconWithWidth = React.cloneElement(startIcon as React.ReactElement<any>, { width: iconSize });
    }

    let endIconWithWidth = null;
    if (endIcon) {
      endIconWithWidth = React.cloneElement(endIcon as React.ReactElement<any>, { width: iconSize });
    }

    // generate the right button variant to render
    const Component = VariantMapping[variant];

    return (
      <Component
        className={className}
        variant={variant}
        dark={dark}
        disabled={disabled}
        href={href}
        fixedWidth={fixedWidth}
        fullWidth={fullWidth}
        size={size}
        ref={ref}
        // rule is disabled because we need to receive any native HTML element props
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...others}
      >
        <Label>
          {startIcon && <StartIconSpan variant={variant}>{startIconWithWidth}</StartIconSpan>}
          {children}
          {endIcon && <EndIconSpan variant={variant}>{endIconWithWidth}</EndIconSpan>}
        </Label>
        <Ripple />
      </Component>
    );
  }
);
