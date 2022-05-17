import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

export default function GetPropduct(props) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(
          data.map((el) => ({ ...el, count: Number.parseInt(el.count) }))
        );
      });
  }, [props.clic]);

  return (
    <>
      {product.map((e, productIndex) => {
        return (
          <tr>
            <td>{e.name}</td>
            <td>{e.price}</td>
            <td className="couns">
              <Button
                variant="dark"
                onClick={() => {
                  setProduct(
                    product.map((el, stateIndex) =>
                      productIndex === stateIndex
                        ? {
                            ...el,
                            count: e.count === 0 ? e.count : e.count - 1,
                          }
                        : el
                    )
                  );
                }}
              >
                -
              </Button>{" "}
              <span>{e.count}</span>
              <Button
                variant="primary"
                onClick={() => {
                  setProduct((prev) =>
                    prev.map((el, stateIndex) =>
                      productIndex === stateIndex
                        ? {
                            ...el,
                            count: e.count + 1,
                          }
                        : el
                    )
                  );
                }}
              >
                +
              </Button>{" "}
            </td>
            <td>
              <Button
                variant="danger"
                onClick={() => {
                  setProduct(
                    product.filter((el, stateIndex) =>
                      productIndex === stateIndex ? "" : el
                    )
                  );
                }}
              >
                x
              </Button>
            </td>
            <td>{e.price * e.count}</td>
          </tr>
        );
      })}
    </>
  );
}
