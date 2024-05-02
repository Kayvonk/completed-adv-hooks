import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { CMirror } from "../components/Cmirror";
import data from "../assets/data.jsx";
import "../styles/UseRefModule.css";

export default function UseRefModule({ isDesktop }) {
  const inputRef = useRef();
  const previousSearchRef = useRef();
  const [searchTerm, setsearchTerm] = useState("");
  const [figureOpacity, setFigureOpacity] = useState(1);

  useLayoutEffect(() => {
    document.body.style.background =
      "linear-gradient(to top, #00c6fb 0%, #005bea 100%)";
  }, []);

  const handleChange = (e) => {
    setsearchTerm(e.target.value);
  };

  const handleInfoBtn = () => {
    setFigureOpacity(figureOpacity === 1 ? 0.75 : 1);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    previousSearchRef.current = searchTerm;
  }, [searchTerm]);

  return (
    <>
      <header>useRef</header>

      <main className="useRefModuleMain">
        <section className="centeredSection useRefModuleSection">
          <input
            id="searchInput"
            value={searchTerm}
            onChange={handleChange}
            ref={inputRef}
            type="text"
            placeholder="Type here..."
          ></input>
          <div>
            Search value is {searchTerm} and the previous value{" "}
            {previousSearchRef.current}
          </div>
        </section>
        <figure style={{ opacity: figureOpacity }}>
          <CMirror
            width={isDesktop ? "auto" : "85vw"}
            // width="auto"
            height="60vh"
            maxWidth="90vw"
            CSSInitialState={null}
            JSInitialState={null}
            bodyInitialState={data[0].bodyCode}
          />
        </figure>
        <div className="infoCardContainer">
          <card
            className={
              figureOpacity === 1 ? "card1 cardInactive" : "card1 cardActive"
            }
          >
           A ref from useRef does not trigger a rerender when its value changes.
          </card>
          <card
            className={
              figureOpacity === 1 ? "card2 cardInactive" : "card2 cardActive"
            }
          >
            Can be used for values that are not needed for rendering.
          </card>
          <card
            className={
              figureOpacity === 1 ? "card3 cardInactive" : "card3 cardActive"
            }
          >
            Can be used on a number of elements including inputs and forms.
          </card>
          <card
            className={
              figureOpacity === 1 ? "card4 cardInactive" : "card4 cardActive"
            }
          >
            Can be used to hold the previous value of a state.
          </card>
        </div>
        <button className="infoBtn" onClick={handleInfoBtn}>
          i
        </button>
      </main>
    </>
  );
}
