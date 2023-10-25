// import { useRef, useState } from "react";9
// import ToastMessage from "./ToastMessage";
// import ToastBar from "./ToastBar";
// const typeObj = {
//   success: "success",
//   fail: "fail",
// };

const Development = () => {
  // const [show, setShow] = useState(false);
  // const handleShow = () => {
  //   setShow(true);
  //   setTimeout(() => {
  //     setShow(false);
  //   }, 2000);
  // };
  // const toastBarRef = useRef(null);
  return (
    <section className="Development">
      {/* <button className="TestButton" onClick={() => handleShow()}>
        Show Toast Message
      </button> */}
      {/* {show && (
        <ToastBar
          message="Test Successfully Converted"
          type={typeObj.success}
        />
      )} */}
      {/* <ToastMessage
        ref={toastBarRef}
        message="Successfully Converted"
        type={typeObj.success}
      /> */}
    </section>
  );
};

export default Development;
