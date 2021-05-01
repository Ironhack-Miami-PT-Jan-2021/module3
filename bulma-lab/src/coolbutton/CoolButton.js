import React, { Component } from "react";

export default class CoolButton extends Component {
  bulmaClasses = {
    isActive: "is-active",
    isBlack: "is-black",
    isCentered: "is-centered",
    isDanger: "is-danger",
    isDark: "is-dark",
    isFocused: "is-focused",
    isGrouped: "is-grouped",
    isHovered: "is-hovered",
    isInfo: "is-info",
    isInverted: "is-inverted",
    isLarge: "is-large",
    isLight: "is-light",
    isLink: "is-link",
    isLoading: "is-loading",
    isMedium: "is-medium",
    isOutlined: "is-outlined",
    isPrimary: "is-primary",
    isRight: "is-right",
    isRounded: "is-rounded",
    isSelected: "is-selected",
    isSmall: "is-small",
    isStatic: "is-static",
    isSuccess: "is-success",
    isText: "is-text",
    isWarning: "is-warning",
    isWhite: "is-white",
  };

  render() {
    const buttonClasses = ["button"];
    if (this.props.className) {
      buttonClasses.push(this.props.className);
    }
    Object.keys(this.props).forEach((propName) => {
      if (this.bulmaClasses[propName]) {
        buttonClasses.push(this.bulmaClasses[propName]);
      }
    });
    console.log(this.props);
    return (
      <button className={buttonClasses.join(" ")}>{this.props.children}</button>
    );
  }
}
