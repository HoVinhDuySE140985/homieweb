import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { delSubCate, getSubCategories } from './../../features/subCate/subCateSlice';

function ModalDeleteSub(props) {
  const dispatch = useDispatch();
  const { show, handleClose, subDel} = props;
  const subId = subDel.id
  const confirmDelete = async() => {
     await dispatch(delSubCate(subId))
    handleClose()
    await dispatch(getSubCategories()) 
  }
  return (
    <div
      className="modal show"
      style={{
        display: "block",
        position: "initial",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Modal show={show} onHide={handleClose} 
      centered>
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:"20px"}}>Xóa loại sản phẩm </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
            <h1>Bạn có muốn xóa</h1>
            <br/>
              <b>{subDel.name} ?</b>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}
          >
            Đóng
          </Button>
          <Button variant="danger" onClick={()=> confirmDelete()}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalDeleteSub;
