import { useEffect, useState, useLayoutEffect } from "react";
// import { API } from "../utils/API.jsx";
import { useDebounce } from "../utils/useDebounce.jsx";
import data from "../assets/data.jsx";
import userData from "../assets/users.jsx";
import { CMirror } from "../components/Cmirror.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import "../styles/UseDebounceModule.css";

export default function UseDebounceModule({ isDesktop }) {
  const [users, setUsers] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
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
    // API.getAllUsers().then((res) => setUsers(res.data));
    if (!userData) return;
    setUsers(userData);
  }, [userData]);

  useEffect(() => {
    setFilteredUsers(
      users?.filter((users) => users.userName.includes(searchTerm))
    );
  }, [debouncedSearchTerm]);

  return (
    <>
      <header className="useDebounceHeader">useDebounce</header>
      <main className="useDebounceModuleMain">
        <section className="centeredSection searchInput">
          <input
            style={{
              marginBottom: "10px",
              marginLeft: "50px",
              marginRight: "50px",
            }}
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search users..."
          />
          <div className="filteredUsersDiv">
            {filteredUsers?.map((user) => {
              return <div key={user._id}>{user.userName} </div>;
            })}
          </div>
        </section>
        <figure
          style={{ opacity: figureOpacity }}
          className="useDebounceModuleFigure"
        >
          <CMirror
            width={isDesktop ? "auto" : "85vw"}
            height="60vh"
            maxWidth="90vw"
            CSSInitialState={null}
            JSInitialState={null}
            bodyInitialState={data[1].bodyCode}
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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This
            example presents a custom hook which we’ve named useDebounce. The
            concept of debouncing is prevalent in programming and refers to
            ensuring that code does not execute more frequently than desired.
            <br></br>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In this
            example, we’ve imported the custom hook into our component. The
            imported function takes in two arguments, the initial value and the
            delay. The function utilizes a setTimeout which assigns a state
            based on the delay provided, then returns the state. In our
            component, we are able to use the debounced value in the dependency
            array of a useEffect. Since we’ve assigned the delay of the
            useDebounce function to be 500ms, this ensures that the useEffect
            will only fire after the debounced value has not changed for half of
            a second. We’ve used this in order to create a smoother user
            experience while using the search input. Give it a try!
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
            Used to delay the execution of code.
          </div>
          <div
            className={
              figureOpacity !== 1 && showReview
                ? "card2Active cardActive"
                : "card2 cardInactive"
            }
          >
            This is commonly a custom hook created with the name useDebounce.
          </div>
          <div
            className={
              figureOpacity !== 1 && showReview
                ? "card3Active cardActive"
                : "card3 cardInactive"
            }
          >
            Can be used to create a delay on search input updates, creating a
            smoother UX.
          </div>
          <div
            className={
              figureOpacity !== 1 && showReview
                ? "card4Active cardActive"
                : "card4 cardInactive"
            }
          >
            Can be used to limit the rate at which API queries occur.
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
            className="listBtn"
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
