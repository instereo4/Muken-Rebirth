import { Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./Header";
import MainPage from "../pages/MainPage";
import MapInfo from "../pages/MapInfo";
import Heroes from "../pages/Heroes";
import HeroSelected from "../pages/HeroSelected";
import NotFound from "../pages/NotFound";
import ScrollToTop from "./ScrollToTop";

export default function LayoutRoutes() {
  const location = useLocation();
  const is404 = location.pathname === "/404";

  return (
    <>
      <ScrollToTop />
      <main className={is404 ? "no-background" : "main-background"}>
        {!is404 && <Header />}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/info" element={<MapInfo />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/heroes/:heroselected" element={<HeroSelected />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
    </>
  );
}
