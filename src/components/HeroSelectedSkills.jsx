import styled from "styled-components";
import { useRef, useState } from "react";
import styles from "../styles/heroskills.module.css";
import useAnimatedScrollOnce from "../hooks/useAnimatedScrollOnce.js";
import heroAbilities from "../data/heroAbilities.json";
import ChargeSvg from "./ChargeSvg.jsx";

const HeroSelectedSkillsWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 40px;
  width: 100%;
  min-height: 500px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      to right,
      #1a1a1a1d 0%,
      #737373 50%,
      #1a1a1a1d 100%
    );
  }
`;

const HeroSkillWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const HeroSkillButton = styled.button`
  width: 75px;
  height: 75px;
  display: flex;
  padding: 2px;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0px 0px 2px #969696, 2px 2px 2px #00000090;
  border: 2px solid transparent;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.1s ease, transform 0.3s ease, filter 0.3s ease,
    box-shadow 0.3s ease;
  filter: brightness(0.6) saturate(0.5);
  &:hover {
    border-color: #0f60d1;
    filter: brightness(1) saturate(0.8);
  }
  ${(props) =>
    props.$active &&
    `
    border-color: #E03C1D;
    transform: translateY(-10px);
      filter: brightness(1) saturate(1);
    &:hover{
    border-color: #E03C1D;
     filter: brightness(1) saturate(1);
    }
  `}
`;

const HeroSkillImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const SkillDescWrapper = styled.div`
  background: linear-gradient(to bottom, #0000007f 0%, #00000000 100%);
  width: 100%;
  min-height: 200px;
  margin-top: 0;
  padding: 10px 20px;
  animation: forwards;
`;

const SkillDescInfo = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  width: 100%;
  padding: 20px 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      to right,
      #1a1a1a1d 0%,
      #737373 50%,
      #1a1a1a1d 100%
    );
  }
`;

const SkillDescInfoValues = styled.div`
  min-width: 60px;
  font-size: 16px;
  font-family: "Albertus", Arial;
  text-align: left;
  letter-spacing: 0.1em;
  color: #737373;
  text-transform: uppercase;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
`;

const CooldownIcon = ({ src = "/images/cooldown-icon.svg", ...props }) => (
  <img
    src={src}
    alt="Cooldown icon"
    title="Cooldown"
    width="17"
    height="17"
    style={{}}
    {...props}
  />
);

const CastRangeIcon = ({ src = "/images/castrange-icon.svg", ...props }) => (
  <img
    src={src}
    alt="Cast Range icon"
    title="Cast Range"
    width="17"
    height="17"
    style={{}}
    {...props}
  />
);

const ChargesIcon = ({ src = "/images/charges-icon.svg", ...props }) => (
  <img
    src={src}
    alt="Charges icon"
    title="Charges"
    width="17"
    height="17"
    style={{}}
    {...props}
  />
);

export default function HeroSelectedSkills({ heroName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [skillSelected, setSkillSelected] = useState("1");

  const handleClick = (number, index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
      setSkillSelected(number);
    }
  };

  // const ref = useAnimatedScrollOnce();

  const skills1 = Object.keys(heroAbilities[heroName]);

  return (
    <HeroSelectedSkillsWrapper>
      <HeroSkillWrapper>
        {skills1.map((number, index) => (
          <HeroSkillButton
            key={index}
            $active={activeIndex === index}
            onClick={() => handleClick(number, index)}
          >
            <HeroSkillImg
              src={`/heroes/${heroName}/abilities/skill_${number}.png`}
            />
          </HeroSkillButton>
        ))}
      </HeroSkillWrapper>

      <SkillDescWrapper key={skillSelected} className="HeroSelectedFade">
        <h2 className={styles.h2Text}>
          {heroAbilities[heroName][skillSelected]?.skillname}
        </h2>
        <h4 className={styles.h4Text}>
          {heroAbilities[heroName][skillSelected]?.description}
        </h4>
        <SkillDescInfo>
          {Object.entries(heroAbilities[heroName][skillSelected])
            .filter(([key]) => key !== "skillname" && key !== "description")
            .map(([key, value], index) => {
              if (key == "cooldown") {
                if (value) {
                  return (
                    <SkillDescInfoValues key={index} style={{ order: "999" }}>
                      <CooldownIcon />
                      <h6 className={styles.h6Text}>{value}</h6>
                    </SkillDescInfoValues>
                  );
                } else {
                  return;
                }
              } else if (key == "castrange") {
                if (value) {
                  return (
                    <SkillDescInfoValues key={index} style={{ order: "998" }}>
                      <CastRangeIcon />
                      <h6 className={styles.h6Text}>{value}</h6>
                    </SkillDescInfoValues>
                  );
                } else {
                  return;
                }
              } else if (key == "abilitycharges") {
                return (
                  <SkillDescInfoValues key={index} style={{ order: "997" }}>
                    <ChargesIcon />
                    <h6 className={styles.h6Text}>{value}</h6>
                  </SkillDescInfoValues>
                );
              } else {
                return (
                  <>
                    <SkillDescInfoValues key={index}>
                      {key}
                      <h6 className={styles.h6Text}>{value}</h6>
                    </SkillDescInfoValues>
                  </>
                );
              }
            })}
        </SkillDescInfo>
      </SkillDescWrapper>
    </HeroSelectedSkillsWrapper>
  );
}
