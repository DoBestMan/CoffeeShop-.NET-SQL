import logo from './logo.svg';
import './App.css';
import CoffeeShop from './CoffeeShop';


function App() {
    return (
        <main className="pt-20 min-h-screen bg-neutral-50 dark:bg-slate-900 pb-16">
           
            <h1 className="text-8xl pl-4 dark:text-white max-w-xl md:max-w-screen-xl mb-6">Coffee Shop</h1>
        <div className="p-4">
            <CoffeeShop />
            </div>
        </main>
  );
}

export default App;
