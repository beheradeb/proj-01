import { useState } from "react";
import "./VerifyPatientBenefitDetails.css";
import RPBModal from "./RPBModal";
import Dropdown from "./Dropdown";
const PEV = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleOpenModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <div className="PEV">
        <div className="flex">
          <h3>Verify Patient Benefit</h3>
          <button className="flex_btn" onClick={() => toggleOpenModal()}>
            Realtime Verify Benefit
          </button>
        </div>
        <Dropdown />
      </div>
      {openModal && (
        <div className="modal">
          <div className="overlay">
            <button className="cross-btn-pev" onClick={toggleOpenModal}>
              <strong>&#9587;</strong>
            </button>
            <RPBModal toggleOpenModal={toggleOpenModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default PEV;
