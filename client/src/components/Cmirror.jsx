import { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";

export const CMirror = ({
  CSSInitialState,
  JSInitialState,
  bodyInitialState,
  height,
  maxWidth,
  width
 }) => {
  const [CSSState, setCSSState] = useState(CSSInitialState);
  const [bodyState, setBodyState] = useState(bodyInitialState);
  const [JSState, setJSState] = useState(JSInitialState);
  const renderHTML = () => {
    return `<html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
        />
        <title>Document</title>
        <style>
        ${CSSState}
        </style>
        </head>
        <body>
        ${bodyState}
          </body>
        </html>`;
  };

  const [HTMLState, setHTMLState] = useState(bodyInitialState);

  return (
    <>
        <CodeMirror
          value={HTMLState}
          width={width}
          maxWidth={maxWidth}
          height={height}
          theme={vscodeDark}
          onChange={(editor) => {
            setHTMLState(editor);
          }}
          extensions={[javascript({ jsx: true })]}
          readOnly={true}
        />
    </>
  );
};
