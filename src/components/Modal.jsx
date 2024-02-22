function Modal({ modalIsOpen, setModalIsOpen, modalMessage }) {
    return (
        modalIsOpen && (
            <div className="Modal">
            <div className="modalContent">
                <h2>{modalMessage}</h2>
                <button className="modalBtn" onClick={() => setModalIsOpen(false)}>
                    Play!
                </button>
            </div>
            </div>
        )
    );
}

export default Modal;
  