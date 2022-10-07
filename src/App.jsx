import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/header/header.component";
import { Home } from "./containers/home/home.container";
import { ItemDetailContainer } from "./containers/item-detail/item-detail.containter";
import { Cart } from "./components/cart/cart.component";
import { CartProvider } from "./context/cart-context.component";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/producto/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/carrito">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
