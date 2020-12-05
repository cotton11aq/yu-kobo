import React from 'react';
import { Slider } from '../index';
import shop from '../../img/icon/shop.png';
import link from '../../img/dashed/link.png';
import product01 from '../../img/product/product01.png';
import product02 from '../../img/product/product02.png';
import product03 from '../../img/product/product03.png';
import product04 from '../../img/product/product04.png';

const ShopLink = () => {
  return (
    <>
      <div className="shoplink">
        <h4>手づくりの雑貨 ／ 小物</h4>
        <div className="shoplink-back"></div>
        <Slider />
        <div className="shoplink-text">
          <a href="https://yu-kobo.myshopify.com/">
            online shop
            <img className="shoplink-logo" src={shop} alt="shop-logo" />
            <img className="shoplink-link" src={link} alt="shop-link" />
          </a>
        </div>
        <div className="shoplink-imgs">
          <div className="shoplink-flex">
            <div className="shoplink-container">
              <a
                href="https://yu-kobo.myshopify.com/collections/%E5%8C%96%E7%B2%A7%E3%83%9D%E3%83%BC%E3%83%81"
                className="shoplink-img"
              >
                <img src={product01} alt="product01" />
              </a>
              <p>化粧ポーチ</p>
            </div>
            <div className="shoplink-container">
              <a
                href="https://yu-kobo.myshopify.com/collections/%E5%B0%8F%E7%89%A9%E7%94%A8%E3%83%9D%E3%83%BC%E3%83%81"
                className="shoplink-img"
              >
                <img src={product02} alt="product02" />
              </a>
              <p>小物用ポーチ</p>
            </div>
            <div className="shoplink-container">
              <a
                href="https://yu-kobo.myshopify.com/collections/%E3%83%88%E3%83%BC%E3%83%88%E3%83%90%E3%83%83%E3%82%B0"
                className="shoplink-img"
              >
                <img src={product03} alt="product03" />
              </a>
              <p>トートバッグ</p>
            </div>
            <div className="shoplink-container">
              <a
                href="https://yu-kobo.myshopify.com/collections/%E3%83%9E%E3%82%B9%E3%82%AF"
                className="shoplink-img"
              >
                <img src={product04} alt="product04" />
              </a>
              <p>マスク</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopLink;
