import React, { Component } from "react";
export default class ModalGioHang extends Component {
  render() {
    const { gioHang } = this.props;
    return (
      <div
        className="modal fade "
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1300px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <td>Mã SP</td>
                    <td>Hình Ảnh</td>
                    <td>Tên SP</td>
                    <td>Số lượng</td>
                    <td>Đơn giá</td>
                    <td>Thành Tiền</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {gioHang.map((spGH, index) => {
                    return (
                      <tr key={index}>
                        <td>{spGH.id}</td>
                        <td>
                          <img
                            src={spGH.thumbnail_url}
                            alt=""
                            width={50}
                            height={75}
                          ></img>
                        </td>
                        <td>{spGH.name}</td>
                        <td>
                          <button
                            className="btn btn-info"
                            onClick={() => {
                              this.props.tangGiamSoLuong(spGH.id, true);
                            }}
                          >
                            +
                          </button>
                          {spGH.order_count}
                          <button
                            className="btn btn-info"
                            onClick={() => {
                              this.props.tangGiamSoLuong(spGH.id, false);
                            }}
                          >
                            -
                          </button>
                        </td>
                        <td>{spGH.price.toLocaleString()} vnd</td>
                        <td>
                          {(spGH.order_count * spGH.price).toLocaleString()} vnd
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              this.props.xoaGioHang(spGH.id);
                            }}
                            className="btn btn-danger"
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="5"></td>
                    <td>Tổng tiền</td>
                    <td>{this.props.tongTien.toLocaleString()} vnd</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
