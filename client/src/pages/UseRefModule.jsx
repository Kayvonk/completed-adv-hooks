import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { CMirror } from "../components/Cmirror";
import data from "../assets/data.jsx";
import "../styles/UseRefModule.css";

export default function UseRefModule({ isDesktop }) {
  const inputRef = useRef();
  const previousSearchRef = useRef();
  const [searchTerm, setsearchTerm] = useState("");
  const [figureOpacity, setFigureOpacity] = useState(1);
  const [infoZIndex, setInfoZIndex] = useState(3);
  const [loading, setLoading] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 250);
    setTimeout(() => {
      setButtonDisabled(false)
    }, 600);
  }, []);


  useEffect(() => {
    if (loading) return;
    if (figureOpacity === 1) {
      setTimeout(() => {
        setInfoZIndex(3);
      }, 600);
    } else {
      setInfoZIndex(6);
    }
  }, [figureOpacity]);

  useLayoutEffect(() => {
    document.body.style.background =
      "linear-gradient(to top, #00c6fb 0%, #005bea 100%)";
  }, []);

  const handleChange = (e) => {
    setsearchTerm(e.target.value);
  };

  const handleInfoBtn = () => {
    setFigureOpacity(figureOpacity === 1 ? 0.75 : 1);
    setButtonDisabled(true)
    setTimeout(() => {
      setButtonDisabled(false)
    }, 600);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    previousSearchRef.current = searchTerm;
  }, [searchTerm]);

  return (
    <>
      <header className="useRefHeader">useRef</header>

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
        <div
          style={{ zIndex: infoZIndex }}
          className={
            figureOpacity === 1
              ? "infoCardContainer infoCardContainerInactive"
              : "infoCardContainer infoCardContainerActive"
          }
        >
          <div
            className={
              figureOpacity === 1
                ? "card1 cardInactive"
                : "card1Active cardActive"
            }
          >
            A ref from useRef does not trigger a rerender when its value
            changes.
          </div>
          <div
            className={
              figureOpacity === 1
                ? "card2 cardInactive"
                : "card2Active cardActive"
            }
          >
            Can be used for values that are not needed for rendering.
          </div>
          <div
            className={
              figureOpacity === 1
                ? "card3 cardInactive"
                : "card3Active cardActive"
            }
          >
            Can be used on a number of elements including inputs and forms.
          </div>
          <div
            className={
              figureOpacity === 1
                ? "card4 cardInactive"
                : "card4Active cardActive"
            }
          >
            Can be used to hold the previous value of a state.
          </div>
        </div>
        <button className="infoBtn" disabled={buttonDisabled} onClick={handleInfoBtn}>
          i
        </button>
      </main>
    </>
  );
}
