import React from "react";

function PeakContent(props) {
  if (props.Countries.length > 1) {
    return (
      <div className="d-flex flex-column align-items-center">
        <h1>{props.Name}</h1>
        <p>
          <span>Height: </span>
          {props.Height} meters
        </p>
        <p>
          <span>Prominence: </span>
          {props.Prominence} meters
        </p>
        <p>
          <span>Countries: </span>
          {props.Countries.join(", ")}
        </p>
        <p>
          <span>Happiness ranking: </span>
          {props.Happiness[0].Overallrank}, {props.Happiness[1].Overallrank}
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{props.Name}</h1>
        <p>
          <span>Country: </span>
          {props.Countries}
        </p>
        <p>
          <span>Happiness ranking: </span>
          {props.Happiness[0].Overallrank}
        </p>
      </div>
    );
  }
}

export default PeakContent;
