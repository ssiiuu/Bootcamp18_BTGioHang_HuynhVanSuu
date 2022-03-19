import React, { Component } from "react";

export default class SanPhamGioHang extends Component {
  render() {
    const { dt, themGioHang, handleShowThongTin } = this.props;
    return (
      <div>
        <div className="card" style={{ height: "550px" }}>
          <img
            className="card-img-top"
            src={dt.thumbnail_url}
            alt=""
            height={300}
          />
          <div className="card-body">
            <h4 className="card-title">
              {dt.name.length > 50 ? dt.name.substring(0, 50) + "..." : dt.name}
            </h4>
            <p className="card-text text-danger">
              Price: {dt.price.toLocaleString()} vnd
            </p>
            <button
              className="btn btn-success "
              onClick={() => {
                handleShowThongTin(dt);
              }}
            >
              Xem chi tiết
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                themGioHang(dt);
              }}
            >
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    );
  }
}
