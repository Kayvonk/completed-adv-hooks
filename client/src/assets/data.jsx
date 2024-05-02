
const data = [
{bodyCode: `import { useEffect, useRef, useState } from "react";

export default function UseRefModule() {
  const inputRef = useRef();
  const previousSearchRef = useRef();
  const [searchTerm, setsearchTerm] = useState("");

  const handleChange = (e) => {
    setsearchTerm(e.target.value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    previousSearchRef.current = searchTerm;
  }, [searchTerm]);

  return <main></main>;
}`},
{bodyCode: `import { useEffect, useState } from "react";
import { API } from "../utils/API.jsx";
import { useDebounce } from "..

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
  return <main></main>;
}`},
{bodyCode: `import { useState, useMemo } from "react";
import { intialItems } from "../utils/largeArray";

export default function UseMemoModule() {
  const [count, setCount] = useState(0);
  const [items] = useState(intialItems);

  //  const selectedItem = items?.find((element) => element.isCorrect)
  
  const selectedItem = useMemo(
    ()=> items?.find((element) => element.isCorrect),
  [items]
  )
  return <main></main>;
}`},
{bodyCode: `import { useEffect, useLayoutEffect } from "react";

export default function UseLayoutModule() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to top, purple 0%, pink 100%)";
  }, []);

  useLayoutEffect(() => {
    document.body.style.background =
      "linear-gradient(to top, red 0%, orange 100%)";
  }, []);
    return <main></main>;
  }`},
];
  
export default data;
