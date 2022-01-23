import React, { useState } from 'react';
import TopNav from '../../components/topbar/TopNav'
import DropdownAddEquipment from './Dropdown__addEquipment';

import './addEquipment.css'

function AddEquipment() {
  const [selected, setSelected] = useState("Chọn loại thiết bị");
  return (
    <div className="addEquipment">
      <TopNav />
      <h1>Quản lý thiết bị</h1>
      <div className="addEquipment__infor">
        <h2 className="addEquipment__title">Thông tin thiết bị</h2>
        <div className="addEquipment__list">
          <div className="addEquipment__items">
            <div className="addEquipment__item">
              <p>Mã thiết bị *</p>
              <input type="text" placeholder="Nhập mã thiết bị" className="addEquipment__input" />
            </div>
            <div className="addEquipment__item">
              <p>Loại thiết bị *</p>
              <DropdownAddEquipment selected={selected} setSelected={setSelected} options={['Kiosk', 'Display counter']} />
            </div>
          </div>
          <div className="addEquipment__items">
            <div className="addEquipment__item">
              <p>Tên thiết bị *</p>
              <input type="text" placeholder="Nhập tên thiết bị" className="addEquipment__input" />
            </div>
            <div className="addEquipment__item">
              <p>Tên đăng nhập *</p>
              <input type="text" placeholder="Nhập tài khoản" className="addEquipment__input" />
            </div>
          </div>
          <div className="addEquipment__items">
            <div className="addEquipment__item">
              <p>Địa chỉ IP *</p>
              <input type="text" placeholder="Nhập địa chỉ IP" className="addEquipment__input" />
            </div>
            <div className="addEquipment__item">
              <p>Mật khẩu *</p>
              <input type="password" placeholder="Nhập mật khẩu" className="addEquipment__input" />
            </div>
          </div>
          <div className="addEquipment__items">
            <div className="addEquipment__item">
              <p>Dịch vụ sử dụng *</p>
              <input type="text" placeholder="Nhập mã thiết bị" className="addEquipment__input" />
            </div>
          </div>
          <p className="addEquipment__desc">* Là trường thông tin bắt buộc</p>
        </div>
      </div>
      <div className="addEquipment__buttons">
        <button className="addEquipment__button addEquipment__button-cancel">Huỷ bỏ</button>
        <button className="addEquipment__button addEquipment__button-addDevice">Thêm thiết bị</button>
      </div>
    </div>
  );
}
export default AddEquipment
