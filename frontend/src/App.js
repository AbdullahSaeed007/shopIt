import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageAdmin from "./Pages/AdminPage";
import PageCust from "./Pages/CustPage";
import Detail from "./Component2/DetailProduct1";
import OrderForm from "./Component2/OrderForm";
import SearchResults from "./Component2/SearchResults";

function App() {
  const href = window.location.href;
  console.log(href);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<PageAdmin />} />
        <Route path="/customer/*" element={<PageCust />} />
        <Route path="/detailProduct/:id" element={<Detail />} />
        <Route exact path="/orderForm/:id" element={<OrderForm />} />
        <Route exact path="/searchResults/:id" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
