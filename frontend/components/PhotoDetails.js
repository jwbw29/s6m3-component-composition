import React from "react";
import styled from "styled-components";

const StyledDetails = styled.div`
  display: flex;
  gap: 5rem;

  figure {
    width: 50%;
  }

  img {
    float: left;
    border-radius: 1rem;
  }

  div.text-container {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  h1 {
    color: ${(pr) => pr.theme.secondaryColor};
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 0.14rem;
  }
  div.subtitles {
    display: flex;
    gap: 2rem;
  }

  h3#cw {
    color: ${(pr) => pr.theme.secondaryColor};
    font-weight: bolder;
    font-size: 1.1rem;
    float: left;
  }

  h3#date {
    color: ${(pr) => pr.theme.tertiaryColor};
    font-weight: lighter;
    display: inline-block;
  }
  p {
    color: ${(pr) => pr.theme.tertiaryColor};
    max-width: 80%;
    margin-top: 2rem;
  }
`;

function PhotoDetails(props) {
  const { title, copyright, date, explanation, url } = props;

  return (
    <StyledDetails>
      <figure>
        <img src={url} alt="photo to the left" />
      </figure>{" "}
      <div className="text-container">
        <h1>{title}</h1>
        <div className="subtitles">
          <h3 id="cw">{copyright}</h3>
          <h3 id="date">{date}</h3>
        </div>
        <p>{explanation}</p>
      </div>
    </StyledDetails>
  );
}
export default PhotoDetails;
