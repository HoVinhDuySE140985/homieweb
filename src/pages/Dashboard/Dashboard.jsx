import React from "react";

const Dashboard = () => {
  return (
    <div className="md:pt-24 md:px-8">
      <div className="page-header pb-0 mb-0 border-0">
        <div className="flex-between align-items-center">
          <div>
            <h1
              className="page-header-title"
              style={{ textAlign: "left", fontSize: "20px", fontWeight: "600" }}
            >
              Trang chủ
            </h1>
            <p className="mb-4">Xin chào Admin !!!</p>
          </div>
        </div>
        <div className="card mb-2">
          <div className="card-body">
            <div className="row flex-between align-items-center g-2 mb-3">
              <div className="col-sm-6">
                <h4 className="d-flex align-items-center text-capitalize gap-10 mb-0">
                  <img src="https://6valley.6amtech.com/public/assets/back-end/img/business_analytics.png" alt="" />
               Tình hình kinh doanh
                </h4>
              </div>
            </div>
            <div className="row g-2 mb-5" style={{boxSizing: "border-box", color:"red"}} >
              <div className="col-sm-6 col-lg-3">
                <div className="business-analytics">
                  <h5 className="business-analytics__subtitle">
                  Total Sale
                  </h5>
                  <h2 className="business-analytics__title">
                    10
                  </h2>
                  <img src="https://6valley.6amtech.com/public/assets/back-end/img/total-sale.png" alt="" className="business-analytics__img" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
              <div className="business-analytics">
                  <h5 className="business-analytics__subtitle">
                  Total Sale
                  </h5>
                  <h2 className="business-analytics__title">
                    10
                  </h2>
                  <img src="https://6valley.6amtech.com/public/assets/back-end/img/total-customer.png" alt="" className="business-analytics__img" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
              <div className="business-analytics">
                  <h5 className="business-analytics__subtitle">
                  Total Sale
                  </h5>
                  <h2 className="business-analytics__title">
                    10
                  </h2>
                  <img src="https://6valley.6amtech.com/public/assets/back-end/img/total-stores.png" alt="" className="business-analytics__img" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
              <div className="business-analytics">
                  <h5 className="business-analytics__subtitle">
                  Total Sale
                  </h5>
                  <h2 className="business-analytics__title">
                    10
                  </h2>
                  <img src="https://6valley.6amtech.com/public/assets/back-end/img/total-product.png" alt="" className="business-analytics__img" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
              <div className="order-stats order-stats_pending">
                  <div className="order-stats__content" style={{textAlign:"left"}} >
                  <img width={20} src="https://6valley.6amtech.com/public/assets/back-end/img/pending.png" alt=""/>
                  <h6 className="order-stats__subtitle">
                    Pending
                  </h6>
                  </div>
                  <span className="order-stats__title"> 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
