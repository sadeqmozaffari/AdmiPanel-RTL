import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import { FiSettings } from "react-icons/fi";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Ecommerce from "./pages/Ecommerce";
import ThemeSettings from "./components/ThemeSettings";
import Customers from "./pages/Customers";
import User from "./pages/User";

function App() {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
    isClicked,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        {themeSettings && <ThemeSettings />}
        <div className="flex relative  dark:bg-main-dark-bg">
          <div className="fixed left-4 bottom-4 z-[10000]">
            <Tippy content="تنظیمات" placement="top-start">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hvoer:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => {
                  setThemeSettings(true);
                }}
              >
                <FiSettings />
              </button>
            </Tippy>
          </div>
          {activeMenu ? (
            <div
              className={`w-72 fixed shrink-0  dark:bg-secondary-dark-bg bg-white`}
              style={{ zIndex: isClicked.cart ? "10" : "10009" }}
            >
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-gray-100 min-h-screen max-w-full grow ${
              activeMenu && " lg:pr-72"
            }`}
          >
            <div className="sticky top-0 left-0 bg-main-bg dark:bg-main-dark-bg navbar">
              <Navbar />
            </div>
            <div>
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/users" element={<User />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
