import React from 'react'

function ModalMain(props) {
  return (
    <div>
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
                    {("0" + Math.floor((props.time / 6000) % 60)).slice(-2)}:
                  </span>
                  <span className="digits">
                    {("0" + Math.floor((props.time / 100) % 60)).slice(-2)}:
                  </span>
                  <span className="digits mili-sec">
                    {("0" + (props.time % 100)).slice(-2)}
                  </span>
                </div>
              </div>
              <div className="modal-footer mx-auto">
                <button
                  type="button"
                  className="btn btn-dark mainbtn"
                  onClick={props.handleStart}
                >
                  {!props.startBtn ? "start" : "stop"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalMain