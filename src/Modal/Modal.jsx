import React from "react";
import Carusel from "../Carusel/Carusel";
export default function Modal({
    showModal,
    closeModal,
    text,
    text2,
    image1,
    image2,
    image3,
    image4,
}) {
    return (
        <div
            className="modal"
            tabIndex="-1"
            style={{ display: showModal ? "block" : "none" }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{text}</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={closeModal} // Добавляем обработчик события для закрытия модального окна
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p>{text2}</p>
                    </div>
                    <Carusel
                        image1={image1}
                        image2={image2}
                        image3={image3}
                        image4={image4}
                    />
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={closeModal} // Добавляем обработчик события для закрытия модального окна
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
