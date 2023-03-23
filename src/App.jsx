import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
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
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed left-4 bottom-4 z-[10000]">
            <TooltipComponent content="تنظیمات" position="TopRight">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl
            hover:bg-light-gray text-white
            "
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div
              className={`w-72 fixed shrink-0 z-[${
                isClicked.cart ? "10" : "10009"
              }] dark:bg-secondary-dark-bg bg-white`}
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
              activeMenu && "lg:pr-72"
            }`}
          >
            <div
              className="sticky top-0 left-0 bg-main-bg dark:bg-main-dark-bg 
           navbar "
            ></div>
            <Navbar />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
