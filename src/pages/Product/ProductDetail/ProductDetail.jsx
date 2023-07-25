import React, { useState, useEffect } from "react";
import Header from "./../../../components/Header";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "./../../../components/filter/Button";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "../.././../styles/button.scss";
import Search from "./../../../components/filter/Search";
import AddIcon from "@mui/icons-material/Add";  
import useTableV2 from "./../../../components/table/useTableV2";
import { TableBody, TableCell, TableRow, Tooltip } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import ConfirmDialog from "./../../../components/ConfirmDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetail } from "./../../../features/product/productSlice";
const headCells = [
  { id: "STT", label: "STT" },
  { id: "size", label: "Kích thước sản phẩm" },
  { id: "color", label: "Màu sắc" },
  { id: "quantity", label: "Số lượng" },
  { id: "price", label: "Gía thành" },
  { id: "description", label: "Mô tả" },
  {
    id: "action",
    label: "Thao tác",
    disableSorting: true,

    align: "center",
  },
];
const ProductsDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[4];
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
  
  useEffect(() => {
    dispatch(getProductsDetail(id));
  }, []);

  const recordDetail = useSelector((state) => state.product.products);
  const count = useSelector((state) => state.product.number);
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTableV2(recordDetail, headCells, filterFn, count);
  return (
    <>
      <div className="min-[620px]:pt-24 min-[620px]:px-8">
        <Header
          icon="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png"
          alt="products"
          title="Danh sách chi tiết sản phẩm"
          number={count}
        />
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="px-3 py-4">
                <div className="row  align-items-center">
                  <div className="col-lg-4">
                    <Search
                      label="Tìm kiếm theo tên "
                      onChange={() => {}}
                      size="small"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon fontSize="small" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div className="col-lg-8 mt-3 mt-lg-0 d-flex flex-wrap gap-3 justify-content-lg-end">
                    <Link
                      to={`/admin/list-product`}
                      >
                      <Button
                        className="add-button"
                        size="large"
                        onClick={() => {
                        }}
                        startIcon={<ArrowBackIosIcon/>}
                        text="Trở về"
                      />
                    </Link>
                    <div>
                      <Button
                        className="add-button"
                        size="large"
                        onClick={() => {}}
                        startIcon={<AddIcon fontSize="small" />}
                        text="Thêm mới"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="table-responsive">
                <TblContainer>
                  <TblHead />
                  <TableBody>
                    {recordsAfterPagingAndSorting().map((item,idx) => (
                      <TableRow hover key={idx}>
                        <TableCell sx={{ border: "none" }}>
                          <Link
                            to={`/admin/list-product/detail/${idx + 1}`}
                            className="title-color hover-c1"
                          >
                            <div>{idx + 1}</div>
                          </Link>
                        </TableCell>
                        <TableCell sx={{ border: "none" }}>
                          <div>{item.size}</div>
                        </TableCell>
                        <TableCell sx={{ border: "none" }}>
                          <div>{item.color}</div>
                        </TableCell>
                        <TableCell sx={{ border: "none"}}>
                          <div>{item.quantity}</div>
                        </TableCell>
                        <TableCell sx={{ border: "none" }}>
                          <div>{item.price}</div>
                        </TableCell>
                        <TableCell sx={{ border: "none" }}>
                          <div>{item.description}</div>
                        </TableCell>
                        <TableCell sx={{ border: "none" }}>
                          <div className="d-flex justify-content-center gap-2">
                            <Tooltip title="edit" arrow>
                              <Link
                                to={`/admin/mechanic/edit/${item.productId}`}
                                className="btn btn-outline--primary btn-sm square-btn"
                              >
                                <EditIcon fontSize="small" />
                              </Link>
                            </Tooltip>

                            <Tooltip title="delelte" arrow>
                              <Link
                                className="btn btn-outline-danger btn-sm delete square-btn"
                                onClick={() => {
                                  setConfirmDialog({
                                    isOpen: true,
                                    title:
                                      "Are you sure to delete this record?",
                                    subTitle: "You can't undo this operation",
                                    onConfirm: () => {},
                                  });
                                }}
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
    </>
  );
};

export default ProductsDetail;
