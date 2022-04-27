import React,{ useState, useEffect }  from "react";
import "./App.css";
import ModalMain from "./components/ModalMain";

const App = () => {
  const [startBtn, setStartBtn] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (startBtn) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 100);
    } else {
      clearInterval(!interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [startBtn]);

  const handleStart = () => {
    if (startBtn) {
      setStartBtn(false);
    } else {
      setStartBtn(true);
    }
  };


  return (
    <>
      <ModalMain time={time} handleStart={handleStart} startBtn={startBtn}/>
    </>
  );
};

export default App;
