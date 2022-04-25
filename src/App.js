import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const handleStart = () => {
    if(isActive===true){
      setIsActive(false)
    }else{
      setIsActive(true)
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center ">
        <button
          type="button"
          class="btn btn-primary mainbtn"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Start
        </button>
        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Counter App
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="timer">
                  <span className="digits">
                    {("00" + Math.floor((time / 60000) % 60)).slice(-2)}:
                  </span>
                  <span className="digits">
                    {("00" + Math.floor((time / 1000) % 60)).slice(-2)}: 
                  </span>
                  <span className="digits mili-sec">
                    {("00" + ((time / 10) % 100)).slice(-2)}
                  </span>
                </div>
              </div>
              <div class="modal-footer mx-auto">
                <button
                  type="button"
                  class="btn btn-dark mainbtn"
                  onClick={handleStart}
                >
                 {isActive ? "start" : "stop"}  
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
