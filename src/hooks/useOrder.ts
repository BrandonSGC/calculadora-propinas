import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  // (<OrderItem[]>) -> Esto es un Generic.
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    // Validar si el item ya se encuentra en la lista.
    const itemExists = order.find((orderItem) => orderItem.id === item.id);

    if (itemExists) {
      // Si existe aumentar la cantidad.
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
      return;
    }

    const newItem = { ...item, quantity: 1 };
    setOrder([...order, newItem]);
  };

  const removeItem = (id: MenuItem["id"]) => {
    const updatedOrder = order.filter((item) => item.id !== id);
    setOrder(updatedOrder);
  };

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
  };
}
