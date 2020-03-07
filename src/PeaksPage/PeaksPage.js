import React, { Component } from "react";
import "../App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PeakContent from "../PeakContent/PeakContent";

class PeaksPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePeak: 0
    };
  }
  render() {
    return (
      <article className="small-slider">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <PeakContent {...this.props.peaks[this.state.activePeak]} />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
              onClick={() => console.log("previous!")}
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
              onClick={() => console.log("next!")}
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </article>
    );
  }
}

export default PeaksPage;
