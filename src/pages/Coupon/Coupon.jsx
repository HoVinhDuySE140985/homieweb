import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Search from "../../components/filter/Search";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useTableV2 from "../../components/table/useTableV2";
import { TableBody, TableCell, TableRow, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import Switches from "../../components/table/Switches";
import ConfirmDialog from "../../components/ConfirmDialog";
import { useDispatch, useSelector } from "react-redux";
import Button from "./../../components/filter/Button";
import AddIcon from "@mui/icons-material/Add";
import { getCoupons } from "./../../features/coupon/couponSlide";
import ModalAddCoupon from "./ModalAddCoupon";
import ModalDeleteCoupon from "./ModalDelCoupon";

const headCells = [
  { id: "id", label: "ID" },
  { id: "type", label: "Loại giảm giá" },
  { id: "title", label: "Tiêu đề" },
  { id: "code", label: "Mã giảm giá" },
  { id: "dateStart", label: "Ngày bắt đầu" },
  { id: "dateExp", label: "Ngày kết thúc" },
  { id: "description", label: "Mô tả" },
  {
    id: "action",
    label: "Thao tác",
    disableSorting: true,

    align: "center",
  },
];
const Coupon = () => {
  const dispatch = useDispatch();
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const [showDelete, setShowDelete] = useState(false)
  const [couponDelete, setCouponDelete] = useState({})
  const handleDelete = (cou) => {
    setShowDelete(true)
    setCouponDelete(cou)
  }

  useEffect(() => {
    dispatch(getCoupons());
  }, []);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
    setShowDelete(false)
  };
  const recordsCoupon = useSelector((state) => state.coupon.coupons);
  const count = useSelector((state) => state.coupon.number);
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTableV2(recordsCoupon, headCells, filterFn, count);
  return (
    <>
      <div className="min-[620px]:pt-24 min-[620px]:px-8">
        <Header
          icon="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png"
          alt="coupon"
          title="Danh sách khuyến mãi"
        />
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="px-3 py-4">
                <div className="row align-items-center">
                  <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0 ">
                    <Button
                      className="add-button"
                      size="large"
                      onClick={() => setShowModal(true)}
                      startIcon={<AddIcon fontSize="small" />}
                      text="Thêm mới"
                    />
                  </div>
                </div>
              </div>
              {/* Table */}
              <div className="table-responsive">
                <TblContainer>
                  <TblHead />
                  <TableBody>
                    {recordsAfterPagingAndSorting().map((item) => (
                      <TableRow hover key={item.id}>
                        <TableCell sx={{ border: "none" }}>
                          <div>{item.id}</div>
                        </TableCell>
                        <TableCell sx={{ border: "none" }}>
                          <div>{item.type}</div>
                        </TableCell>
                        <TableCell sx={{ border: "none" }}>
                          <div>{item.title}</div>
                        </TableCell>
                        <TableCell sx={{ border: "none" }}>
                          <div>{item.code}</div>
                        </TableCell>
                        <TableCell sx={{ border: "none" }}>
                          <div>{item.dateStart}</div>
                        </TableCell>
                        <TableCell sx={{ border: "none" }}>
                          <div>{item.dateExp}</div>
                        </TableCell>
                        <TableCell sx={{ border: "none" }}>
                          <div>{item.description}</div>
                        </TableCell>
                        <TableCell sx={{ border: "none" }}>
                          <div className="d-flex justify-content-center gap-2">
                            <Tooltip title="Xóa" arrow>
                              <Link
                                className="btn btn-outline-danger btn-sm delete square-btn"
                                onClick={() => handleDelete(item)}
                              >
                                <DeleteIcon fontSize="small" />
                              </Link>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </TblContainer>
                <TblPagination className="pagination" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
      <ModalAddCoupon show={showModal} handleClose={handleClose} />
      <ModalDeleteCoupon
          show = {showDelete}
          handleClose= {handleClose}
          couponDelete = {couponDelete}
      />
    </>
  );
};

export default Coupon;
