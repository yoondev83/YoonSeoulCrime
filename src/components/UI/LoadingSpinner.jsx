import { useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: auto;
  border-color: red;
`;

const LoadingSpinner = () =>{
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    return <FadeLoader color={color} loading={loading} css={override} size={140} />;
};

export default LoadingSpinner;