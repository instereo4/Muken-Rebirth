import styled from "styled-components";
import { useState } from "react";
import styles from "../styles/heroskills.module.css";
import useAnimatedScrollOnce from "../hooks/useAnimatedScrollOnce.js";

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
  height: 400px;
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
  display: flex;
  flex-direction: row;
  gap: 6px;
  min-width: 60px;
`;

const SkillDescInfoValuesCD = ({
  src = "/images/cooldown-icon.svg",
  ...props
}) => (
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

const SkillDescInfoValuesCastRange = ({
  src = "/images/castrange-icon.svg",
  ...props
}) => (
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

export default function HeroSelectedSkills({ heroName }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  const skills = [
    `/heroes/${heroName}/skill_1.png`,
    `/heroes/${heroName}/skill_2.png`,
    `/heroes/${heroName}/skill_3.png`,
    `/heroes/${heroName}/skill_4.png`,
  ];

  const ref = useAnimatedScrollOnce();

  return (
    <HeroSelectedSkillsWrapper>
      <HeroSkillWrapper>
        {skills.map((src, index) => (
          <HeroSkillButton
            key={index}
            $active={activeIndex === index}
            onClick={() => handleClick(index)}
          >
            <HeroSkillImg src={src} />
          </HeroSkillButton>
        ))}
      </HeroSkillWrapper>
      <SkillDescWrapper ref={ref} className="hidden-before-animate">
        <h2 className={styles.h2Text}>Frost Attack</h2>
        <h4 className={styles.h4Text}>
          Each basic attack applies 1 Frost Stack on target.
        </h4>
        <SkillDescInfo>
          <SkillDescInfoValues>
            <h5 className={styles.h5Text}>STACK DURATION:</h5>
            <h6 className={styles.h6Text}>6</h6>
          </SkillDescInfoValues>
          <SkillDescInfoValues>
            <h5 className={styles.h5Text}>%SLOW PER STACK:</h5>
            <h6 className={styles.h6Text}>12</h6>
          </SkillDescInfoValues>
          <SkillDescInfoValues>
            <h5 className={styles.h5Text}>FREEZE DURATION:</h5>
            <h6 className={styles.h6Text}>4</h6>
          </SkillDescInfoValues>
          <SkillDescInfoValues>
            <h5 className={styles.h5Text}>
              <SkillDescInfoValuesCD />
            </h5>
            <h6 className={styles.h6Text}>12</h6>
          </SkillDescInfoValues>
          <SkillDescInfoValues>
            <h5 className={styles.h5Text}>
              <SkillDescInfoValuesCastRange />
            </h5>
            <h6 className={styles.h6Text}>600</h6>
          </SkillDescInfoValues>
        </SkillDescInfo>
      </SkillDescWrapper>
    </HeroSelectedSkillsWrapper>
  );
}
