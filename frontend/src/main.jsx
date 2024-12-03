import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import "react-toastify/ReactToastify.css";
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from "react-router-dom";
import store from "./store";
import { UserProvider } from './context/UserContext.jsx';
import { AddressProvider } from './context/AddressContext.jsx';
import { CartProvider } from "./context/CartContext.jsx";
import { BasketProvider } from "./context/BasketContext.jsx"
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <UserProvider>
          <CartProvider>
            <AddressProvider>
              <BasketProvider>
                <App />
              </BasketProvider>
            </AddressProvider>
          </CartProvider>
        </UserProvider>
      </Provider>
    </Router>
  </StrictMode>
);
