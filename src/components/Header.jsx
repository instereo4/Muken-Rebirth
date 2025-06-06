import styles from "../styles/mainpage.module.css";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-height: 70px;
`;

export default function Header() {
  const location = useLocation();
  return (
    <div className={styles.headerContainer}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexGrow: "1",
        }}
      >
        <Link to="/" className={styles.LinkToHeroes}>
          <img
            src="/images/muken_logo.svg"
            alt="muken_logo"
            className={styles.mukenLogo}
          />
        </Link>
      </div>
      <HeaderMenu>
        <Link to="/info" className={styles.LinkToHeroes}>
          <h5
            className={`textHover mainPageText ${
              location.pathname === "/info" ? "textSelected" : ""
            }`}
          >
            Map Info
          </h5>
        </Link>
        <Link to="/heroes" className={styles.LinkToHeroes}>
          <h5
            className={`textHover mainPageText ${
              location.pathname === "/heroes" ? "textSelected" : ""
            }`}
          >
            Heroes
          </h5>
        </Link>
        <a href="https://steamcommunity.com/" className={styles.LinkToHeroes}>
          <h5 className="textHover mainPageText">Download</h5>
        </a>
      </HeaderMenu>
    </div>
  );
}
