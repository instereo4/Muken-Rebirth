import styled, { keyframes } from "styled-components";
import styles from "../styles/heroselectedinfo.module.css";
import * as heroes from "../data/heroes_data";

const animationWidth = (finalWidth) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${finalWidth};
  }
`;

const convert = (value) => {
  const min = 0;
  const max = 45;
  if (value < min) {
    return 0;
  }
  if (value > max) {
    return 100;
  }
  const percentage = ((value - min) * 100) / (max - min);
  return percentage;
};

const heroAttributes = {
  STR: 10,
  INT: 5,
  AGI: 45,
  CON: 25,
  LUCK: 35,
};

const delays = {
  STR: 1.0,
  INT: 1.2,
  AGI: 1.4,
  CON: 1.6,
  LUCK: 1.8,
};

const ContainerWrap = styled.div`
  width: 100%;
  height: 270px;
  flex: 1;
  position: relative;
`;

const HeroInfo = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
`;
const HeroInfoTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;

const HeroInfoTitleIcon = styled.img`
  width: 40px;
`;

const HeroAttribute = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 170px;
`;

const HeroAttributeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
`;
const HeroAttributeColumnName = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  gap: 10px;
`;
const HeroAttributeColumnBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  flex: 1;
`;
const HeroAttributeName = styled.span`
  font-family: "OpenRunde";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  height: 30px;
  display: flex;
  align-items: center;
  color: #969696;
`;
const HeroAttributeBarWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const HeroAttributeBarBg = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background-color: #4c4c4c;
`;
const HeroAttributeBarValue = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 8px;
  width: 0;
  background-color: #fff;
  box-shadow: 0px 0px 10px #427ed1, 0px 0px 10px #427ed1;
  transform: translateY(-50%);
  animation: ${({ $barwidth }) => animationWidth($barwidth)} 0.5s ease forwards;
  animation-delay: ${({ $delay }) => `${$delay}s`};
`;

const HeroRole = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroRoleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
`;

const HeroRolesRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const HeroCategoryImg = styled.img`
  width: auto;
  height: 30px;
  filter: brightness(0.588);
`;
export default function HeroSelectedInfo({ heroName }) {
  return (
    <ContainerWrap>
      <HeroInfo>
        <HeroAttribute>
          <HeroInfoTitleWrapper>
            <HeroInfoTitleIcon src="/images/attribute-icon.svg" />
            <h3 className={styles.texth3}>attributes</h3>
          </HeroInfoTitleWrapper>
          <HeroAttributeWrapper>
            <HeroAttributeColumnName>
              <HeroAttributeName>STR</HeroAttributeName>
              <HeroAttributeName>INT</HeroAttributeName>
              <HeroAttributeName>AGI</HeroAttributeName>
              <HeroAttributeName>CON</HeroAttributeName>
              <HeroAttributeName>LUCK</HeroAttributeName>
            </HeroAttributeColumnName>
            <HeroAttributeColumnBar>
              <HeroAttributeBarWrapper>
                <HeroAttributeBarBg />
                <HeroAttributeBarValue
                  $barwidth={`${convert(
                    heroes[heroName]?.attribute.STR || 0
                  )}%`}
                  $delay={delays.STR || "0s"}
                />
              </HeroAttributeBarWrapper>
              <HeroAttributeBarWrapper>
                <HeroAttributeBarBg />
                <HeroAttributeBarValue
                  $barwidth={`${convert(
                    heroes[heroName]?.attribute.INT || 0
                  )}%`}
                  $delay={delays.INT || "0s"}
                />
              </HeroAttributeBarWrapper>
              <HeroAttributeBarWrapper>
                <HeroAttributeBarBg />
                <HeroAttributeBarValue
                  $barwidth={`${convert(
                    heroes[heroName]?.attribute.AGI || 0
                  )}%`}
                  $delay={delays.AGI || "0s"}
                />
              </HeroAttributeBarWrapper>
              <HeroAttributeBarWrapper>
                <HeroAttributeBarBg />
                <HeroAttributeBarValue
                  $barwidth={`${convert(
                    heroes[heroName]?.attribute.CON || 0
                  )}%`}
                  $delay={delays.CON || "0s"}
                />
              </HeroAttributeBarWrapper>
              <HeroAttributeBarWrapper>
                <HeroAttributeBarBg />
                <HeroAttributeBarValue
                  $barwidth={`${convert(
                    heroes[heroName]?.attribute.LCK || 0
                  )}%`}
                  $delay={delays.LUCK || "0s"}
                />
              </HeroAttributeBarWrapper>
            </HeroAttributeColumnBar>
          </HeroAttributeWrapper>
        </HeroAttribute>
        <HeroRole>
          <HeroInfoTitleWrapper>
            <HeroInfoTitleIcon src="/images/role-icon.svg" />
            <h3 className={styles.texth3}>roles</h3>
          </HeroInfoTitleWrapper>
          <HeroRoleWrapper>
            {Object.entries(heroes[heroName]?.roles || {}).map(
              ([role, value]) => (
                <HeroRolesRow key={role}>
                  {Array.from({ length: value }).map((_, i) => (
                    <HeroCategoryImg
                      key={i}
                      src={`/categories/${role}.png`}
                      alt={`${role} level ${i + 1}`}
                      title={role}
                    />
                  ))}
                </HeroRolesRow>
              )
            )}
          </HeroRoleWrapper>
        </HeroRole>
      </HeroInfo>
    </ContainerWrap>
  );
}
