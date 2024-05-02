import { useEffect, useLayoutEffect, useState } from "react";
import data from "../assets/data.jsx";
import { CMirror } from "../components/Cmirror.jsx";
import "../styles/useLayoutModule.css";

export default function UseLayoutModule() {
  const [figureOpacity, setFigureOpacity] = useState(1);

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
        <div className="infoCardContainer">
          <card
            className={
              figureOpacity === 1 ? "card1 cardInactive" : "card1 cardActive"
            }
          >
            Behaves similarly to useEffect, but happens synchronously with the
            DOM mutations.
          </card>
          <card
            className={
              figureOpacity === 1 ? "card2 cardInactive" : "card2 cardActive"
            }
          >
            As a result, a useLayoutEffect will always occur before a useEffect.
          </card>
          <card
            className={
              figureOpacity === 1 ? "card3 cardInactive" : "card3 cardActive"
            }
          >
            The page will not render until the code within the useLayoutEffect
            is executed.
          </card>
          <card
            className={
              figureOpacity === 1 ? "card4 cardInactive" : "card4 cardActive"
            }
          >
            Can be a bad idea on bigger operations since it blocks the rendering
            of the application.
          </card>
        </div>
        <button className="infoBtn" onClick={handleInfoBtn}>
          i
        </button>
      </main>
    </>
  );
}
