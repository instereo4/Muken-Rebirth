import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import TextShuffle from "./TextShuffle.jsx";
import { heroesNameList } from "../data/heroes_name_list";

const HeroNameTitle = styled.h1`
  font-family: "TrajanPro", Arial;
  text-align: center;
`;

const LinkChangeHeroPage = styled(Link)`
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  min-width: 100px;
  align-items: center;
  filter: brightness(50%) saturate(0);
  &:hover {
    filter: brightness(100%) saturate(1);
  }
`;

const ChangeHeroPage = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ChangeHeroPageName = styled.h4`
  color: #d1d2d3;
  transition: filter 0.3s;
  font-size: 1em;
  font-family: "TrajanPro", Arial;
`;

const ArrowSvg = styled.img`
  height: 48px;
`;

export default function HeroSelectedHeader() {
  const { heroselected } = useParams();
  const validHeroes = Object.values(heroesNameList).flat();
  const heroIndex = validHeroes.findIndex((heroes) => heroes === heroselected);
  let heroBefore = heroIndex >= 0 ? validHeroes[heroIndex - 1] : null;
  let heroAfter = heroIndex >= 0 ? validHeroes[heroIndex + 1] : null;
  if (heroIndex == 0) {
    heroBefore = validHeroes[validHeroes.length - 1];
  }
  if (heroIndex == validHeroes.length - 1) {
    heroAfter = validHeroes[0];
  }

  console.log(
    "hero atual: ",
    heroIndex,
    "hero antes: ",
    heroBefore,
    "hero depois: ",
    heroAfter
  );

  return (
    <>
      <TextShuffle text={heroselected.replace(/_/g, " ") || "..."} />
      <ChangeHeroPage>
        <LinkChangeHeroPage to={`/heroes/${heroBefore}`}>
          <ArrowSvg src="/images/arrow_left.svg" />
          <ChangeHeroPageName>
            {heroBefore.replace(/_/g, " ")}
          </ChangeHeroPageName>
        </LinkChangeHeroPage>
        <LinkChangeHeroPage to={`/heroes/${heroAfter}`}>
          <ChangeHeroPageName>
            {heroAfter.replace(/_/g, " ")}
          </ChangeHeroPageName>
          <ArrowSvg src="/images/arrow_right.svg" />
        </LinkChangeHeroPage>
      </ChangeHeroPage>
    </>
  );
}
