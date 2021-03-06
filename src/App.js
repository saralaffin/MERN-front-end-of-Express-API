import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PeaksPage from "./PeaksPage/PeaksPage";

class App extends Component {
  constructor() {
    super();

    this.state = {
      peaks: null
    };
  }
  componentDidMount() {
    if (!this.state.peaks) {
      let url = "";
      if (process.env.NODE_ENV === "development") {
        console.log("in dev mode!");
        url = "http://localhost:8080/";
      } else {
        console.log("in prod mode!");
        url = "https://peak-happiness-sal.herokuapp.com/";
      }

      axios.get(url).then(res => {
        this.setState({ peaks: res.data });
      });
    }
  }
  render() {
    if (this.state.peaks) {
      return (
        <div>
          <header className="d-flex justify-content-between align-items-center">
            <Link to="/">Home</Link>
            <Link to="/peaks">Peaks List</Link>
          </header>
          <main>
            <article className="d-flex justify-content-center align-items-center">
              <Route
                path="/peaks"
                exact
                render={routerProps => (
                  <PeaksPage {...routerProps} {...this.state} />
                )}
              />
            </article>
          </main>
        </div>
      );
    } else {
      return (
        <div>
          <header>
            <Link to="/">Home</Link>
          </header>
        </div>
      );
    }
  }
}

export default App;
