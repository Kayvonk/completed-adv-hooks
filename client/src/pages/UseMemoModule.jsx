import { useState, useMemo, useLayoutEffect } from "react";
import { intialItems } from "../utils/largeArray";
import data from "../assets/data.jsx";
import { CMirror } from "../components/Cmirror.jsx";
import "../styles/UseMemoModule.css";

export default function UseMemoModule({ isDesktop }) {
  const [count, setCount] = useState(0);
  const [items] = useState(intialItems);
  const [figureOpacity, setFigureOpacity] = useState(1);
  const [infoZIndex, setInfoZIndex] = useState(6)

  useLayoutEffect(() => {
    document.body.style.background =
      "linear-gradient(to top, #00c6fb 0%, #005bea 100%)";
  }, []);

  //  const selectedItem = items?.find((element) => element.isCorrect)

  const handleInfoBtn = () => {
    setFigureOpacity(figureOpacity === 1 ? 0.75 : 1);
  };

  const selectedItem = useMemo(
    () => items?.find((element) => element.isCorrect),
    [items]
  );

  return (
    <>
      <header>useMemo</header>
      <main className="useMemoModuleMain">
        <section className="useMemoModuleSection">
          <button
            className="useMemoModuleBtn"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <h4>{count}</h4>
          <h4>Selected item: </h4>
          <h3>{selectedItem?.id}</h3>
        </section>
        <figure style={{ opacity: figureOpacity }}>
          <CMirror
            //  width="auto"
            width={isDesktop ? "auto" : "85vw"}
            height="60vh"
            maxWidth="auto"
            CSSInitialState={null}
            JSInitialState={null}
            bodyInitialState={data[2].bodyCode}
          />
        </figure>
        <div style={{zIndex: infoZIndex}} className={figureOpacity === 1 ? "infoCardContainer infoCardContainerInactive" : "infoCardContainer infoCardContainerActive" }>
          <div
            className={
              figureOpacity === 1 ? "card1 cardInactive" : "card1Active cardActive"
            }
          >
            A hook used to prevent hefty expensive code from running needlessly
          </div>
          <div
            className={
              figureOpacity === 1 ? "card2 cardInactive" : "card2Active cardActive"
            }
          >
            The useMemo hooks will only run when one of the values in the
            depencency array changes.{" "}
          </div>
          <div
            className={
              figureOpacity === 1 ? "card3 cardInactive" : "card3Active cardActive"
            }
          >           
            Can improve performance if used correctly, or worsen performance if
            misused.
          </div>
          {/* <div className={figureOpacity === 1 ? "card4 cardInactive" : "card4 cardActive"}></div> */}
        </div>
        <button className="infoBtn" onClick={handleInfoBtn}>
          i
        </button>
      </main>
    </>
  );
}
