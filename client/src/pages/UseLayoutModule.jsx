import { useEffect, useLayoutEffect } from "react";

export default function UseLayoutModule() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)";
  }, []);

  useLayoutEffect(() => {
    document.body.style.background =
      "linear-gradient(to top, #ff0844 0%, #ffb199 100%)";
  }, []);

  return <section></section>;
}
