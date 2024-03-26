import { useMemo } from "react";
import { OrderItem } from "../types";

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number,
  placeOrder: () => void
};

export const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsProps) => {
  const subtotalAmmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmmount = useMemo(() => subtotalAmmount * tip, [tip, order]);
  const totalAmmount = useMemo(
    () => subtotalAmmount + tipAmmount,
    [tip, order]
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="text-2xl font-black">Totales y Propina</h2>

        <p>
          Subtotal a pagar:
          <span className="font-bold"> ${subtotalAmmount}</span>
        </p>

        <p>
          Propina:
          <span className="font-bold"> ${tipAmmount}</span>
        </p>

        <p>
          Total a pagar:
          <span className="font-bold"> ${totalAmmount}</span>
        </p>
      </div>

      <button
        className="w-full p-3 mt-10 font-bold text-white uppercase bg-black disabled:opacity-10"
        disabled={order.length === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
};