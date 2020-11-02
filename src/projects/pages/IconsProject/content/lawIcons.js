import React from "react";
import styled, { keyframes, css } from "styled-components";

const animationSpeed = css`
  animation-duration: 0.3s;
  animation-iteration-count: 2;
  animation-direction: alternate;
`;

const SVG = styled.svg.attrs({
  viewBox: "0 0 32 32",
  xmlns: "http://www.w3.org/2000/svg"
})`
  width: 100%;
  height: 100%;
  padding: 0;

  position: absolute;
  top: 0;
  left: 0;

  stroke-linejoin: round;
  stroke-linecap: round;
  fill: none;
  stroke: white;
  stroke-width: 2;
  ${animationSpeed}
  & * {
    ${animationSpeed}
  }
`;

// SCALES

const scalesRightAnim = keyframes`
  to {
    transform: translateY(-2px);
}
`;
const scalesLeftAnim = keyframes`
  to {
    transform: translateY(1px);
}
`;
const scalesTiltAnim = keyframes`
  to {
      d: path("M5.16708 7.91006L13.0455 6.52087M18.9544 5.47903L26.8329 4.08984");
    }
`;

const ScalesSVG = styled(SVG)`
  &:hover {
    & .right {
      animation-name: ${scalesRightAnim};
    }
    & .left {
      animation-name: ${scalesLeftAnim};
    }
    & .tilt {
      animation-name: ${scalesTiltAnim};
    }
  }
`;

export const Scales = props => {
  return (
    <>
      <ScalesSVG width="32" height="32">
        <path d="M4 29H16M28 29H16M16 29V9" />
        <g className="left" transform="translate(0 -2)">
          <path d="M2 18L7 11L12 18C12 20.5 9.5 23 7 23C4.5 23 2 20.5 2 18Z" />
          <path d="M2 18H12" />
        </g>
        <g className="right" transform="translate(0 1)">
          <path d="M20 18L25 11L30 18C30 20.5 27.5 23 25 23C22.5 23 20 20.5 20 18Z" />
          <path d="M20 18H30" />
        </g>
        <path
          className="tilt"
          d="M5.16711 4.08997L13.0456 5.47915M18.9544 6.52112L26.8329 7.9103"
        />
        <circle cx="16" cy="6" r="3" />
      </ScalesSVG>
    </>
  );
};

// BRIEFCASE

const breifcaseAnim = keyframes`
  to { d: path("M11 7H3.88278C3.37846 7 2.95306 7.37554 2.8905 7.87596L2 15H12L13 13H19L20 15H30L29.1095 7.87597C29.0469 7.37554 28.6215 7 28.1172 7H21M11 7L12.7236 3.55279C12.893 3.214 13.2393 3 13.618 3H18.382C18.7607 3 19.107 3.214 19.2764 3.55279L21 7M11 7H21  M4 19 L7 15 M28 19 L25 15" );
  }
`;
const BriefcaseSVG = styled(SVG)`
  &:hover {
    & .lid {
      animation-name: ${breifcaseAnim};
    }
  }
`;

export const Briefcase = () => {
  return (
    <>
      <BriefcaseSVG width="32" height="32">
        <path d="M4.90995 28.0995L4 19H13V21H19V19H28L27.09 28.0995C27.0389 28.6107 26.6088 29 26.095 29H5.90499C5.39124 29 4.96107 28.6107 4.90995 28.0995Z" />
        <path
          className="lid"
          d="M11 9 H4 C3.44772 9 3 9.44772 3 10 L3 18 H13 L13 16 H19 L19 18 H29 L29 10 C29 9.44772 28.5523 9 28 9 H21
M11 9 L12.7236 5.55279 C12.893 5.214 13.2393 5 13.618 5 H18.382 C18.7607 5 19.107 5.214 19.2764 5.55279 L21 9 M11 9 H21
M4 19 L4 19 M28 19 L28 19"
        />
      </BriefcaseSVG>
    </>
  );
};

// HANDSHAKE

const handshakeAnim = keyframes`
to {
    transform: translateY(4px);
}
`;
const HandshakeSVG = styled(SVG)`
  & circle {
    fill: white;
    stroke: none;
  }
  &:hover {
    animation-name: ${handshakeAnim};
  }
`;

export const Handshake = () => {
  return (
    <>
      <HandshakeSVG width="32" height="32">
        <path d="M6 20H9L13.5 24.5L15.5 22.5L17 24L19.5 21.5C19.8905 21.8905 21 23 21 23L24 20H26" />
        <path d="M16.5 13.5 L23 20" />
        <circle cx="3" cy="18" r="1" />
        <circle cx="29" cy="18" r="1" />
        <path d="M1 10H6V21H1M31 10H26V21H31" />
        <path d="M6 11H8L11 8H14" />
        <path d="M26 11H24L21.5 8H17" />
        <path d="M18.6626 11L14.6626 15C14.1626 15.5 12.8626 16.2 11.6626 15C10.4626 13.8 11.1626 12.5 11.6626 12L15.6626 8H21.5L24 11H26" />
      </HandshakeSVG>
    </>
  );
};

// GAVEL

const gavelAnim = keyframes`
to {d: path("M15 22.75 L15 25.5 L2 25.5 L2 20 L15 20 L15 22.75 Z M15 22.75 L21 22.75 M21 22.75 L21 26 L19.5 26 L19.5 30.5 L29.5 30.5 L29.5 26 L28 26 L28 19 L29.5 19 L29.5 14.5 L19.5 14.5 L19.5 19 L21 19 L21 22.75 Z");}
}
`;
const GavelSVG = styled(SVG)`
  &:hover {
    & path {
      animation-name: ${gavelAnim};
    }
  }
`;

export const Gavel = () => {
  return (
    <>
      <GavelSVG width="32" height="32">
        <path d="M14.5706 18.9886 L15.2824 21.6449 L2.72534 25.0096 L1.30183 19.697 L13.8589 16.3323 L14.5706 18.9886 Z M14.5706 18.9886 L20.3662 17.4357 M20.3662 17.4357 L21.2073 20.575 L19.7584 20.9632 L20.9231 25.3098 L30.5824 22.7217 L29.4177 18.375 L27.9688 18.7632 L26.1571 12.0017 L27.606 11.6135 L26.4413 7.26685 L16.782 9.85504 L17.9467 14.2017 L19.3956 13.8135 L20.3662 17.4357 Z" />{" "}
      </GavelSVG>
    </>
  );
};

// BADGE

const badgeAnim = keyframes`
to {
    d: path("M21 14 L17.5 13.5 L16 10.5 L14.5 13.5 L11 14 L13.5 16.5 L13 20 L16 18.5 L19 20 L18.5 16.5   Z");
}
`;
const BadgeSVG = styled(SVG)`
  &:hover {
    & .star {
      animation-name: ${badgeAnim};
    }
  }
`;

export const Badge = () => {
  return (
    <>
      <BadgeSVG width="32" height="32">
        <path d="M6 22L7 6C14 6 16 3 16 3C16 3 18 6 25 6L26 22L16.5735 28.5986C16.2291 28.8396 15.7709 28.8396 15.4265 28.5986L6 22Z" />
        <path
          className="star"
          d="M16 10.5 L14.5 13.5 L11 14 L13.5 16.5 L13 20 L16 18.5 L19 20 L18.5 16.5 L21 14 L17.5 13.5 Z"
        />
      </BadgeSVG>
    </>
  );
};

// CERTIFICATE

const certificateAnim = keyframes`
to {
    d: path("M24.2511 30.0987L23.6641 24.0443M27.1488 29.3222L24.63 23.7855");
}
`;
const CertificateSVG = styled(SVG)`
  &:hover {
    & .ribbon {
      animation-name: ${certificateAnim};
    }
  }
`;

export const Certificate = () => {
  return (
    <>
      <CertificateSVG width="32" height="32">
        <path className="text" d="M26 11H6M6 20H17M26 15.5H6" />
        <circle cx="23.5" cy="21.5" r="2.5" />
        <path className="ribbon" d="M22 30L23 24M25 30L24 24" />
        <path d="M18 25H1V7H31V25H29" />
      </CertificateSVG>
    </>
  );
};
