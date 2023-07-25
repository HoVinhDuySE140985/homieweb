import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useTableV2 from "../../components/table/useTableV2";
import { TableBody, TableCell, TableRow, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  getCategories } from "../../features/category/categorySlide";
import Button from "./../../components/filter/Button";
import AddIcon from "@mui/icons-material/Add";
import ModalAdd from "./ModalAdd";
import ModalEdit from './ModalEdit';
import ModalDelete from "./ModalDelete";
const headCells = [
  { id: "id", label: "ID" },
  { id: "name", label: "Tên danh mục" },
  {
    id: "action",
    label: "Thao tác",
    disableSorting: true,

    align: "center",
  },
];
const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const recordsCategory = useSelector((state) => state.category.categories);
  const count = useSelector((state) => state.category.number);
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
  useTableV2(recordsCategory, headCells, filterFn, count);
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => {
    setShowModal(false)
    setShowModalEdit(false)
    setShowDelete(false)
  }
  //Edit
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [cateEdit, setCateEdit] = useState({})
  const handleEditUser = (cate) => {
    setShowModalEdit(true)
    setCateEdit(cate)
  }
  //Delete 
  const [showDelete, setShowDelete] = useState(false)
  const [cateDelete, setCateDelete] = useState({})
  const handleDelete = (cate) => {
    setShowDelete(true)
    setCateDelete(cate)
  }
  return (
    <>
      <div className="min-[620px]:pt-24 min-[620px]:px-8">
        <Header
          icon="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png"
          alt="category"
          title="Danh mục sản phẩm"
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
                          <div>{item.name}</div>
                        </TableCell>
                        <TableCell sx={{ border: "none" }}>
                          <div className="d-flex justify-content-center gap-2">
                            <Tooltip title="Sửa" arrow>
                              <Link
                                // to={`/admin/mechanic/edit/${item.id}`}
                                className="btn btn-outline-info btn-sm square-btn"
                                onClick={() => handleEditUser(item)}
                              >
                                <EditIcon fontSize="small" />
                              </Link>
                            </Tooltip>

                            <Tooltip title="Xóa" arrow>
                              <Link
                                className="btn btn-outline-danger btn-sm delete square-btn"
                                onClick={()=> handleDelete(item)}>
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
      <ModalAdd
        show = {showModal}
        handleClose = {handleClose}
      />
      <ModalEdit
        show = {showModalEdit}
        handleClose = {handleClose}
        cateEdit = {cateEdit}
      />
      <ModalDelete
        show = {showDelete}
        handleClose= {handleClose}
        cateDelete = {cateDelete}
      />
    </>
  );
};

export default Categories;
