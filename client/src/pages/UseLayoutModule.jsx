import { useEffect, useLayoutEffect, useState } from "react";
import data from "../assets/data.jsx";
import { CMirror } from "../components/Cmirror.jsx";
import "../styles/useLayoutModule.css";

export default function UseLayoutModule() {
  const [figureOpacity, setFigureOpacity] = useState(1);
  const [infoZIndex, setInfoZIndex] = useState(6)

  const handleInfoBtn = () => {
    setFigureOpacity(figureOpacity === 1 ? 0.75 : 1);
  };

  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to top, purple 0%, pink 100%)";
  }, []);

  useLayoutEffect(() => {
    document.body.style.background =
      "linear-gradient(to top, red 0%, orange 100%)";
  }, []);

  return (
    <>
      <header>useLayoutEffect</header>
      <main className="useLayoutModuleMain">
        <figure style={{ opacity: figureOpacity }}>
          <CMirror
            width="75vw"
            height="60vh"
            maxWidth="90vw"
            CSSInitialState={null}
            JSInitialState={null}
            bodyInitialState={data[3].bodyCode}
          />
        </figure>
        <div style={{zIndex: infoZIndex}} className={figureOpacity === 1 ? "infoCardContainer infoCardContainerInactive" : "infoCardContainer infoCardContainerActive" }>
          <div
            className={
              figureOpacity === 1 ? "card1 cardInactive" : "card1Active cardActive"
            }
          >
            Behaves similarly to useEffect, but happens synchronously with the
            DOM mutations.
          </div>
          <div
            className={
              figureOpacity === 1 ? "card2 cardInactive" : "card2Active cardActive"
            }
          >
            As a result, a useLayoutEffect will always occur before a useEffect.
          </div>
          <div
            className={
              figureOpacity === 1 ? "card3 cardInactive" : "card3Active cardActive"
            }
          >
            The page will not render until the code within the useLayoutEffect
            is executed.
          </div>
          <div
            className={
              figureOpacity === 1 ? "card4 cardInactive" : "card4Active cardActive"
            }
          >
            Can be a bad idea on bigger operations since it blocks the rendering
            of the application.
          </div>
        </div>
        <button className="infoBtn" onClick={handleInfoBtn}>
          i
        </button>
      </main>
    </>
  );
}
