import React, {useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";

import { Form } from "react-bootstrap";
import { getCategories, updateCategories } from './../../features/category/categorySlide';


function ModalEdit(props) { 
  const dispatch = useDispatch();
  const { show, handleClose, cateEdit } = props;
  const [name, setName] = useState('')
  const [id, setCateId] = useState('')
  const value = {id, name}
  const handleEditUser = async() => {
    await dispatch(updateCategories(value))
    handleClose()
    await dispatch(getCategories())
  }
  useEffect(() => {
    if(show){
        setName(cateEdit.name)
        setCateId(cateEdit.id)
    }
    console.log(cateEdit)
  }, [cateEdit])
  return (
    <div
      className="modal show"
      style={{
        display: "block",
        position: "initial",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh sữa danh mục </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3">
              <Form.Label>ID Danh mục</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={id}
                onChange={(e) =>  setCateId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Danh mục sản phẩm</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="success" onClick={()=>handleEditUser(value)}>
            Cập nhật
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalEdit;
