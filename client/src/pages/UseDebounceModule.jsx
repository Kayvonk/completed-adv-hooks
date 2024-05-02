import { useEffect, useState } from "react";
import { API } from "../utils/API.jsx";
import { useDebounce } from "../utils/useDebounce.jsx";
import data from "../assets/data.jsx"
import { CMirror } from "../components/Cmirror.jsx";
import "../styles/UseDebounceModule.css"

export default function UseDebounceModule() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const handleChange = (e) => {
    setsearchTerm(e.target.value);
  };

  useEffect(() => {
    API.getAllUsers().then((res) => setUsers(res.data));
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users?.filter((users) => users.userName.includes(searchTerm))
    );
  }, [debouncedSearchTerm]);

  // useEffect(() => {
  // if (!users) return
  // console.log("users:", users);
  // }, [users])

  return (
    <main>
      <section className="centeredSection">
      <input
      style={{marginBottom: "10px", marginLeft: "50px", marginRight: "50px"}}
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search users..."
        />
        <div className="filteredUsersDiv sc">


      {filteredUsers?.map((user) => {
        return <div key={user._id}>{user.userName} </div>;
      })}

      </div>
      </section>
      <figure className="UseDebounceModuleFigure">
          <CMirror
     width="auto"
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
