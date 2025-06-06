import styled from "styled-components";
import styles from "../styles/heroselectedtalent.module.css";
import { useState } from "react";
import useAnimateOnScrollOnce from "../hooks/useAnimatedScrollOnce";

const colorGradients = {
  blue: "linear-gradient(to right, #6BAEBC, #135459)",
  yellow: "linear-gradient(to right, #C6A158, #604928)",
  red: "linear-gradient(to right, #954533, #452732)",
};
const washColor = {
  blue: "#6BAEBC",
  yellow: "#C6A158",
  red: "#954533",
};

const TalentSection = styled.section`
  background: linear-gradient(to right, #0000007f, #0000004c);
  border: 1px solid #11111190;
  width: 100%;
  min-height: 500px;
`;
const TalentSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 80px;
  padding: 40px;
  border-radius: 0px;
  flex-wrap: wrap;
  width: 100%;
`;

const TalentTitle = styled.h2`
  font-family: "GoudyTrajan";
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
  font-size: 2.4em;
  text-transform: uppercase;
  text-shadow: 0px 0px 10px #4f4f4f, 0px 0px 10px #4f4f4f;
  background: radial-gradient(
    ellipse at 50% 0%,
    rgba(86, 101, 123, 0.132) 0%,
    rgba(44, 58, 65, 0) 100%
  );
`;

const TalentRanksMain = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  flex-wrap: nowrap;
  min-height: 600px;
  gap: 20px;
`;

const TalentLeftSide = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 100%;
  gap: 10px;
`;
const TalentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const TalentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
  width: 240px;
  background-color: #000000;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.8);
  cursor: pointer;
  filter: ${({ isselected }) =>
    isselected ? "brightness(1) saturate(1)" : "brightness(0.8) saturate(0.8)"};
  &:hover {
    filter: brightness(1.2) saturate(1.2);
  }
`;

const TalentContainerGradient = styled.div`
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.9;
  pointer-events: none;
  background: ${(props) => colorGradients[props.$color] || "transparent"};
`;

const TalentContainerBackgroundTexture = styled.div`
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    opacity: 1;
    background-image: url("/images/talents_texture.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.7;
  mix-blend-mode: multiply;
  pointer-events: none;
  background-color: ${(props) => washColor[props.$color] || "transparent"};
`;

const TalentContainerContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.02);
`;

const TalentContainerImg = styled.img`
  opacity: 0.8;
  height: 100%;
  min-width: 40px;
  padding: 12px;
  border-right: 1px solid rgba(0, 0, 0, 0.03);
  filter: drop-shadow(0px 4px 4px #000a0f90);
`;

const TalentContainerTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const TalentContainerTextRank = styled.h6`
  color: #fff;
  text-transform: uppercase;
  font-family: "Holland";
  font-size: 16px;
  opacity: 0.6;
  line-height: 1;
  text-shadow: 1px 1px 4px #00000050;
  letter-spacing: 1px;
`;
const TalentContainerTextLabel = styled.h5`
  color: #fff;
  text-transform: uppercase;
  font-family: "AlbertusNovaBold";
  font-size: 14px;
  line-height: 1;
  letter-spacing: 0.5px;
`;

const TalentSelected = styled.div`
  box-shadow: inset 0px 0px 1.3px 2px #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  pointer-events: none;
  &::after {
    position: absolute;
    content: "";
    width: 22px;
    height: 22px;
    top: 0;
    right: 0;
    opacity: 1;
    background-image: url("/images/talent_selected_icon.svg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const TalentMidSide = styled.div`
  width: 2px;
  flex-shrink: 0;
  min-height: 600px;
  background: linear-gradient(
    to bottom,
    #1a1a1a1d 0%,
    #737373 50%,
    #1a1a1a1d 100%
  );
`;

const TalentRightSide = styled.div`
  flex-grow: 1;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const RanksDescContainer = styled.div`
  min-width: 240px;
  flex-shrink: 0;
  border: 2px solid black;
`;

const RanksDescHeader = styled.div`
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.3;
    background-image: url("/images/talents_texture.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  border-radius: 2px;
  background-color: #000;
  width: 100%;
  height: 60px;

  ${(props) =>
    props.$blue &&
    `
      background: linear-gradient(to right, #6BAEBC, #135459);
    `}
  ${(props) =>
    props.$yellow &&
    `
      background: linear-gradient(to right, #C6A158, #604928);
    `}
  ${(props) =>
    props.$red &&
    `
      // background: linear-gradient(to right, #954533, #452732);
    `}
`;
const RanksDescHeaderImg = styled.img`
  opacity: 0.8;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  min-width: 60px;
  padding: 10px;
  border-right: 1px solid rgba(0, 0, 0, 0.03);
  filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.8));
`;

const RanksDescHeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px 10px;
`;
const RanksDescHeaderName = styled.h4`
  letter-spacing: 0.5px;
  font-family: "GoudyTrajanProBold";
  font-weight: bold;
  font-size: 1em;
  line-height: 0.9;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 1px 1px 8px black;
`;
const RanksDescBody = styled.div`
  padding: 8px 12px;
`;
const RanksDescBodyWrapper = styled.div`
  color: #9ab0cd;
  font-size: 14px;
`;
const RanksDescBodySkillName = styled.h6`
  display: inline-block;
  color: #fff;
  font-size: 14px;
  margin-right: 8px;
  text-transform: capitalize;
  &::before {
    content: "[ ";
  }
  &::after {
    content: " ]";
  }
`;
const RanksDescBodyText = styled.p`
  color: #9ab0cd;
  font-size: 14px;
`;

export default function HeroSelectedTalents() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const ref = useAnimateOnScrollOnce();
  return (
    <TalentSection>
      <TalentSectionContent ref={ref} className="hidden-before-animate">
        <TalentTitle>HERO TALENTS</TalentTitle>
        <TalentRanksMain>
          <TalentLeftSide>
            {[
              {
                color: "blue",
                rank: "rank a ★",
                talentName: "block mastery",
                icon: "/images/talent-icon/armor.png",
              },
              {
                color: "yellow",
                rank: "rank b ★★",
                talentName: "holy guardian",
                icon: "/images/talent-icon/illusion.png",
              },
              {
                color: "red",
                rank: "rank c ★★★",
                talentName: "spell guard",
                icon: "/images/talent-icon/chen.png",
              },
            ].map((ranks, index) => (
              <TalentColumn key={index}>
                <TalentContainer
                  onClick={() => setSelectedIndex(index)}
                  $isselected={selectedIndex === index}
                >
                  <TalentContainerGradient $color={ranks.color} />
                  <TalentContainerBackgroundTexture $color={ranks.color} />
                  <TalentContainerContent>
                    <TalentContainerImg src={ranks.icon} />
                    <TalentContainerTextWrapper>
                      <TalentContainerTextRank>
                        {ranks.rank}
                      </TalentContainerTextRank>
                      <TalentContainerTextLabel>
                        {ranks.talentName}
                      </TalentContainerTextLabel>
                    </TalentContainerTextWrapper>
                  </TalentContainerContent>
                  {selectedIndex === index && <TalentSelected />}
                </TalentContainer>
              </TalentColumn>
            ))}
          </TalentLeftSide>
          <TalentMidSide />
          <TalentRightSide>
            <RanksDescContainer>
              <RanksDescHeader $blue>
                <RanksDescHeaderImg src="/images/talent-icon/armor.png" />
                <RanksDescHeaderContainer>
                  <RanksDescHeaderName>block mastery</RanksDescHeaderName>
                </RanksDescHeaderContainer>
              </RanksDescHeader>
              <RanksDescBody>
                <RanksDescBodyWrapper>
                  <RanksDescBodySkillName>kyrie eleison</RanksDescBodySkillName>
                  Allows casting on allies. Barrier duration: 30.
                </RanksDescBodyWrapper>
              </RanksDescBody>
            </RanksDescContainer>
          </TalentRightSide>
        </TalentRanksMain>
      </TalentSectionContent>
    </TalentSection>
  );
}
