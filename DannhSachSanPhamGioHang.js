import React, { Component } from "react";
import SanPhamGioHang from "./SanPhamGioHang";

export default class DannhSachSanPhamGioHang extends Component {
  // renderContent = () => {
  //   let { dsdt } = this.props;
  //   return dsdt.map((dt, index) => {
  //     let { thumbnail_url, name, price } = dt;
  //     return (
  //       <div className="col-3 p-3" key={index}>
  //         <div className="card" style={{ height: "450px" }}>
  //           <img className="card-img-top" src={thumbnail_url} alt="" />
  //           <div className="card-body">
  //             <h4 className="card-title">
  //               {name.length > 50 ? name.substring(0, 50) + "..." : name}
  //             </h4>
  //             <p className="card-text text-danger">
  //               Giá: {price.toLocaleString()} VND
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  // };
  // render() {
  //   return (
  //     <div className="container">
  //       <div className="row">{this.renderContent()}</div>
  //     </div>
  //   );
  // }
  render() {
    const { dsdt, themGioHang, handleShowThongTin } = this.props;

    return (
      <div className="row">
        {dsdt.map((dt, index) => {
          return (
            <div className="col-3 p-3" key={index}>
              <SanPhamGioHang
                dt={dt}
                themGioHang={themGioHang}
                handleShowThongTin={handleShowThongTin}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
