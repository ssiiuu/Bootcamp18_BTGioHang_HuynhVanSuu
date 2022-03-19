import React, { Component } from "react";
import styles from "./ShowThongTinChiTiet.module.css";

export default class ShowThongTinChiTiet extends Component {
  render() {
    let { name, price, thumbnail_url, brand_name } = this.props.thongTinChiTiet;

    return (
      <div className="container">
        <div className="row p-5">
          <div className="col-5">
            <img style={{ width: "100%" }} src={thumbnail_url}></img>
          </div>
          <div className="col-7">
            <table className="table">
              <thead>
                <tr>
                  <th>Tên SP </th>
                  <th>Giá SP </th>
                  <th>Thương hiệu </th>
                </tr>
              </thead>
              <tbody>
                <td>{name}</td>
                <td>{price.toLocaleString()} vnd</td>
                <td className={styles.test}>{brand_name}</td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
