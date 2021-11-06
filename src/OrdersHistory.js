import React, { useState, useEffect } from 'react';
import axios from 'axios';
import noimage from './assests/images/noimage.png';

const OrdersHistory = () => {
  const [orderdata, setOrderData] = useState();

  const fetchOrdersHistory = async () => {
    try {
      const fetchURL = await axios.get(
        'https://frontendtest.huel.io/api/line-items'
      );
      const response = fetchURL.data.line_items;
      setOrderData(response);
    } catch (e) {
      console.log('Network Error');
    }
  };

  //   const checkImage = async image_url => {
  //     var http = new XMLHttpRequest();

  //     http.open('HEAD', image_url, false);
  //     http.send();

  //     return http.status != 404;
  //   };

  //   const formatter = new Intl.NumberFormat('en-US', {
  //     style: 'currency',
  //     currency: 'USD'
  //   });

  useEffect(() => {
    fetchOrdersHistory();
    // console.log(checkImage);

    // console.log(formatter.format(1000));
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
                    <img alt={item.title} className="image" src={item.image} />
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
                    <p className="product-price">${item.price}</p>
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
