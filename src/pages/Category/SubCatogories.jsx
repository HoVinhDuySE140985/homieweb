import React, { useState, useEffect } from "react";
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
import { getSubCategories } from "../../features/subCate/subCateSlice";
import Header from "../../components/Header";
import ModalAddSub from "./ModalAddSub";
import ModalEditSub from "./ModalEditSub";
import ModalDeleteSub from "./ModalDeleteSub";

const headCells = [
  { id: "id", label: "ID" },
  { id: "name", label: "Loại sản phẩm" },
  { id: "status", label: "Trạng thái" },
  { id: "cateId", label: "ID danh mục" },
  {
    id: "action",
    label: "Thao tác",
    disableSorting: true,

    align: "center",
  },
];
const SubCatogories = () => {
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
  const handleClose = () => {
    setShowModal(false);
    setShowSub(false)
    setShowDelSub(false)
  };
  //Edit
  const [showModal, setShowModal] = useState(false);
  const [showModalEditSub, setShowSub] = useState(false);
  const [subEdit, setSubEdit] = useState({});
  const handleEditSub = (sub) => {
    setShowSub(true);
    setSubEdit(sub);
  };

  //Delete
  const [showdelSub, setShowDelSub] = useState(false)
  const [subDel, setSubDel] = useState({})
  const handleDeleteSub = (sub) => {
    setShowDelSub(true);
    setSubDel(sub);
    console.log(sub)
  };

  useEffect(() => {
    dispatch(getSubCategories());
  }, [dispatch]);
  const recordsSubCategory = useSelector(
    (state) => state.subCategory.subCategories
  );
  const count = useSelector((state) => state.subCategory.number);

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTableV2(recordsSubCategory, headCells, filterFn, count);
  return (
    <>
      <div className="min-[620px]:pt-24 min-[620px]:px-8">
        <Header
          icon="https://6valley.6amtech.com/public/assets/back-end/img/brand-setup.png"
          alt="category"
          title="Loại sản phẩm"
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
                        <TableCell
                          sx={{
                            border: "none",
                          }}
                        >
                          <span
                            className={
                              item.status === "ACTIVE"
                                ? "badge badge-success fz-12"
                                : "badge badge-danger  fz-12"
                            }
                          >
                            <div>
                              {" "}
                              {item.status === "ACTIVE"
                                ? "Khả dụng"
                                : "Không khả dụng"}{" "}
                            </div>
                          </span>
                        </TableCell>
                        <TableCell sx={{ border: "none" }}>
                          <div>{item.cateId}</div>
                        </TableCell>
                        <TableCell sx={{ border: "none" }}>
                          <div className="d-flex justify-content-center gap-2">
                            <Tooltip title="Sửa" arrow>
                              <Link
                                // to={`/admin/mechanic/edit/${item.categoryId}`}
                                className="btn btn-outline-info btn-sm square-btn"
                                onClick={() => handleEditSub(item)}
                              >
                                <EditIcon fontSize="small" />
                              </Link>
                            </Tooltip>

                            <Tooltip title="Xóa" arrow>
                              <Link
                                className="btn btn-outline-danger btn-sm delete square-btn"
                                onClick={() => handleDeleteSub(item)}
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
      <ModalAddSub show={showModal} handleClose={handleClose} />
      <ModalEditSub
        show={showModalEditSub}
        handleClose = {handleClose}
        subEdit={subEdit}
      />
      <ModalDeleteSub
        show = {showdelSub}
        handleClose = {handleClose}
        subDel = {subDel}
      />
    </>
  );
};

export default SubCatogories;
