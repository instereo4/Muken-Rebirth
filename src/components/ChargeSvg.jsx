const ChargeSvg = ({ text = "0" }) => (
  <svg
    width="17px"
    height="17px"
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ userSelect: "none", pointerEvents: "none" }}
  >
    <rect x="0" y="0" width="128" height="128" rx="16" fill="#737373" />
    <g transform="translate(-23,-20) scale(5.8)">
      <path
        d="M15 3v3c-4.9587 0-9 4.04128-9 9s4.0413 9 9 9 9-4.04128 9-9c0-1.97006-.6447-3.79084-1.7246-5.27539L20.85 11.15c.7258 1.10348 1.15 2.42462 1.15 3.85 0 3.87784-3.1222 7-7 7s-7-3.12216-7-7 3.1222-7 7-7v3l5-4-5-4z"
        fill="#ffffff"
      />
      <text
        x="16"
        y="20"
        font-family="sans-serif"
        font-size="12"
        font-weight="bold"
        text-anchor="middle"
        fill="#ffffff"
      >
        {text}
      </text>
    </g>
  </svg>
);

export default ChargeSvg;
