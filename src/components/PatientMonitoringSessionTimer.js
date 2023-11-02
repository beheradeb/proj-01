import { useState, useEffect, useRef } from "react";
import "./PatientMonitoringSessionTimer.css";
import StartModal from "./StartModal";
import StopModal from "./StopModal";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [openModal, setOpenModal] = useState(false); //modal
  const [openStopModal, setOpenStopModal] = useState(false); //stop modal
  const timer = useRef();
  useEffect(() => {
    if (running) {
      timer.current = setInterval(() => {
        setTime((pre) => pre + 1);
      }, 1000);
    }
    return () => clearInterval(timer.current);
  }, [running]);
  //modal
  const toggleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const toggleOpenStopModal = () => {
    setOpenStopModal(!openStopModal);
  };
  if (openModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  //end
  const format = (time) => {
    let hours = Math.floor((time / 60 / 60) % 24);
    let minutes = Math.floor((time / 60) % 60);
    let seconds = Math.floor(time % 60);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return hours + ":" + minutes + ":" + seconds;
  };
  const handleStart = () => {
    if (time === 0) toggleOpenModal();
    else setRunning(true);
  };
  const handlePause = () => {
    setRunning(false);
  };
  const handleStop = () => {
    if (running) clearInterval(timer.current);
    setRunning(false);
    toggleOpenStopModal();
  };
  const handleRefresh = () => {
    if (running) clearInterval(timer.current);
    setRunning(false);
    setTime(0);
  };

  return (
    <>
      <div className="timer-container">
        <h4>Please remember to start and stop the monitoring session</h4>
        <div className="action">
          <p className="timer">
            <span>&#x1F552;</span>
            {format(time)}
          </p>
          {running ? (
            <button className="playbtn" onClick={() => handlePause()}>
              <span className="pause">&#8214;</span>
              {/* Pause */}
            </button>
          ) : (
            <button className="playbtn" onClick={() => handleStart()}>
              &#8227;
              {/* Play */}
            </button>
          )}
          <button className="stopbtn" onClick={() => handleStop()}>
            &#8718;
            {/* Stop */}
          </button>
          <button className="restartbtn" onClick={() => handleRefresh()}>
            &#10227;
            {/* refresh */}
          </button>
        </div>
      </div>
      {openModal && (
        <div className="modal">
          <div className="overlay">
            <StartModal
              toggleOpenModal={toggleOpenModal}
              setRunning={setRunning}
              running={running}
              timer={timer}
            />
          </div>
        </div>
      )}
      {openStopModal && (
        <div className="modal">
          <div className="overlay">
            <StopModal
              toggleOpenStopModal={toggleOpenStopModal}
              setRunning={setRunning}
              running={running}
              timer={timer}
              time={time}
              format={format}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Timer;
