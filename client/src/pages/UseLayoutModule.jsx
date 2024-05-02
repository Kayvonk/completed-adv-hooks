import { useEffect, useLayoutEffect } from "react";
import data from "../assets/data.jsx"
import { CMirror } from "../components/Cmirror.jsx";

export default function UseLayoutModule() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to top, purple 0%, pink 100%)";
  }, []);

  useLayoutEffect(() => {
    document.body.style.background =
      "linear-gradient(to top, red 0%, orange 100%)";
  }, []);

  return <main>
        <figure>
          <CMirror
           width="75vw"
           height="60vh"
           maxWidth="90vw"
           CSSInitialState={null}
           JSInitialState={null}
           bodyInitialState={data[3].bodyCode}
          />
        </figure>
        
  </main>;
}
