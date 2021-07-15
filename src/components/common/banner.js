import React from "react";
import Styled from "styled-components";

const Banner = Styled.div`
background-image: url(${(props) => props.image});
height: 100%;
background-position: center;
background-size: cover;
background-repeat: no-repeat;ss
`;

export default (props) => {
  return <Banner image={props.image} />;
};
