import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./common/components/header/header";
import { SideBar } from "./common/components/sideBar/sideBar";
import { useAppSelector } from "./common/hooks/reduxHooks";
import { selectAuth } from "./store/auth/authSelectors";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { SignIn } from "./pages/auth/signIn/signIn";
import { Main } from "./pages/main/main";
import { Profile } from "./pages/profile/profile";
import { Bonuses } from "./pages/bonuses/bonuses";
import { History } from "./pages/history/history";
import { Cart } from "./pages/cart/cart";
import { Category } from "./pages/category/category";

export const App = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const navigate = useNavigate();
  const { authInfo } = useAppSelector(selectAuth);

  useEffect(() => {
    navigate("/signIn");
  }, []);

  return (
    <>
      {authInfo.phone && (
        <>
          <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
          <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        </>
      )}
      <Routes>
        <Route path="/signIn" element={authInfo.phone ? <Navigate to={"/main"} replace /> : <SignIn />} />
        <Route path="/main" element={authInfo.phone ? <Main /> : <Navigate to={"/signIn"} replace />} />
        <Route path="/main/:id" element={authInfo.phone ? <Category /> : <Navigate to={"/signIn"} replace />} />
        <Route path="/profile" element={authInfo.phone ? <Profile /> : <Navigate to={"/signIn"} replace />} />
        <Route path="/history" element={authInfo.phone ? <History /> : <Navigate to={"/signIn"} replace />} />
        <Route path="/bonuses" element={authInfo.phone ? <Bonuses /> : <Navigate to={"/signIn"} replace />} />
        <Route path="/cart" element={authInfo.phone ? <Cart /> : <Navigate to={"/signIn"} replace />} />
      </Routes>
    </>
  );
};
