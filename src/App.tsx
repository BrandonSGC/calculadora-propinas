import { MenuItem } from './Components';
import { menuItems } from './data/db';
import useOrder from './hooks/useOrder';

function App() {
  const { addItem } = useOrder();

  return (
    <>
      <header className="py-4 bg-teal-400">
        <h1 className="text-4xl font-black text-center text-white">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className='w-[90%] grid py-20 mx-auto max-w-7xl md:grid-cols-2'>
        <div className='p-5'>
          <h2 className='mb-2 text-4xl font-black'>Menú</h2>

          <div className='space-y-2'>
            {menuItems.map(item => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div>
          <h2 className='mb-2 text-4xl font-black'>Consumo</h2>


        </div>
      </main>
    </>
  );
}

export default App;
