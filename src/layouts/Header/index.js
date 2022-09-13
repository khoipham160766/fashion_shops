import React, { Fragment } from "react";
import "./header.css";
import { Input } from "antd";

const Header = () => {
    const {Search} = Input;
    return(
        <Fragment>
            {/* <div className="mini-header float-left w-full h-[30px]">
                <div className="mini-contact">
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div> */}
            <div className="header w-full h-[80px] bg-[#d2f1f8] float-left">
                <div className="logo float-left pt-4 h-full w-[25%]">
                    <img src="../images/logo.png" alt="logo" className="float-left w-[140px] ml-[150px]"/>
                </div>
                <div className="navbar float-left w-[50%]">
                    <ul>
                        <li>TRANG CHỦ</li>
                        <li>GIỚI THIỆU</li>
                        <li>SẢN PHẨM</li>
                        <li>TIN TỨC</li>
                        <li>LIÊN HỆ</li>
                    </ul>
                </div>
                {/* <div className="search float-left w-[25%]">
                    <Search
                        placeholder="Nhập sản phẩm cần tìm ..."
                        allowClear
                        className="w-[250px] float-left mt-[22px] ml-[10px]"
                    />
                </div> */}
            </div>
        </Fragment>
    )
}

export default Header;