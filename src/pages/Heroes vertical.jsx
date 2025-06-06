import styles from "../styles/heroes.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const FilterSection = styled.div`
  background: linear-gradient(to right, #0000007f, #0000004c);
  border: 1px solid #11111190;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
  margin: 40px 100px;
  padding: 20px;
  border-radius: 8px;
  flex-wrap: wrap;
`;

const HeroCategory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  row-gap: 10px;
`;

const HeroCategoryImg = styled.img`
  width: auto;
  height: 30px;
  cursor: pointer;
  transition: filter 0.3s;
  filter: ${(props) =>
    props.selected
      ? "brightness(100%) saturate(1)"
      : "brightness(30%) saturate(0)"};
  &:hover {
    filter: brightness(70%) saturate(0.75);
  }
`;

const HeroesTeamSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin: 20px 100px;
`;

const HeroesTeamContainers = styled.div`
  border: 4px solid transparent;
  border-image: linear-gradient(
    to right,
    #0a0c0e01,
    #e03d1da7,
    #e03c1d,
    #e03d1da7,
    #0a0c0e01
  );
  border-image-slice: 1;
  padding: 20px;
  min-width: 200px;
  min-height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const HeroesNameContainer = styled.div`
  display: inline-block;
  position: absolute;
  left: 50%;
  bottom: 2%;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateX(-50%) translateY(100%) scale(0.9);
`;

const HeroesName = styled.span`
  font-size: 0.6em;
  font-family: "TrajanPro", Arial;
  opacity: 0;
  color: #d1d2d3;
  text-shadow: 0 0 8px black, 0 0 4px black;
`;

const HeroesButton = styled.div`
  border: 4px solid transparent;
  border-image: linear-gradient(135deg, #0a0c0e01, #0b0e11, #1c0d446e);
  border-image-slice: 1;
  padding: 0;
  margin: 0;
  width: 100px;
  height: 150px;
  margin: 10px;
  transition: transform 0.3s ease, z-index 0s, background-size 0.3s ease;
  position: relative;
  z-index: 1;
  background-size: 240%;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: center 30%;

  &:hover {
    transform: scale(1.3);
    background-size: 110%;
    z-index: 10;
    border: 4px solid transparent;
    border-image: linear-gradient(
      135deg,
      #0a0c0e01,
      #e03c1d70,
      #e03c1d,
      #e03c1d70,
      #0a0c0e01
    );
    border-image-slice: 1;
  }

  &:hover ${HeroesNameContainer} {
    opacity: 1;
    transform: translateX(-50%) translateY(10%) scale(1);
  }
`;

const HeroesIcon = styled.img`
  width: 100px;
  height: 150px;
`;

export default function Heroes() {
  const heroCategories = [
    "assassin",
    "mage",
    "tanker",
    "escapist",
    "disabler",
    "support",
  ];
  const [selectedAssassin, setSelectedAssassin] = useState([
    false,
    false,
    false,
  ]);
  const [selectedMage, setSelectedMage] = useState([false, false, false]);
  const [selectedTanker, setSelectedTanker] = useState([false, false, false]);
  const [selectedEscapist, setSelectedEscapist] = useState([
    false,
    false,
    false,
  ]);
  const [selectedDisabler, setSelectedDisabler] = useState([
    false,
    false,
    false,
  ]);
  const [selectedSupport, setSelectedSupport] = useState([false, false, false]);
  const selectedStates = {
    assassin: [selectedAssassin, setSelectedAssassin],
    mage: [selectedMage, setSelectedMage],
    tanker: [selectedTanker, setSelectedTanker],
    escapist: [selectedEscapist, setSelectedEscapist],
    disabler: [selectedDisabler, setSelectedDisabler],
    support: [selectedSupport, setSelectedSupport],
  };

  const handleSelect = (index, category, setCategory) => {
    const newState = category.map((_, i) => {
      return i <= index;
    });
    const allFalse = [false, false, false];
    const arraysAreEqual = (a, b) => a.every((val, i) => val === b[i]);
    setCategory((prevState) => {
      console.log("estado anterior:", prevState, "estado atual", newState);
      return arraysAreEqual(prevState, newState) ? allFalse : newState;
    });
  };

  return (
    <main className="fadeInUp">
      <div>
        <h2 className={styles.h2Text}>Select a Hero</h2>
      </div>
      <FilterSection>
        <h5 className={styles.h5Text}>Filter Heroes:</h5>
        {heroCategories.map((categoryName) => {
          const [selectedArray, setSelectedArray] =
            selectedStates[categoryName];
          return (
            <HeroCategory key={categoryName}>
              <h6 className={styles.h6Text}>{categoryName}</h6>
              {[0, 1, 2].map((index) => (
                <HeroCategoryImg
                  key={index}
                  src={`/categories/${categoryName}.png`}
                  alt={`${categoryName} level ${index + 1}`}
                  selected={selectedArray[index]}
                  onClick={() =>
                    handleSelect(index, selectedArray, setSelectedArray)
                  }
                />
              ))}
            </HeroCategory>
          );
        })}
      </FilterSection>
      <HeroesTeamSection>
        <HeroesTeamContainers>
          <Link to="/heroes/strider">
            <HeroesButton
              style={{
                backgroundImage: "url(/heroes/strider/strider_small.png)",
              }}
            >
              <HeroesNameContainer>
                <HeroesName>a</HeroesName>
              </HeroesNameContainer>
            </HeroesButton>
          </Link>

          <HeroesButton
            style={{
              backgroundImage: "url(/heroes/lawbreaker/lawbreaker_icon.png)",
            }}
          ></HeroesButton>
          <HeroesButton
            style={{
              backgroundImage:
                "url(/heroes/bloodstained/bloodstained_icon.png)",
            }}
          ></HeroesButton>
        </HeroesTeamContainers>
      </HeroesTeamSection>
    </main>
  );
}
