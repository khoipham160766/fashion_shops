import React, { Fragment } from "react";
import "./footer.css";

const Footer = () =>{
    return(
        <Fragment>
            <footer className="w-100 py-4 flex-shrink-0 bg-[#d2f1f8]">
                <div className="container py-4">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-4 col-md-6">
                            <h5 className="text-[#5894af] font-bold text-[18px]">GIỚI THIỆU</h5>
                            <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                            <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved.</p>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-[#5894af] mb-3 font-bold text-[18px]">DANH MỤC</h5>
                            <ul className="list-unstyled text-muted">
                                <li>TRANG CHỦ</li>
                                <li>GIỚI THIỆU</li>
                                <li>SẢN PHẨM</li>
                                <li>TIN TỨC</li>
                                <li>LIÊN HỆ</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-[#5894af] mb-3 font-bold text-[18px]">SẢN PHẨM</h5>
                            <ul class="list-unstyled text-muted">
                                <li>T-SHIRT</li>
                                <li>SHIRT</li>
                                <li>SWEATER</li>
                                <li>HOODIE</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h5 className="text-[#5894af] mb-3 font-bold text-[18px]">ĐĂNG KÝ</h5>
                            <p className="small text-muted">Đăng ký để nhận được sớm nhất về những thông tin sự kiện của cửa hàng.</p>
                            <form action="#">
                                <div className="input-group mb-3">
                                    <input className="form-control" type="text" placeholder="Nhập email đăng ký..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                    <button className="btn btn-primary" id="button-addon2" type="button"><i class="fas fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer;