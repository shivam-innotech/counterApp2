import React from 'react'

const ModalTime = (props) => {
  return (
    <>
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
    </>
  )
}

export default ModalTime
