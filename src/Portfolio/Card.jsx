import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "../Modal/Modal";

function BasicExample({ carts, text, text2, image1, image2, image3, image4 }) {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src={carts} />
                <Card.Body>
                    <Card.Title>{text}</Card.Title>
                    <Button variant="primary" onClick={handleOpenModal}>
                        More photo
                    </Button>
                </Card.Body>
            </Card>
            <Modal
                showModal={showModal}
                closeModal={handleCloseModal}
                text={text}
                text2={text2}
                image1={image1}
                image2={image2}
                image3={image3}
                image4={image4}
            />
        </div>
    );
}

export default BasicExample;
