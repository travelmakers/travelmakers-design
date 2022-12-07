import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface Props {
  process?: boolean;
  stroke?: string;
  aniDelay?: number;
  length?: number;
}

export const IconProcess: React.FC<Props> = ({
  process = false,
  aniDelay,
  length,
  stroke = "#8d8d8d",
}) => {
  if (process) {
    return (
      <Svg
        className="angle"
        width="16"
        height="16"
        process={process}
        aniDelay={aniDelay ?? 1.5}
        length={length ?? 3}
        stroke={stroke}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={"path3"}
          d="M1.84326 5L4.67169 7.82843L1.84326 10.6569"
        />
        <path className={"path2"} d="M6.5 5L9.32843 7.82843L6.5 10.6569" />
        <path
          className={"path1"}
          d="M11.1567 5L13.9852 7.82843L11.1567 10.6569"
        />
      </Svg>
    );
  } else {
    return (
      <Svg
        className="angle"
        width="16"
        height="16"
        process={false}
        aniDelay={aniDelay ?? 0}
        length={length}
        stroke={stroke}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 5L9.82843 7.82843L7 10.6569" />
      </Svg>
    );
  }
};

const Svg = styled.svg<{
  process?: boolean;
  stroke?: string;
  aniDelay: number;
  length: number;
}>`
  width: 100%;
  height: 100%;
  stroke: #8d8d8d;
  ${({ stroke }) =>
    stroke
      ? css`
          stroke: ${stroke};
        `
      : null}

  & > .path1 {
    stroke: #8d8d8d;
    // stroke: rgba(3, 147, 110, 1);
    ${({ process, aniDelay, length }) =>
      process
        ? css`
            border-radius: 18px;
            color: white;
            opacity: 0;
            animation: Twinkle ${aniDelay}s infinite;
            animation-delay: ${aniDelay / (length / 3)}s;
          `
        : null}
  }
  & > .path2 {
    stroke: #b6b6b6;
    // stroke: rgba(3, 147, 110, 0.8);
    ${({ process, aniDelay, length }) =>
      process
        ? css`
            border-radius: 18px;
            color: white;
            opacity: 0;
            animation: Twinkle ${aniDelay}s infinite;
            animation-delay: ${aniDelay / (length / 2)}s;
          `
        : null}
  }
  & > .path3 {
    stroke: #d7d7d7;
    // stroke: rgba(3, 147, 110, 0.6);
    ${({ process, aniDelay, length }) =>
      process
        ? css`
            border-radius: 18px;
            color: white;
            opacity: 0;
            animation: Twinkle ${aniDelay}s infinite;
            animation-delay: ${aniDelay / (length / 1)}s;
          `
        : null}
  }

  @keyframes Twinkle {
    from {
      opacity: 1;
    }
    70% {
      opacity: 0;
    }
  }
`;

export default IconProcess;
