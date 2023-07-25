import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Select from "../../components/filter/Select";
import DateTime from "../../components/filter/DateTime";
import Button from "../../components/filter/Button";
import "../../styles/button.scss";
import BoxOrder from "../../components/filter/BoxOrder";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "../../components/filter/Search";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import useTableV2 from "../../components/table/useTableV2";
import { TableBody, TableCell, TableRow, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import { getBookings } from "../../features/book/bookingSlide";

const headCells = [
  { id: "orderId", label: "ID Đơn hàng" },
  { id: "orderCode", label: "Mã Đơn hàng" },
  { id: "totalPrice", label: "Tổng giá tiền", align: "right" },
  { id: "orderStatus", label: "Trạng thái đơn hàng", align: "center" },
  {
    id: "action",
    label: "Thao tác",
    disableSorting: true,

    align: "center",
  },
];
const   All = () => {
  const dispatch = useDispatch();
  const [age, setAge] = React.useState("");
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    dispatch(getBookings());
  }, []);


  const recordsBooking = useSelector((state) => state.booking.bookings);
  console.log(recordsBooking);
  const count = useSelector((state) => state.booking.number);
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTableV2(
      recordsBooking,
      headCells,
      filterFn,
      count
    );
  return (
    <div className="min-[620px]:pt-24 min-[620px]:px-8">
      <Header
        icon="https://6valley.6amtech.com/public/assets/back-end/img/all-orders.png"
        size={20}
        alt="all"
        title="Tất cả đơn hàng"
        number={count}
      />
      <div className="card">
        {/* Filter */}
        <div className="card">
          <div className="card-body">
            <form>
              <div className="row gy-3 gx-2">
                <div className="col-12 pb-0">
                  <h4 className="font-semibold">Chọn phạm vi ngày</h4>
                </div>
                <div className="col-sm-6 col-md-3">
                  <Select title={"Tất cả"} value={age} onChange={handleChange} />
                </div>
                <div className="col-sm-6 col-md-3">
                  <DateTime label={"Bắt đầu"} />
                </div>
                <div className="col-sm-6 col-md-3 mt-2 mt-sm-0">
                  <DateTime label={"Kết thúc"} />
                </div>
                <div className="col-sm-6 col-md-3 mt-2 mt-sm-0">
                  <Button
                    sx={{ height: "54.56px" }}
                    className="add-button"
                    size="large"
                    onClick={() => {}}
                    fullWidth
                    text="Tìm Kiếm"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="card-body">
          {/* The number of Order statuses */}
          <div className="row g-2 mb-5">
            <BoxOrder
              link={"pending-order"}
              src={
                "https://6valley.6amtech.com/public/assets/back-end/img/pending.png"
              }
              content={"Chờ xử lý"}
              quantity={"58"}
            />

            <BoxOrder
              link={"confirm-order"}
              src={
                "https://6valley.6amtech.com/public/assets/back-end/img/packaging.png"
              }
              content={"Đang đóng gói"}
              quantity={"21"}
            />
            <BoxOrder
              link={"cancel-order"}
              src={
                "https://6valley.6amtech.com/public/assets/back-end/img/out-of-delivery.png"
              }
              content={"Đang vận chuyển"}
              quantity={"10"}
            />
          </div>
          <div className="row g-2 mb-5">
            <BoxOrder
              link={"datoinoi"}
              src={
                "https://6valley.6amtech.com/public/assets/back-end/img/delivered.png"
              }
              content={"Đã tới nơi"}
              quantity={"58"}
            />

            <BoxOrder
              link={"hoanthanh"}
              src={
                "https://6valley.6amtech.com/public/assets/back-end/img/confirmed.png"
              }
              content={"Hoàn thành"}
              quantity={"21"}
            />
            <BoxOrder
              link={"dahuy"}
              src={
                "https://6valley.6amtech.com/public/assets/back-end/img/failed-to-deliver.png"
              }
              content={"Đã hủy"}
              quantity={"10"}
            />
          </div>
          {/* Search and export */}
          <div className="px-3 py-4 light-bg">
            <div className="row g-2 flex-grow-1">
              <div className="col-sm-8 col-md-6 col-lg-4">
                <Search
                  label="Tìm kiếm bằng ID Đơn hàng"
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
              <div className="col-sm-4 col-md-6 col-lg-8 d-flex justify-content-sm-end">
                <Button
                  variant="outlined"
                  className="export-button"
                  size="large"
                  onClick={() => {}}
                  startIcon={<FileDownloadIcon fontSize="small" />}
                  text="Xuất dữ liệu"
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
                  <TableRow hover key={item.orderId}>
                    <TableCell sx={{ border: "none" }}>
                      <Link
                        to={`/admin/orders/details/${item.orderId}`}
                        className="title-color hover-c1"
                      >
                        {item.orderId}
                      </Link>
                    </TableCell>
                    <TableCell sx={{ border: "none" }}>
                      <div>{item.orderCode}</div>
                    </TableCell>
                    <TableCell sx={{ border: "none", textAlign: "right" }}>
                      <div>{item.totalPrice}</div>
                    </TableCell>
                    <TableCell
                      sx={{
                        border: "none",
                        textDecoration: "capitalize",
                        textAlign: "center",
                      }}
                    >
                      <span
                        className={
                          item.orderStatus === "Chờ Xử Lý"
                            ? "badge badge-soft-danger fz-12"
                            : item.orderStatus === "Đang Đóng Gói"
                            ? "badge badge-soft-warning fz-12"
                            : item.orderStatus === "Đang Vận Chuyển"
                            ? "badge badge-soft-info fz-12"
                            : item.orderStatus === "Đã Tới Nơi"
                            ? "badge badge-soft-info fz-12"
                            : item.orderStatus === "Hoàn Thành"
                            ? "badge badge-soft-success fz-12"
                            : "badge badge-danger  fz-12"
                        }
                      >
                        {item.orderStatus}
                      </span>
                    </TableCell>
                    <TableCell sx={{ border: "none" }}>
                      <div className="d-flex justify-content-center gap-2">
                        <Tooltip title="view" arrow>
                          <Link
                            to={`/admin/orders/details/${item.bookingCode}`}
                            className="btn btn-outline--primary btn-sm edit square-btn"
                          >
                            <VisibilityIcon fontSize="small" />
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
  );
};

export default All;
