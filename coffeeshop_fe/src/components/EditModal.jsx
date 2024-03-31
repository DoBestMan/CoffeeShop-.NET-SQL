import CoffeeForm from "./CoffeeForm";
import "./Modal.css";

const EditModal = ({
  isActive,
  setModalIsActive,
  coffeeid,
}) => {
  if (isActive) {
    return (
      <>
        <div
          className="overlay--user "
          onClick={(click) => setModalIsActive(false)}
        ></div>
        <div className="modal--user bg-gray-50 shadow-md dark:shadow-none dark:bg-gray-800">
          <button
            className="close-modal-btn"
            onClick={() => {
              setModalIsActive(false);
            }}
          >
            X
          </button>
          {
            <CoffeeForm
            coffeeid={coffeeid}
              isEdit={true}
              setModalIsActive={setModalIsActive}
            />
          }
        </div>
      </>
    );
  } else {
    return "";
  }
};

export default EditModal;