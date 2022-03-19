import React, { Component } from "react";
import DannhSachSanPhamGioHang from "./DannhSachSanPhamGioHang";
import { dataGioHang } from "./dataGioHang";
import ModalGioHang from "./ModalGioHang";
import ShowThongTinChiTiet from "./ShowThongTinChiTiet";

export default class BaiTapGioHang extends Component {
  state = {
    data: dataGioHang,
    gioHang: [],
    thongTinChiTiet: dataGioHang[0],
  };

  //định nghĩa phương thức xử ly sự kiện ở component có chứa state
  themGioHang = (sanPhamChon) => {
    console.log(sanPhamChon);
    this.setState({
      gioHang: [...this.state.gioHang, sanPhamChon],
    });
    // Từ sản phẩm được click sẽ tạo ra được sản phẩm trong giỏ hàng
    // let spGioHang = {
    //   id: sanPhamChon.id,
    //   name: sanPhamChon.name,
    //   thumbnail_url: sanPhamChon.thumbnail_url,
    //   price: sanPhamChon.price,
    //   order_count: 1,
    // };
    let spGioHang = { ...sanPhamChon, order_count: 1 };

    // Kiểm tra xem trong giỏ hàng đã có sản phẩm được click hay chưa
    let cloneGioHang = [...this.state.gioHang];
    let index = cloneGioHang.findIndex((sp) => sp.id === spGioHang.id);
    if (index !== -1) {
      // sản phẩm được click đã có trong giỏ hàng this.state.gioHang
      cloneGioHang[index].order_count += 1;
    } else {
      // sản phẩm được click chưa có trong giỏ hàng this.state.gioHang
      cloneGioHang.push(spGioHang);
    }
    // gọi lại set state để component render lại giao diện
    this.setState({
      gioHang: cloneGioHang,
    });
  };

  // Xóa sản phẩm khỏi giỏ hàng
  xoaGioHang = (idSP) => {
    let cloneGioHang = [...this.state.gioHang];
    let index = cloneGioHang.findIndex((sp) => sp.id === idSP);
    if (index !== -1) {
      cloneGioHang.splice(index, 1);
    }
    // Cách 2:  let cloneGioHang = this.state.gioHang.filter((sp) => sp.id !== idSP);
    //cập nhật lại giỏ hàng và render lại giao diện
    this.setState({
      gioHang: cloneGioHang,
    });
  };

  //Tăng Giảm số lượng giỏ hàng
  tangGiamSoLuong = (idSP, isTangGiam) => {
    let cloneGioHang = [...this.state.gioHang];
    let index = cloneGioHang.findIndex((sp) => sp.id === idSP);
    if (isTangGiam) {
      cloneGioHang[index].order_count++;
    } else if (cloneGioHang[index].order_count > 1) {
      cloneGioHang[index].order_count--;
    }

    //cập nhật lại giỏ hàng và render lại giao diện
    this.setState({
      gioHang: cloneGioHang,
    });
  };
  //Show thông tin chi tiết của sản phẩm
  handleShowThongTin = (sanPham) => {
    this.setState({
      thongTinChiTiet: sanPham,
    });
  };

  // renderTongSoLuong = () => {
  //   console.log("yes");
  //   let count = 0;
  //   this.state.gioHang.forEach((item) => {
  //     count += item.order_count;
  //   });
  //   return count;
  // };
  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, sanPham, index) => {
      return (tsl += sanPham.order_count);
    }, 0);

    let tongTien = this.state.gioHang.reduce((tongTien, sanPham, index) => {
      return (tongTien += sanPham.order_count * sanPham.price);
    }, 0);

    return (
      <div className="container">
        <h3 className="text-center text-success">BÀI TẬP GIỎ HÀNG</h3>
        <ModalGioHang
          xoaGioHang={this.xoaGioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
          tongTien={tongTien}
          gioHang={this.state.gioHang}
        />
        <div
          className="text-right text-danger"
          style={{ cursor: "pointer", fontWeight: "bold" }}
          data-toggle="modal"
          data-target="#modelId"
        >
          Giỏ hàng( {tongSoLuong} )
        </div>
        <ShowThongTinChiTiet thongTinChiTiet={this.state.thongTinChiTiet} />
        <DannhSachSanPhamGioHang
          themGioHang={this.themGioHang}
          dsdt={this.state.data}
          handleShowThongTin={this.handleShowThongTin}
        />
      </div>
    );
  }
}
