import React, { useState, useEffect } from "react";
import "./App.css";

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
      <div className="container d-flex justify-content-center align-items-center ">
        <button
          type="button"
          className="btn btn-primary mainbtn"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Start
        </button>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Counter App
                </h5>
              </div>
              <div class="modal-body">
                <div className="timer">
                  <span className="digits">
                    {("0" + Math.floor((time / 6000) % 60)).slice(-2)}:
                  </span>
                  <span className="digits">
                    {("0" + Math.floor((time / 100) % 60)).slice(-2)}:
                  </span>
                  <span className="digits mili-sec">
                    {("0" + (time % 100)).slice(-2)}
                  </span>
                </div>
              </div>
              <div className="modal-footer mx-auto">
                <button
                  type="button"
                  className="btn btn-dark mainbtn"
                  onClick={handleStart}
                >
                  {!startBtn ? "start" : "stop"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
