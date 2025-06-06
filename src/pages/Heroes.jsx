import styles from "../styles/heroes.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { heroesNameList } from "../data/heroes_name_list";
import * as heroes_data from "../data/heroes_data";

const FilterSection = styled.div`
  background: linear-gradient(to right, #0000007f, #0000004c);
  border: 1px solid #11111190;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin: 40px 0px;
  padding: 20px;
  border-radius: 0px;
  flex-wrap: wrap;
`;

const HeroCategoryWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  flex-wrap: wrap;
  min-width: 470px;
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
  padding: 40px;
  min-width: 200px;
  min-height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 30px;
  flex-wrap: wrap;
`;

const HeroesName = styled.span`
  width: 100%;
  text-align: center;
  font-size: 0.6em;
  font-family: "TrajanPro", Arial;
  text-transform: lowercase;
  letter-spacing: -0.05em;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  opacity: 0;
  color: #d1d2d3;
  z-index: 2;
  text-shadow: 2px 2px 2px #1c0d44;
  display: inline-block;
  position: absolute;
  left: 50%;
  bottom: 2%;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateX(-50%) scale(0.8);
`;

const HeroesWrapper = styled.div`
  position: relative;
  width: 167px;
  height: 250px;
  transition: transform 0.3s ease, z-index 0s;
  overflow: hidden;
  padding: 0px;
  z-index: 2;
`;

const HeroesButton = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease, background-size 0.3s ease;
  position: relative;
  background-size: 240%;
  background-repeat: no-repeat;
  background-position: center 30%;
`;

const HeroContainerAnimation = styled.div`
  height: 250px;
  width: 167px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px hsl(0 0% 0% / 25%);
  animation: border-angle-rotate 2s infinite linear;
  border: 0.3em solid transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: opacity 0.3s ease;
  border-radius: 0px;
  --border-angle: 0deg;
  opacity: 1;
  border: 4px solid #070809;
  /* border-image: linear-gradient(45deg, #10141550, #101415, #10141550); */
  border-image-slice: 1;
  &:hover {
    opacity: 1;
  }

  @keyframes border-angle-rotate {
    from {
      --border-angle: 0deg;
    }
    to {
      --border-angle: 360deg;
    }
  }
  @property --border-angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
`;

const LinkEdit = styled(Link)`
  backface-visibility: hidden;
  transition: transform 0.3s ease, z-index 0s;
  overflow: hidden;
  height: 250px;
  width: 167px;
  position: relative;
  box-shadow: 2px 2px 3px #000a0f;
  &:hover {
    transform: scale(1.2);
    z-index: 10;
  }
  &:hover ${HeroesWrapper} {
    padding: 4px;
  }
  &:hover ${HeroesName} {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
  &:hover ${HeroesButton} {
    background-size: 110%;
  }
  &:hover ${HeroContainerAnimation} {
    background: linear-gradient(#00000000, #00000000) padding-box,
      conic-gradient(from var(--border-angle), #e03c1d, #0a0c0e01) border-box,
      conic-gradient(
          from calc(var(--border-angle) + 180deg),
          #e03c1d,
          #0a0c0e01
        )
        border-box;
    border-image: linear-gradient(135deg, #0a0c0e01, #0b0e11, #1c0d446e);

    border-image-slice: 1;
  }
`;
const allHeroes = Object.values(heroesNameList).flat();

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

  const allRoles = {
    assassin: 0,
    mage: 0,
    tanker: 0,
    escapist: 0,
    disabler: 0,
    support: 0,
  };
  const [filterRolesSelected, setFilterRolesSelected] = useState(allRoles);

  const handleSelect = (index, category, setCategory, categoryName) => {
    const newState = category.map((_, i) => {
      return i <= index;
    });
    const allFalse = [false, false, false];
    const arraysAreEqual = (a, b) => a.every((val, i) => val === b[i]);
    setCategory((prevState) => {
      setFilterRolesSelected((prev) => {
        const updatedRoles = { ...prev };
        updatedRoles[categoryName] = index + 1 || 0;

        if (arraysAreEqual(prevState, newState)) {
          updatedRoles[categoryName] = 0;
          console.log("updatedROles :::", updatedRoles[categoryName]);
        }
        return updatedRoles;
      });

      return arraysAreEqual(prevState, newState) ? allFalse : newState;
    });
  };

  const [heroesFiltered, setHeroesFiltered] = useState(allHeroes);

  const isHeroMatch = (heroRoles, selectedRoles) => {
    for (const role in selectedRoles) {
      const requiredValue = selectedRoles[role];
      const heroValue = heroRoles[role] || 0;

      if (requiredValue > 0 && !(role in heroRoles)) {
        return false;
      }

      if (heroValue < requiredValue) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    const filtered = allHeroes.filter((heroName) => {
      const heroData = heroes_data[heroName];
      if (isHeroMatch(heroData.roles, filterRolesSelected)) {
        return heroName;
      } else return false;
    });
    console.log("FILTERED:", filtered);
    setHeroesFiltered(filtered);
  }, [filterRolesSelected]);

  return (
    <main className="fadeInUp">
      <div>
        <h2 className={styles.h2Text} style={{ fontSize: "2em" }}>
          Select a Hero
        </h2>
      </div>
      <FilterSection>
        <h5 className={styles.h5Text}>Filter Heroes:</h5>
        <HeroCategoryWrap>
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
                    alt={`${categoryName}_${index + 1}`}
                    selected={selectedArray[index]}
                    onClick={() =>
                      handleSelect(
                        index,
                        selectedArray,
                        setSelectedArray,
                        categoryName
                      )
                    }
                  />
                ))}
              </HeroCategory>
            );
          })}
        </HeroCategoryWrap>
      </FilterSection>
      <HeroesTeamSection>
        <HeroesTeamContainers>
          {heroesFiltered.map((hero) => (
            <LinkEdit
              to={`/heroes/${hero}`}
              key={hero}
              className="HeroSelectedFade"
            >
              <HeroesWrapper>
                <HeroesButton
                  style={{
                    backgroundImage: `url(/heroes/${hero}/${hero}_icon.png)`,
                    backgroundPositionY:
                      hero == "hunter"
                        ? "60%"
                        : hero == "lawbreaker"
                        ? "25%"
                        : "30%",
                  }}
                />
                <HeroesName>{hero.replace(/_/g, " ")}</HeroesName>
              </HeroesWrapper>
              <HeroContainerAnimation />
            </LinkEdit>
          ))}
        </HeroesTeamContainers>
      </HeroesTeamSection>
    </main>
  );
}
