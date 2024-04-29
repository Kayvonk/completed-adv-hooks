import { useEffect, useRef, useState } from "react";

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
    console.log("====================================");
    console.log("searchTerm:", searchTerm);
    console.log("inputRef.current.value:", inputRef.current.value);
    previousSearchRef.current = searchTerm;
    console.log("====================================");
  }, [searchTerm]);

  return (
    <section>
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
  );
}
