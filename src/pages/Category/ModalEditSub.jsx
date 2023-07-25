import React, {useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { getSubCategories, updateSubCate } from './../../features/subCate/subCateSlice';


function ModalEditSub(props) {
  const dispatch = useDispatch();
  const { show, handleClose, subEdit } = props;
  const [name, setName] = useState('')
  const [subId,  setSubId] = useState('')
  const value = {subId, name}
  const handleEditSub = async() => {
    await dispatch(updateSubCate(value))
    handleClose()
    await dispatch(getSubCategories())
  }
  useEffect(() => {
    if(show){
        setName(subEdit.name)
        setSubId(subEdit.id)
    }
    console.log(subEdit)
  }, [subEdit])
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
          <Modal.Title>Chỉnh sữa loại sản phẩm </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3">
              <Form.Label>ID Loại Sản Phẩm</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={subId}
                onChange={(e) =>  setSubId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tên Danh mục con</Form.Label>
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
          <Button variant="success" onClick={() => {handleEditSub(value)}}>
            Cập nhật
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalEditSub;
