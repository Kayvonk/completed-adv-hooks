import { useEffect, useState, useLayoutEffect } from "react";
import { API } from "../utils/API.jsx";
import { useDebounce } from "../utils/useDebounce.jsx";
import data from "../assets/data.jsx"
import userData from "../assets/users.jsx"
import { CMirror } from "../components/Cmirror.jsx";
import "../styles/UseDebounceModule.css"

export default function UseDebounceModule({isDesktop}) {
  const [users, setUsers] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useLayoutEffect(() => {
    document.body.style.background =
      "linear-gradient(to top, #00c6fb 0%, #005bea 100%)"
  }, []);

  const handleChange = (e) => {
    setsearchTerm(e.target.value);
  };

  useEffect(() => {
    // API.getAllUsers().then((res) => setUsers(res.data));
    if(!userData) return
    setUsers(userData);
  }, [userData]);

  useEffect(() => {
    setFilteredUsers(
      users?.filter((users) => users.userName.includes(searchTerm))
    );
  }, [debouncedSearchTerm]);

  return (
    <main className="useDebounceModuleMain">
      <section className="centeredSection searchInput">
      <input
      style={{marginBottom: "10px", marginLeft: "50px", marginRight: "50px"}}
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
      <figure className="useDebounceModuleFigure">
          <CMirror
     width={isDesktop ? "auto" : "85vw"}
     height="60vh"
     maxWidth="90vw"
           CSSInitialState={null}
           JSInitialState={null}
           bodyInitialState={data[1].bodyCode}
          />
        </figure>
    </main>
  );
}
