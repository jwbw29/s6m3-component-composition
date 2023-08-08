import React from "react";

function PhotoDetails(props) {
  const { title, copyright, date, explanation, url } = props;

  return (
    <div>
      <figure>
        <img src={url} alt="photo to the left" />
      </figure>{" "}
      <h1>{title}</h1>
      <h3>{copyright}</h3>
      <h3>{date}</h3>
      <p>{explanation}</p>
    </div>
  );
}
export default PhotoDetails;
