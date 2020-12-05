import React from 'react';
import Swiper from 'react-id-swiper';
const FreeModeNoFixedPositions = () => {
  const params = {
    slidesPerView: 2,
    spaceBetween: 5,
    freeMode: true,

    // loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      dynamicBullets: true,
    },
  };
  return (
    <div className="slider">
      <Swiper {...params}>
        <a
          href="https://yu-kobo.myshopify.com/collections/%E5%8C%96%E7%B2%A7%E3%83%9D%E3%83%BC%E3%83%81"
          className="slider-product slider-product01"
        >
          <p>化粧ポーチ</p>
        </a>
        <a
          href="https://yu-kobo.myshopify.com/collections/%E5%B0%8F%E7%89%A9%E7%94%A8%E3%83%9D%E3%83%BC%E3%83%81"
          className="slider-product slider-product02"
        >
          <p>小物用ポーチ</p>
        </a>
        <a
          href="https://yu-kobo.myshopify.com/collections/%E3%83%88%E3%83%BC%E3%83%88%E3%83%90%E3%83%83%E3%82%B0"
          className="slider-product slider-product03"
        >
          <p>トートバッグ</p>
        </a>
        <a
          href="https://yu-kobo.myshopify.com/collections/%E3%83%9E%E3%82%B9%E3%82%AF"
          className="slider-product slider-product04"
        >
          <p>マスク</p>
        </a>
      </Swiper>
    </div>
  );
};
export default FreeModeNoFixedPositions;
