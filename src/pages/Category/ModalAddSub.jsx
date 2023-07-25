import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { addSubCategories, getSubCategories } from './../../features/subCate/subCateSlice';
import { toast } from "react-toastify";
function ModalAddSub(props) {
  const dispatch = useDispatch();
  const { show, handleClose } = props;
  const [name, setName] = useState('')
  const [cateId, setId] = useState('')
  const handleAdd = async() => {
    await dispatch(addSubCategories({cateId,name}))
    toast.success('Thêm mới danh mục con thành công')
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
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Thêm mới danh mục con </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>ID Danh mục sản phẩm</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={cateId}
                onChange={(e) => setId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tên Loại sản phẩm</Form.Label>
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

export default ModalAddSub;
