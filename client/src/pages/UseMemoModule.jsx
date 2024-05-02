import { useState, useMemo, useEffect } from "react";
import { intialItems } from "../utils/largeArray";
import data from "../assets/data.jsx";
import { CMirror } from "../components/Cmirror.jsx";
import "../styles/UseMemoModule.css";

export default function UseMemoModule({isDesktop}) {
  const [count, setCount] = useState(0);
  const [items] = useState(intialItems);


  // useEffect(() => {
  //   document.body.style.background =
  //   "linear-gradient(to top, #00c6fb 0%, #005bea 100%)"
  // }, []);

  //  const selectedItem = items?.find((element) => element.isCorrect)

  const selectedItem = useMemo(
    () => items?.find((element) => element.isCorrect),
    [items]
  );

  return (
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
      <figure>
        <CMirror
     width={isDesktop ? "auto" : "80vw"}
     height="60vh"
     maxWidth="auto"
          CSSInitialState={null}
          JSInitialState={null}
          bodyInitialState={data[2].bodyCode}
        />
      </figure>
    </main>
  );
}
