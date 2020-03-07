import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      peaks: null
    };
  }
  componentDidMount() {
    console.log("component mounted!");
    if (!this.state.peaks) {
      let url = "https://peak-happiness-sal.herokuapp.com/";

      axios.get(url).then(res => {
        this.setState({ peaks: res.data });
        console.log(res.data[0]);
        console.log("state:", this.state.peaks.Name);
      });
    }
  }
  render() {
    if (this.state.peaks) {
      return (
        <div>
          <header>
            <Link to="/">Peaks List</Link>
          </header>
          <main>
            <article>
              <Route
                path="/"
                exact
                render={() => <h1>{this.state.peaks[0].Name}</h1>}
              />
            </article>
            <article className="small-slider">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <h1>{this.state.peaks[0].Name}</h1>
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
          </main>
        </div>
      );
    } else {
      return (
        <div>
          <header>
            <Link to="/">Peaks List</Link>
          </header>
        </div>
      );
    }
  }
}

export default App;
