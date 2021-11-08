import React, { useState, useEffect } from "react";
import axios from "axios";
import noimage from "./assests/images/noimage.png";

const OrdersHistory = () => {
  const [orderdata, setOrderData] = useState();

  const fetchOrdersHistory = async () => {
    try {
      const fetchURL = await axios.get(
        "https://frontendtest.huel.io/api/line-items"
      );
      const response = fetchURL.data.line_items;
      setOrderData(response);
    } catch (e) {
      console.log("Network Error");
    }
  };

  const onError = (e) => {
    e.target.src = noimage;
  };

  const priceFormatter = (price, currencyCode) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
    }).format(price);
  };

  useEffect(() => {
    fetchOrdersHistory();
  }, []);

  return (
    <div className="order-information-expanded">
      <div className="product-list-boxes columns is-multiline">
        {orderdata &&
          orderdata.map((item, index) => {
            return (
              <div className="column is-6" key={index} data-testid="orders">
                <div className="media">
                  <div className="media-left">
                    <img
                      alt={item.title}
                      className="image"
                      src={item.image}
                      onError={(e) => onError(e)}
                    />
                  </div>
                  <div className="media-content">
                    <div>
                      <p className="product-title">{item.title}</p>
                      <p className="product-variants">
                        {item.quantity}x {item.name}
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <p className="product-price">
                      {priceFormatter(
                        item.price,
                        item.price_set.shop_money.currency_code
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OrdersHistory;
