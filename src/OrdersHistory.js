import React, { useState, useEffect } from "react";
import axios from "axios";
import noimage from "./assests/images/noimage.png";

const OrdersHistory = () => {
  const [filterdata, setFilterData] = useState();

  const fetchOrdersHistory = async () => {
    try {
      const fetchURL = await axios.get(
        "https://frontendtest.huel.io/api/line-items"
      );
      const response = fetchURL.data.line_items;
      console.log(response);
      bundleOrders(response);
    } catch (e) {
      console.log("Network Error");
    }
  };

  const bundleOrders = (orderList) => {
    let finalList = [];
    orderList.forEach((item) => {
      let filterList = finalList.filter((list) => {
        return list.variant_title === item.variant_title;
      });

      if (filterList.length) {
        let existingIndex = finalList.indexOf(filterList[0]);
        //bundling name
        finalList[existingIndex].name = finalList[existingIndex].name.concat(
          item.name
            .split(" ")
            .slice(-3, -2)
            .join(" ")
        );

        //one title
        finalList[existingIndex].title = finalList[existingIndex].title
          .split(" ")
          .slice(0, 2)
          .join(" ");

        //adding price
        finalList[existingIndex].price = (
          parseInt(finalList[existingIndex].price) + parseInt(item.price)
        ).toString();
      } else {
        if (typeof item.name === "string") {
          if (item.sku === "POW-BE-11") {
            item.name = [
              item.name
                .split(" ")
                .slice(-3, -2)
                .join(" "),
            ];
          } else {
            item.name = [item.name];
          }
        }
        finalList.push(item);
      }
    });
    setFilterData(finalList);
  };

  const onError = (e) => {
    e.target.src = noimage;
  };

  const productVarient = (productQuantity, productName) => {
    return productName
      .map((productName) => {
        return `${productQuantity}x ${productName}`;
      })
      .join(", ");
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
        {filterdata &&
          filterdata.map((item, index) => {
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
                        {productVarient(item.quantity, item.name)}
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
