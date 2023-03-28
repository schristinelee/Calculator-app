import React, { useState } from "react";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
    console.log(e.target.value);
  };
  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="keypad">
          <button onClick={handleClick} value={"AC"} id="clear">
            AC
          </button>
          <button onClick={handleClick} value={"C"} id="backspace">
            C
          </button>
          <button onClick={handleClick} value={"/"} type="button" className="btn btn-primary">
            &divide;
          </button>
          <button onClick={handleClick} value={"x"}>
            &times;
          </button>
          <button onClick={handleClick} value={"-"}>
            &ndash;
          </button>
          <button onClick={handleClick} value={"="}>
            =
          </button>
          <button onClick={handleClick} value={"+"}>
            +
          </button>
          <button onClick={handleClick} value={9}>
            9
          </button>
          <button onClick={handleClick} value={8}>
            8
          </button>
          <button onClick={handleClick} value={7}>
            7
          </button>
          <button onClick={handleClick} value={6}>
            6
          </button>
          <button onClick={handleClick} value={5}>
            5
          </button>
          <button onClick={handleClick} value={4}>
            4
          </button>
          <button onClick={handleClick} value={3}>
            3
          </button>
          <button onClick={handleClick} value={2}>
            2
          </button>
          <button onClick={handleClick} value={1}>
            1
          </button>
          <button onClick={handleClick} value={0}>
            0
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
