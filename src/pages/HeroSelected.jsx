import styles from "../styles/heroselected.module.css";
import styled from "styled-components";
import { useParams, Navigate } from "react-router-dom";
import HeroSelectedInfo from "../components/HeroSelectedInfo";
import HeroSelectedSkills from "../components/HeroSelectedSkills";
import HeroSelectedHeader from "../components/HeroSelectedHeader";
import HeroSelectedImage from "../components/HeroSelectedImage";
import { heroesNameList } from "../data/heroes_name_list";
import HeroSelectedTalents from "../components/HeroSelectedTalents";

const HeroSelectedRightSide = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  position: relative;
  flex: 1;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      #1a1a1a1d 0%,
      #4f4f4f 50%,
      #1a1a1a1d 100%
    );
  }
`;

export default function HeroSelected() {
  const validHeroes = Object.values(heroesNameList).flat();
  const { heroselected } = useParams();
  if (!validHeroes.includes(heroselected)) {
    return <Navigate to="/404" replace />;
  }
  return (
    <section className={`${styles.sectionHeroSelected} fadeInUp`}>
      <HeroSelectedHeader />
      <main key={heroselected} className="main-hero-selected">
        <HeroSelectedImage heroName={heroselected} />
        <HeroSelectedRightSide>
          <HeroSelectedInfo heroName={heroselected} />
          <HeroSelectedSkills heroName={heroselected} />
        </HeroSelectedRightSide>
      </main>
      <HeroSelectedTalents />
    </section>
  );
}
