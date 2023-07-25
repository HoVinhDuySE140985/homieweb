import { AiOutlineHome} from "react-icons/ai";
import { GiRadarSweep, GiWallet} from "react-icons/gi";
import {  RiCouponLine } from "react-icons/ri";
import { GrUserAdmin} from "react-icons/gr";
import { RxDotFilled } from "react-icons/rx";
import { MdFilterList } from "react-icons/md";
import { FaCheckToSlot } from "react-icons/fa6";
export const userProfileData = [
  {
    icon: <GrUserAdmin />,
    title: "Thông tin của tôi",
    desc: "Cài đặt",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
];

export const sidebarData = [
  // Dashboard
  {
    key: "",
    icon: <AiOutlineHome />,
    label: "Trang chủ",
  },
    // Orders
    {
      key: "om",
      icon: null,
      label: "Quản lý đơn hàng",
      type: "group",
      children: [
        {
          key: "order",
          icon: <FaCheckToSlot/>,
          label: "Đơn hàng",
          children: [
            {
              key: "all-orders",
              icon: <RxDotFilled />,
              label: "Tất cả đơn hàng",
            },
            // {
            //   key: "pending-order",
            //   icon: <RxDotFilled />,
            //   label: "Pending",
            // },
            // {
            //   key: "confirm-order",
            //   icon: <RxDotFilled />,
            //   label: "Confirmed",
            // },
            // {
            //   key: "cancel-order",
            //   icon: <RxDotFilled />,
            //   label: "Canceled",
            // },
            // {
            //   key: "pending-order",
            //   icon: <RxDotFilled />,
            //   label: "Pending",
            // },
            // {
            //   key: "confirm-order",
            //   icon: <RxDotFilled />,
            //   label: "Confirmed",
            // },
            // {
            //   key: "cancel-order",
            //   icon: <RxDotFilled />,
            //   label: "Canceled",
            // },
          ],
        },
      ],
    },
  // Product & Service Management
  {
    key: "psm",
    icon: null,
    label: "Sản Phẩm & Danh mục",
    type: "group",
    children: [
      {
        key: "category",
        icon: <MdFilterList />,
        label: "Danh mục",
        children: [
          {
            key: "view-category",
            icon: <RxDotFilled />,
            label: "Danh mục sản phẩm",
          },
          {
            key: "view-subCategory",
            icon: <RxDotFilled />,
            label: "Loại sản phẩm",
          },
        ],
      },

      {
        key: "product",
        icon: <GiRadarSweep />,
        label: "Sản phẩm",
        children: [
          {
            key: "list-product",
            icon: <RxDotFilled />,
            label: "Danh sách sản phẩm",
          },
          {
            key: "import",
            icon: <RxDotFilled />,
            label: "Thêm mới",
          },
        ],
      }
    ],
  },

  // Promotion Management
  {
    key: "pm",
    icon: null,
    label: "Khuyễn Mãi",
    type: "group",
    children: [
      {
        key: "offer",
        icon: <RiCouponLine />,
        label: "Khuyến mãi",
        children: [
          {
            key: "coupon",
            icon: <RxDotFilled />,
            label: "Danh sách",
          },
        ],
      },
    ],
  },
  // USER MANAGEMENT
  {
    key: "um",
    icon: null,
    label: "Quản lý người dùng",
    type: "group",
    children: [
      {
        key: "customer",
        icon: <GiWallet />,
        label: "Khách hàng",
        children: [
          {
            key: "report-list-customer",
            icon: <RxDotFilled />,
            label: "Đánh giá",
          },
          {
            key: "feedback-list-customer",
            icon: <RxDotFilled />,
            label: "Phản hồi",
          },
        ],
      },
    ],
  },

];
