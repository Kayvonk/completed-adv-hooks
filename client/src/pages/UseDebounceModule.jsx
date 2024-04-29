import { useEffect, useState } from "react";
import { API } from "../utils/API.jsx";
import { useDebounce } from "../utils/useDebounce.jsx";

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
    console.log(searchTerm);
    // setFilteredUsers(users?.filter((users) => users.userName === searchTerm))
    setFilteredUsers(
      users?.filter((users) => users.userName.includes(searchTerm))
    );
  }, [debouncedSearchTerm]);

  // useEffect(() => {
  // if (!users) return
  // console.log("users:", users);
  // }, [users])

  return (
    <section>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search users..."
      />
      {filteredUsers?.map((user) => {
        return <div key={user._id}>{user.userName} </div>;
      })}
    </section>
  );
}
