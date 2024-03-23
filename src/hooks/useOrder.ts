import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  // Esto es un Generic, sirve para hacerle saber
  // el tipo de dato, pero no es necesario pasarlo
  // en el caso de que le pasemos un dato, ya que
  // seria redundante y al pasarle el dato automaticamente
  // entiende el tipo de dato. En este caso si lo ponemos
  // ya que hacemos uso de un dato muy complejo como lo
  // es OrderItem.
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addItem = (item: MenuItem) => {
    // Validar si item ya se encuentra en la lista.
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

  console.log(order);

  return {
    addItem,
  };
}
