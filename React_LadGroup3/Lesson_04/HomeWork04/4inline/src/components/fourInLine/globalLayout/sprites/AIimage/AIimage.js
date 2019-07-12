import React, { Component } from 'react';
import "./style.css";

class AIimage extends Component {
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
                viewBox="0 0 300 300"
            >

            <g>
	            <g>
                    <path d="M221.755,89.414H78.242c-1.432,0-2.594,1.162-2.594,2.594v95.963c0,1.432,1.162,2.594,2.594,2.594h143.513 c1.432,0,2.594-1.162,2.594-2.594V92.007C224.349,90.576,223.187,89.414,221.755,89.414z" fill={fillColor}/>
			        <path d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003 S232.835,0,149.996,0z M242.504,187.97c0,11.458-9.29,20.749-20.749,20.749h-47.144v11.588h23.801 c4.298,0,7.781,3.483,7.781,7.781c0,4.298-3.483,7.781-7.781,7.781h-96.826c-4.298,0-7.781-3.483-7.781-7.781 c0-4.298,3.483-7.781,7.781-7.781h23.801v-11.588H78.242c-11.458,0-20.749-9.29-20.749-20.749V92.007 c0-11.458,9.29-20.749,20.749-20.749h143.513c11.458,0,20.749,9.29,20.749,20.749V187.97z" fill={fillColor}/>
	            </g>
            </g>
            </svg>
        </div>
        );
    }
}

export default AIimage;