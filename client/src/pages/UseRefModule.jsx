import { useEffect, useRef, useState } from "react";
import { CMirror } from "../components/Cmirror";
import data from "../assets/data.jsx"
import "../styles/UseRefModule.css"

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

  return (
    <main>

<section style={{marginLeft: "50px"}} className="centeredSection">
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
        <figure>
          <CMirror
     width="auto"
     height="60vh"
     maxWidth="90vw"
           CSSInitialState={null}
           JSInitialState={null}
           bodyInitialState={data[0].bodyCode}
          />
        </figure>
    </main>
  );
}
