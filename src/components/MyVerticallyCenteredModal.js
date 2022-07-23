import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import  priceContext  from '../contexts/prices/priceContext';

function MyVerticallyCenteredModal(props) {
  const {price,setTotalPrice} = useContext(priceContext);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your Order is Ready!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Enjoy Your meal</h4>
        <p>
          Your Total Bill is : {price}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>OK</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal
