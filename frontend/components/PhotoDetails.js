import React from "react";
import styled from "styled-components";

const StyledDetails = styled.div`
  img {
    float: left;
    width: 46%;
    border-radius: 1rem;
  }
  div.text-container {
    display: inline-block;
    width: 46%;
    margin-left: 20px;
  }
  h1 {
    color: ${(pr) => pr.theme.secondaryColor};
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 0.14rem;
  }
  div.subtitles {
    display: inline-block;
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
    margin-left: 2rem;
  }
  p {
    color: ${(pr) => pr.theme.tertiaryColor};
    font-weight: normal;
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
