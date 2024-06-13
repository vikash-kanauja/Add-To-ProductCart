import "./App.css";
import data from "./product.json";
import Cart from "./components/Cart";
import AddToCart from "./components/AddToCart";
function App() {
  // console.log(jsonData);
  return (
    <div className="App">
      <h1 className="title-shop">SHOP</h1>
      <main className="main bd-grid">
        {data.products.map((product) => {
          return (
            <Cart
              key={product.id}
              name={product.name}
              img={product.img}
              priceBefore={product.priceBefore}
              priceNow={product.priceNow}
            />   
          );
        })}
      </main>
      <AddToCart/>
    </div>
  );
}

export default App;
