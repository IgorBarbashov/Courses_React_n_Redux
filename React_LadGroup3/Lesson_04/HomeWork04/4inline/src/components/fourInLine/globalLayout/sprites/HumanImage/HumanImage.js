import React, { Component } from 'react';
import "./style.css";

class HumanImage extends Component {
    // mouseEnternOnItem = () => {
    //     this.props.mouseEnternOnItem("AIimage");
    // }
    // mouseLeaveFromItem = () => {
    //     this.props.mouseLeaveFromItem("AIimage");
    // }

    render() {
        let fillColor = this.props.color;
        let logoSize = this.props.size + "px";

        return (
        <div
            className="footer-item-logo"
            // onMouseEnter={ this.mouseEnternOnItem }
            // onMouseLeave={ this.mouseLeaveFromItem }
        >
            <svg
                width={logoSize}
                height={logoSize}
                viewBox="0 0 299.997 299.997"
            >

            <g>
	            <g>
                    <path d="M149.996,0C67.157,0,0.001,67.158,0.001,149.997c0,82.837,67.156,150,149.995,150s150-67.163,150-150 C299.996,67.156,232.835,0,149.996,0z M150.453,220.763v-0.002h-0.916H85.465c0-46.856,41.152-46.845,50.284-59.097l1.045-5.587 c-12.83-6.502-21.887-22.178-21.887-40.512c0-24.154,15.712-43.738,35.089-43.738c19.377,0,35.089,19.584,35.089,43.738 c0,18.178-8.896,33.756-21.555,40.361l1.19,6.349c10.019,11.658,49.802,12.418,49.802,58.488H150.453z" fill={fillColor}/>
	            </g>
            </g>
            </svg>
        </div>
        );
    }
}

export default HumanImage;