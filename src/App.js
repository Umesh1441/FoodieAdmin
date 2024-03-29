
import AddFoodData from './components/AddFoodData';

import OrderSection from './components/Orders/OrderSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowDetails from './components/Orders/ShowOrderSpecific';

function App() {
  return (
    // <div className="Container">
    //   <AddFoodData />
    //   {/* <OrderSection /> */}
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/orders" element={<OrderSection />} />
        <Route path="/" element={<AddFoodData />} />
        <Route path="/orderdetails/:orderid" element={<ShowDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;