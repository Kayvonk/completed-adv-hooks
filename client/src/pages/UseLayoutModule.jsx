import { useEffect, useLayoutEffect, useState } from "react";
import data from "../assets/data.jsx";
import { CMirror } from "../components/Cmirror.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import "../styles/useLayoutModule.css";

export default function UseLayoutModule() {
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
    document.body.style.background =
      "linear-gradient(to top, purple 0%, pink 100%)";
  }, []);

  useLayoutEffect(() => {
    document.body.style.background =
      "linear-gradient(to top, red 0%, orange 100%)";
  }, []);

  return (
    <>
      <header className="useLayoutEffectHeader">useLayoutEffect</header>
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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This
            React hook is similar to useEffect, however the differences are
            quite important. Any code within a useLayoutEffect will fire
            synchronously with the DOM, as opposed to a useEffect which is
            executed asynchronously. This means that code within a
            useLayoutEffect will always be executed before the page is rendered,
            making it potentially useful for ensuring that the elements are
            positioned correctly.
            <br></br>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In the
            example provided, notice how our useEffect fires after the
            useLayoutEffect. In general, useLayoutEffect can be bad for the
            performance of a site, since the page will not render until the code
            within is executed. If used wisely, useLayoutEffect can be used to
            improve the appearance of a page, especially when the position of an
            element needs to be computed before the page renders.
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
            Behaves similarly to useEffect, but happens synchronously with the
            DOM mutations.
          </div>
          <div
            className={
              figureOpacity !== 1 && showReview
                ? "card2Active cardActive"
                : "card2 cardInactive"
            }
          >
            As a result, a useLayoutEffect will always occur before a useEffect.
          </div>
          <div
            className={
              figureOpacity !== 1 && showReview
                ? "card3Active cardActive"
                : "card3 cardInactive"
            }
          >
            The page will not render until the code within the useLayoutEffect
            is executed.
          </div>
          <div
            className={
              figureOpacity !== 1 && showReview
                ? "card4Active cardActive"
                : "card4 cardInactive"
            }
          >
            Can be a bad idea on bigger operations since it blocks the rendering
            of the application.
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
