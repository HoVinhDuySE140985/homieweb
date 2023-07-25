import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import {
  addCategories,
  getCategories,
} from "./../../features/category/categorySlide";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
function ModalAdd(props) {
  const dispatch = useDispatch();
  const { show, handleClose } = props;
  const [name, setName] = useState('')
  const handleAdd = async() => {
    await dispatch(addCategories(name))
    handleClose()
    await dispatch(getCategories()) 
    toast.success('Thêm mới danh mục thành công')
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
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Thêm mới danh mục </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
          <Button variant="success" onClick={handleAdd}>
            Thêm mới
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalAdd;
