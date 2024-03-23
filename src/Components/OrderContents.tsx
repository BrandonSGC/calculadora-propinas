import { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: OrderItem["id"]) => void;
};

export const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="mb-2 text-4xl font-black">Consumo</h2>

      <div className="mt-5 space-y-3">
        {order.length === 0 && <p>La orden está vacía</p>}
        {order?.map((item) => (
          //TODO: Hacer esto un componente
          <div
            className="flex items-center justify-between py-2 border-t border-gray-200 last-of-type:border-b"
            key={item.id}
          >
            <div>
              <p className="text-lg">
                {item.name} = ${item.price}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} - ${item.quantity * item.price}
              </p>
            </div>
            {/* // TODO: Handle delete */}
            <button
              onClick={() => removeItem(item.id)}
              className="font-black text-white bg-red-600 rounded-full size-8"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
