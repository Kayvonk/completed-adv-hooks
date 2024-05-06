import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { CMirror } from "../components/Cmirror";
import data from "../assets/data.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import "../styles/UseRefModule.css";

export default function UseRefModule({ isDesktop }) {
  const inputRef = useRef();
  const previousSearchRef = useRef();
  const [searchTerm, setsearchTerm] = useState("");
  const [figureOpacity, setFigureOpacity] = useState(1);
  const [infoZIndex, setInfoZIndex] = useState(3);
  const [loading, setLoading] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [showSummary, setShowSummary] = useState(false);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 250);
    setTimeout(() => {
      setButtonDisabled(false);
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
    if (!showSummary && !showReview) {
      setShowSummary(true);
      setShowReview(false);
      setFigureOpacity(0.75);
    } else {
      setShowSummary(false);
      setShowReview(false);
      setFigureOpacity(1);
    }
    setButtonDisabled(true);
    setTimeout(() => {
      setButtonDisabled(false);
    }, 600);
  };

  const handleReviewBtn = () => {
    if (!showReview && !showSummary) {
      setShowReview(true);
      setShowSummary(false);
      setFigureOpacity(0.75);
    } else {
      setShowReview(false);
      setShowSummary(false);
      setFigureOpacity(1);
    }
    setButtonDisabled(true);
    setTimeout(() => {
      setButtonDisabled(false);
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
            figureOpacity !== 1 && showSummary
              ? "infoCardContainer infoCardContainerActive"
              : "infoCardContainer infoCardContainerInactive"
          }
        >
          <div
            className={
              figureOpacity !== 1 && showSummary
                ? "card1Active cardActive"
                : "card1 cardInactive"
            }
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The use
            cases for the useRef hook are many, and while it may seem similar to
            assigning a value with useState, useRef differs in that a ref
            assigned with this hook will not trigger a component to rerender
            when it changes values. Because of this, we would not want to use a
            ref to display dynamic data on the page if we wanted it to update
            when the page rerenders. However, this also means that we can use a
            ref to store the previous value of a state. This works because the
            state itself changes after the component rerenders.
            <br></br>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Another
            use case for the useRef hook is attaching a ref to an input. In this
            example, our input has a ref attached, which we access using
            ‘inputRef.current’. Quite handy for accessing an element!
          </div>
        </div>

        <div
          style={{ zIndex: infoZIndex }}
          className={
            figureOpacity !== 1 && showReview
              ? "infoCardContainer infoCardContainerActive"
              : "infoCardContainer infoCardContainerInactive"
          }
        >
          <div
            className={
              figureOpacity !== 1 && showReview
                ? "card1Active cardActive"
                : "card1 cardInactive"
            }
          >
            A ref from useRef does not trigger a rerender when its value
            changes.
          </div>
          <div
            className={
              figureOpacity !== 1 && showReview
                ? "card2Active cardActive"
                : "card2 cardInactive"
            }
          >
            Can be used for values that are not needed for rendering.
          </div>
          <div
            className={
              figureOpacity !== 1 && showReview
                ? "card3Active cardActive"
                : "card3 cardInactive"
            }
          >
            Can be used on a number of elements including inputs and forms.
          </div>
          <div
            className={
              figureOpacity !== 1 && showReview
                ? "card4Active cardActive"
                : "card4 cardInactive"
            }
          >
            Can be used to hold the previous value of a state.
          </div>
        </div>
        <div className="infoBtnsContainer">
          <button
            className="infoBtn"
            disabled={buttonDisabled}
            onClick={handleInfoBtn}
          >
            <FontAwesomeIcon className="infoIcon" icon={faInfo} />
          </button>
          <button
            className="infoBtn"
            disabled={buttonDisabled}
            onClick={handleReviewBtn}
          >
            <FontAwesomeIcon className="listIcon" icon={faList} />
          </button>
        </div>
      </main>
    </>
  );
}
