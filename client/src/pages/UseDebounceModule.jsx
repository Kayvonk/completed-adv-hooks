import { useEffect, useState, useLayoutEffect } from "react";
// import { API } from "../utils/API.jsx";
import { useDebounce } from "../utils/useDebounce.jsx";
import data from "../assets/data.jsx";
import userData from "../assets/users.jsx";
import { CMirror } from "../components/Cmirror.jsx";
import "../styles/UseDebounceModule.css";

export default function UseDebounceModule({ isDesktop }) {
  const [users, setUsers] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
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
            Used to delay the execution of code.
          </div>
          <div
            className={
              figureOpacity === 1
                ? "card2 cardInactive"
                : "card2Active cardActive"
            }
          >
            This is commonly a custom hook created with the name useDebounce.
          </div>
          <div
            className={
              figureOpacity === 1
                ? "card3 cardInactive"
                : "card3Active cardActive"
            }
          >
            Can be used to create a delay on search input updates, creating a
            smoother UX.
          </div>
          <div
            className={
              figureOpacity === 1
                ? "card4 cardInactive"
                : "card4Active cardActive"
            }
          >
            Can be used to limit the rate at which API queries occur.
          </div>
        </div>
        <button className="infoBtn" disabled={buttonDisabled} onClick={handleInfoBtn}>
          i
        </button>
      </main>
    </>
  );
}
