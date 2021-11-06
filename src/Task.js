import React from 'react';
import OrdersHistory from './OrdersHistory';

const Task = () => {
  return (
    <div>
      <div className="box orders-history-block has-shadow-hover">
        <div className="order-information">
          <h2 className="title is-6 is-marginless">Original Hardcoded</h2>
          <div>
            <div className="order-information-expanded">
              <div className="product-list-boxes columns is-multiline">
                <div className="column is-6">
                  <div className="media">
                    <div className="media-left">
                      <img
                        alt="Product bars"
                        className="image"
                        src="https://cdn.shopify.com/s/files/1/0578/1097/products/HUEL_SHAKER_FROSTER_FR_1200.jpg?v=1515319444"
                      />
                    </div>
                    <div className="media-content">
                      <div>
                        <p className="product-title">
                          Huel Shaker Bottle (Clear)
                        </p>
                        <p className="product-variants">
                          1x Huel Shaker Bottle (Clear)
                        </p>
                      </div>
                    </div>
                    <div className="media-right">
                      <p className="product-price">$5.00</p>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="media">
                    <div className="media-left">
                      <img
                        alt="Product bars"
                        className="image"
                        src="https://cdn.shopify.com/s/files/1/1374/5287/products/Free_Tshirt_and_Shaker.png?v=1551882727"
                      />
                    </div>
                    <div className="media-content">
                      <div>
                        <p className="product-title">
                          Free T-Shirt &amp; Shaker
                        </p>
                        <p className="product-variants">1x Large / Male</p>
                      </div>
                    </div>
                    <div className="media-right">
                      <p className="product-price">$0.00</p>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="media">
                    <div className="media-left">
                      <img
                        alt="Product bars"
                        className="image"
                        src="https://huel-assets.s3.eu-west-2.amazonaws.com/temp-public/thumbnails/powder.jpg"
                      />
                    </div>
                    <div className="media-content">
                      <div>
                        <p className="product-title">Huel Powder</p>
                        <p className="product-variants">
                          1x Berry, 1x Vanilla, 1x Chocolate
                        </p>
                      </div>
                    </div>
                    <div className="media-right">
                      <p className="product-price">$99.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <h2 className="title is-6 is-marginless">Dynamically Generated</h2>
          <div>
            <OrdersHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
