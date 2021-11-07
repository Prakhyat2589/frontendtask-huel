import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import OrdersHistory from "../OrdersHistory";
import axios from "axios";

jest.mock("axios");

afterEach(cleanup);
describe("OrdersHistory component render", () => {
  it("fetches and displays data", async () => {
    // We'll be explicit about what data Axios is to return when `get` is called.
    axios.get.mockResolvedValueOnce({
      data: {
        line_items: [
          {
            title: "Huel Shaker Bottle (Clear)",
            price_set: {
              shop_money: {
                currency_code: "USD",
              },
            },
          },
          {
            title: "Free T-Shirt & Shaker",
            price_set: {
              shop_money: {
                currency_code: "USD",
              },
            },
          },
        ],
      },
    });
    const url = "https://frontendtest.huel.io/api/line-items";
    const { getByText, getAllByTestId } = render(<OrdersHistory />);

    await waitFor(() =>
      getAllByTestId("orders").map((orders) => orders.textContent)
    );
    expect(getByText("Huel Shaker Bottle (Clear)"));
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(url);
  });

  it("fetches no data from an API", async () => {
    const message = "Network Error";
    axios.get.mockResolvedValue(message);
    const { component } = render(<OrdersHistory />);
    expect(component).toMatchSnapshot();
  });
});
