import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { addCoupons, getCoupons } from './../../features/coupon/couponSlide';
function ModalAddCoupon(props) {
  const dispatch = useDispatch();
  const { show, handleClose } = props;
  const [type, setType] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [dateStart, setStart] = useState('')
  const [dateExp, setExp] = useState('')
  const [description, setDes] = useState('')
  const [value, setValue] = useState('')
  const coupon = {type, title, image, dateStart, dateExp, description, value}
  const handleAdd = async() => {
    await dispatch(addCoupons(coupon))
    console.log(coupon)
    handleClose()
    await dispatch(getCoupons())
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
          <Modal.Title>Thêm mới khuyến mãi </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Loại giảm giá</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Chủ đề</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hình ảnh khuyễn mãi</Form.Label>
              <Form.Control
                type="file"
                autoFocus
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ngày bắt đầu</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={dateStart}
                onChange={(e) => setStart(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ngày kết thúc</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={dateExp}
                onChange={(e) => setExp(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gía trị giảm giá</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mô tả</Form.Label>
              <Form.Control
               as="textarea" rows={3}
                autoFocus
                value={description}
                onChange={(e) => setDes(e.target.value)}
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

export default ModalAddCoupon;
