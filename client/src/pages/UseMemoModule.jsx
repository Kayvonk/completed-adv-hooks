import { useState, useMemo, useLayoutEffect, useEffect } from "react";
import { intialItems } from "../utils/largeArray";
import data from "../assets/data.jsx";
import { CMirror } from "../components/Cmirror.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import "../styles/UseMemoModule.css";

export default function UseMemoModule({ isDesktop }) {
  const [count, setCount] = useState(0);
  const [items] = useState(intialItems);
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

  //  const selectedItem = items?.find((element) => element.isCorrect)

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

  const selectedItem = useMemo(
    () => items?.find((element) => element.isCorrect),
    [items]
  );

  return (
    <>
      <header className="useMemoHeader">useMemo</header>
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
            width={isDesktop ? "auto" : "85vw"}
            height="60vh"
            maxWidth="auto"
            CSSInitialState={null}
            JSInitialState={null}
            bodyInitialState={data[2].bodyCode}
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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Consider what happens within a component when any of the states
            change in value. The typical behavior in this scenario is for the
            component to rerender, causing the code within to be executed again.
            <br></br>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In this
            example, we have an expensive operation, since we are using the
            .find() method to search a very large array. Whenever we increment
            the count, the component rerenders. This is where useMemo comes in.
            The code within the useMemo hook is only executed on rerenders when
            the value within the dependency array changes. This means that
            incrementing the count will no longer cause the code within the
            useMemo to fire, potentially improving the performance of our page.
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
            A hook used to prevent hefty, expensive code from running needlessly.
          </div>
          <div
            className={
              figureOpacity !== 1 && showReview
                ? "card2Active cardActive"
                : "card2 cardInactive"
            }
          >
            The typical behavior of a component is to completely rerender when
            the value of any state changes.
          </div>
          <div
            className={
              figureOpacity !== 1 && showReview
                ? "card3Active cardActive"
                : "card3 cardInactive"
            }
          >
            The useMemo hooks will only run when one of the values in the
            depencency array changes.
          </div>
          <div
            className={
              figureOpacity !== 1 && showReview
                ? "card4Active cardActive"
                : "card4 cardInactive"
            }
          >
            Can improve performance if used correctly, or worsen performance if
            misused.
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
