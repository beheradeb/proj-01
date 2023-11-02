import "./VerifyPatientBenfitDetailsfromLead.css";
import { useState } from "react";
import VerifyPatientBenfitDetailsfromLeadModal from "./VerifyPatientBenfitDetailsfromLeadModal";

const VerifyPatientBenfitDetailsfromLead = () => {
  const [verified, setVerified] = useState(false);
  const [show, setShow] = useState(false);
  const toggleOpenModal = () => {
    setShow(!setShow);
  };
  const handleVerifyBenefit = () => {
    console.log("handleVerifyBenefit");
    setVerified(true);
    setShow(true);
  };
  return (
    <>
      <div className="VerifyPatientBenfitDetailsfromLead">
        <div className="vbf-lead">
          {verified ? (
            <button>Verified Benefit</button>
          ) : (
            <button onClick={() => handleVerifyBenefit()}>
              Verify Benefit
            </button>
          )}
          <input
            type="checkbox"
            checked={verified}
            onChange={() => setVerified(!verified)}
          />
        </div>
      </div>
      {show && (
        <div className="modal">
          <div className="overlay">
            <button className="cross-btn-vpb" onClick={toggleOpenModal}>
              <strong>&#9587;</strong>
            </button>
            <VerifyPatientBenfitDetailsfromLeadModal
              toggleOpenModal={toggleOpenModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VerifyPatientBenfitDetailsfromLead;
