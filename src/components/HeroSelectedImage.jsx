import styled from "styled-components";

const ContainerWrap = styled.div`
  width: 100%;
  min-height: 500px;
`;

const SvgFilter = () => (
  <svg width="0" height="0">
    <filter id="noiseFilter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.01"
        numOctaves="3"
        result="noise"
      >
        <animate
          attributeName="baseFrequency"
          dur="10s"
          values="0.01;0.02;0.01"
          repeatCount="indefinite"
        />
      </feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
    </filter>
  </svg>
);

const HeroImageBg = styled.img`
  width: 80%;
  height: auto;
  filter: url(#noiseFilter);
  mask-image: radial-gradient(circle, black, black 40%, transparent 55%);
`;

const HeroImageFront = styled.img`
  left: 0;
  position: absolute;
  width: 80%;
  height: auto;
  filter: drop-shadow(4px 4px 4px #000a0f);
`;

export default function HeroSelectedImage({ heroName }) {
  return (
    <div
      style={{
        position: "relative",
        minWidth: "400px",
        flex: "1",
        maxWidth: "750px",
      }}
    >
      <SvgFilter />
      <HeroImageBg
        src={`/heroes/${heroName}/${heroName}_icon.png`}
        alt="hero bg removed"
      />
      <HeroImageFront
        src={`/heroes/${heroName}/${heroName}_icon_nobg.png`}
        alt="hero front"
      />
    </div>
  );
}
