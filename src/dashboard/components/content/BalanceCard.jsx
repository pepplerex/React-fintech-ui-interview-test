import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

const BalanceCard = () => {
  const isVisible = localStorage.getItem("persistVisible");
  const val = JSON.parse(isVisible);

  const [visible, setvisible] = useState(val);

  const persistVisible = (visible) => {
    localStorage.setItem("persistVisible", JSON.stringify(visible));
    setvisible(visible);
  };

  const toggleVisible = () => {
    persistVisible(!visible);
  };
  return (
    <div className="col-12">
      <div className="balance-card-container">
        <div className="user-text">
          <h3>Hello, Rex 👋🏽</h3>
          <p>Swift financial services ⚡</p>
        </div>

        <Swiper
          spaceBetween={30}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="card balance-card shadow-sm border-0 mb-5"
              data-aos="fade-right"
            >
              <div className="card-body">
                <h6>Available balance</h6>
                <div className="balance-value-text d-flex align-items-center justify-content-between">
                  <div className="balance-text d-flex">
                    <h3>{visible ? "NGN 1,000" : "******"}</h3>
                    {visible ? (
                      <i
                        onClick={toggleVisible}
                        className="fa-solid fa-eye-slash"
                      ></i>
                    ) : (
                      <i
                        onClick={toggleVisible}
                        className="fa-solid fa-eye"
                      ></i>
                    )}
                  </div>

                  <div className="justify-content-end">
                    <button className="btn btn-light">
                      <div className="btn-text">Add Funds</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card balance-card bg-primary text-white shadow-sm border-0">
              <div className="card-body">
                <h6>Available balance</h6>
                <div className="balance-value-text d-flex align-items-center justify-content-between">
                  <div className="balance-text d-flex">
                    <h3>{visible ? "NGN 1,000" : "******"}</h3>
                    {visible ? (
                      <i
                        onClick={toggleVisible}
                        className="fa-solid fa-eye-slash"
                      ></i>
                    ) : (
                      <i
                        onClick={toggleVisible}
                        className="fa-solid fa-eye"
                      ></i>
                    )}
                  </div>

                  <div className="justify-content-end">
                    <button className="btn btn-light">
                      <div className="btn-text">Add Funds</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BalanceCard;
