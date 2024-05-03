const cards = [
  {
    module: "useRef",
    notes: [
      "A ref from useRef does not trigger a rerender when its value changes.",
      "Can be used for values that are not needed for rendering.",
      "Can be used on a number of elements including inputs and forms.",
      "Can be used to hold the previous value of a state.",
    ],
  },
  {
    module: "useDebounce",
    notes: [
      "Used to delay the execution of code.",
      "This is commonly a custom hook created with the name useDebounce.",
      "Can be used to create a delay on search input updates, creating a smoother UX.",
      "Can be used to limit the rate at which API queries occur.",
    ],
  },
  {
    module: "useMemo",
    notes: [
      "A hook used to prevent hefty expensive code from running needlessly.",
      "The useMemo hooks will only run when one of the values in the depencency array changes.",
      "Can improve performance if used correctly, or worsen performance if misused.",
    ],
  },
  {
    module: "useLayoutEffect",
    notes: [
      "Behaves similarly to useEffect, but happens synchronously with the DOM mutations.",
      "As a result, a useLayoutEffect will always occur before a useEffect.",
      "The page will not render until the code within the useLayoutEffect is executed.",
      "Can be a bad idea on bigger operations since it blocks the rendering of the application.",
    ],
  },
];
export default cards;
