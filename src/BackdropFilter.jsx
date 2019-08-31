import React, { Component } from "react";
import PropTypes from "prop-types";
import html2canvas from "html2canvas";
import ResizeObserver from "resize-observer-polyfill";

import "./BackdropFilter.css";

class BackdropFilter extends Component {
  backdrop = React.createRef();

  componentDidMount() {
    let element = this.backdrop.current;

    if (element) {
      new ResizeObserver(() => {
        this._draw();
      }).observe(element);
    }

    window.onresize = this._draw;
  }

  componentDidUpdate() {
    this._draw();
  }

  shouldDraw = () => {
    const { shouldDraw } = this.props;
    if (typeof shouldDraw === "function") return shouldDraw();
    return shouldDraw;
  };

  _draw = () => {
    if (!this.shouldDraw()) return;

    const element = this.backdrop.current;
    if (!element) return;

    const { width, height, x, y } = element.getBoundingClientRect();
    const canvas = element.querySelector(".rct-backdrop-filter-canvas");
    
    html2canvas(document.body, {
      ...this.props.html2canvasOpts,
      width,
      height,
      x,
      y,
      canvas,
    }).then(() => {
      let ctx = canvas.getContext("2d");
      ctx.filter = this.props.filter;
      ctx.drawImage(canvas, 0, 0);

      if (typeof this.props.onDraw === "function")
        this.props.onDraw();
    });
  };

  render() {
    const { className, children } = this.props;

    return (
      <div
        data-html2canvas-ignore
        ref={this.backdrop}
        className={"rct-backdrop-filter-wrapper " + className}
      >
        <canvas className="rct-backdrop-filter-canvas" />
        {children}
      </div>
    );
  }
}

BackdropFilter.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  filter: PropTypes.string,
  shouldDraw: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  onDraw: PropTypes.func,
  html2canvasOpts: PropTypes.object,
};

BackdropFilter.defaultProps = {
  className: "",
  filter: "",
  shouldDraw: true,
  html2canvasOpts: {}
};

export default BackdropFilter;
