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

    _draw = () => {
        if (this.props.shouldDraw && !this.props.shouldDraw()) return;

        let element = this.backdrop.current;
        if (!element) return;

        let { width, height, x, y } = element.getBoundingClientRect();
        let canvas = element.querySelector(".rct-backdrop-filter-canvas");

        html2canvas(document.body, {
            logging: this.props.logging,
            allowTaint: true,
            width,
            height,
            x,
            y,
            useCORS: this.props.useCORS,
            proxy: this.props.proxy,
            canvas,
        }).then(canvas => {
            let ctx = canvas.getContext("2d");
            ctx.filter = this.props.filter;
            ctx.drawImage(canvas, 0, 0);

            if (this.props.onDraw) this.props.onDraw();
        });
    };

    render() {
        return (
            <div
                data-html2canvas-ignore
                className={"rct-backdrop-filter-wrapper " + this.props.className}
                ref={this.backdrop}
            >
                <canvas className="rct-backdrop-filter-canvas" />
                {this.props.children}
            </div>
        );
    }
}

BackdropFilter.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    filter: PropTypes.string,
    logging: PropTypes.bool,
    useCORS: PropTypes.bool,
    proxy: PropTypes.string,
    shouldDraw: PropTypes.func,
    onDraw: PropTypes.func,
};

BackdropFilter.defaultProps = {
    className: "",
    filter: "",
    logging: false,
    useCORS: false,
    proxy: null,
};

export default BackdropFilter;
