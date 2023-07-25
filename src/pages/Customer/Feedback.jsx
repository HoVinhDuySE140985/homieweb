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
import { useDispatch, useSelector } from "react-redux";
import { getFeedbacks } from './../../features/review/reviewSlice';

const headCells = [
  { id: "id", label: "ID" },
  { id: "content", label: "Nội dung" },
  { id: "email", label: "Email khách hàng" },
];
const Feedback = () => {
  const dispatch = useDispatch();
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  useEffect(() => {
    dispatch(getFeedbacks());
}, [])


const recordsFeedback = useSelector((state) => state.feedback.feedbacks)

const count = useSelector((state) => state.feedback.number)

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTableV2(recordsFeedback, headCells, filterFn,count );
  return (
    <div className="min-[620px]:pt-24 min-[620px]:px-8">
      <Header
        icon="https://6valley.6amtech.com/public/assets/back-end/img/customer_review.png"
        size={20}
        alt="review"
        title="Đánh giá của khách hàng"
      />
      <div className="card card-body">
        <div className="row border-bottom pb-3 align-items-center mb-4">
          <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
            <h5 className="text-capitalize d-flex gap-1 font-semibold">
              Danh sách đánh giá 
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
                <TableRow hover key={item.id}>
                  <TableCell sx={{ border: "none" }}>
                    <div>{item.id}</div>
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>
                    <Link
                      // to={`/admin/service/view/${item.garageReviewDto.garageId}`}
                      className="title-color hover-c1"
                    >
                      {item.content}
                    </Link>
                  </TableCell>
                  <TableCell sx={{ border: "none" }}>
                    <div>{item.email}</div>
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

export default Feedback;
