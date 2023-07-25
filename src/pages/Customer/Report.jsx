import Header from "../../components/Header";
import React, {useState, useEffect} from "react";
import Search from "../../components/filter/Search";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "../../components/filter/Select";
import Date from "../../components/filter/DateTime";
import Button from "../../components/filter/Button";
import "../../styles/button.scss";
import { MdFilterList } from "react-icons/md";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import useTableV2 from "../../components/table/useTableV2";
import { TableBody, TableCell, TableRow, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Switches from "../../components/table/Switches";

import { useDispatch, useSelector } from "react-redux";
import { getReports } from './../../features/report/reportSlice';


const headCells = [
  { id: "reportId", label: "ID Phản hồi" },
  { id: "orderCode", label: "Mã đơn hàng" },
  { id: "reason", label: "Nội dung" },
  { id: "email", label: "Email khách hàng" },
  { id: "imageReport", label: "Hình ảnh" },
];
const Report = () => {
  const dispatch = useDispatch();
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [age, setAge] = React.useState("");


  useEffect(() => {
    dispatch(getReports()); 
}, [])


const recordsReport = useSelector((state) => state.report.reports)
const count = useSelector((state) => state.report.number)
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTableV2(recordsReport, headCells, filterFn,  count );
  return (
    <div className="min-[620px]:pt-24 min-[620px]:px-8">
      <Header
        icon="https://6valley.6amtech.com/public/assets/back-end/img/customer_review.png"
        size={20}
        alt="review"
        title="Phản hồi của khách hàng"
      />
      <div className="card card-body">
        <div className="row border-bottom pb-3 align-items-center mb-4">
          <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
            <h5 className="text-capitalize d-flex gap-1 font-semibold">
            Danh sách phản hồi
              <span className="badge badge-soft-dark radius-50 fz-12">{count}</span>
            </h5>
          </div>
          <div className="col-sm-8 col-md-6 col-lg-4">
            <Search
              label="Tìm kiếm"
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
        </div>
      </div>

      <div className="card mt-4">
        <div className="table-responsive">
          <TblContainer>
            <TblHead />
            <TableBody>
              {recordsAfterPagingAndSorting().map((item) => (
                <TableRow hover key={item.reportId}>
                  <TableCell sx={{ border: "none" }}>
                    <div>{item.reportId}</div>
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>
                    <div>{item.orderCode}</div>
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>
                    <div>{item.reason}</div>
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>
                    <div>{item.email}</div>
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>
                    <div>{item.imageReport}</div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TblContainer>
          <TblPagination />
        </div>
      </div>
    </div>
  );
};

export default Report;
