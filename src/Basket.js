import React, { useState } from "react";
import "./style.css";
import { Container, Table } from "react-bootstrap";
import GetPropduct from "./Product";

export default function Basket() {
  const [clic, setClic] = useState(0);

  return (
    <Container>
      {" "}
      <ul className="nav nav-pills">
        <li className="active">
          <a rel="nofollow" href="cart.html">
            Корзина<span id="total-cart-count" className="badge"></span>
          </a>
        </li>
      </ul>
      <div className="table-responsive">
        <Table striped bordered hover>
          <tbody>
            <GetPropduct clic={clic} />
          </tbody>
        </Table>
      </div>
      <div>
        Итого: <span id="total-cart-summa">0</span> руб.
      </div>
      <button
        id="order"
        onClick={() => {
          setClic(clic + 1);
        }}
        className="btn btn-info"
      >
        Оформить заказ
      </button>
    </Container>
  );
}
