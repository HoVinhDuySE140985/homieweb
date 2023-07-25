import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { delCategories, getCategories } from './../../features/category/categorySlide';


function ModalDelete(props) {
  const dispatch = useDispatch();
  const { show, handleClose, cateDelete } = props;
  const cateId = cateDelete.id
  const confirmDelete = async() => {
    await dispatch(delCategories(cateId))
    handleClose()
    await dispatch(getCategories()) 
    console.log(cateId)
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
          <Modal.Title style={{fontSize:"20px"}}>Xóa danh mục sản phẩm </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
            <h1>Bạn có muốn xóa</h1>
            <br/>
              <b>{cateDelete.name} ?</b>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
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

export default ModalDelete;
