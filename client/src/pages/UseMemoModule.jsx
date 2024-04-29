import { useState, useMemo } from "react";
import { intialItems } from "../utils/largeArray";

export default function UseMemoModule() {
  const [count, setCount] = useState(0);
  const [items] = useState(intialItems);

  //  const selectedItem = items?.find((element) => element.isCorrect)
  
  const selectedItem = useMemo(
    ()=> items?.find((element) => element.isCorrect),
  [items]
  )

  return (
    <section>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {count}
      <h2>Selected item: {selectedItem?.id}</h2>
    </section>
  );
}
