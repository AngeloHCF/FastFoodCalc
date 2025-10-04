import './index.css';
import Header from './components/menu/Header.jsx';
import Cart from './components/cart/Cart.jsx';
import Modal from './components/menu/Modal.jsx'
import { useState } from "react";

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex justify-between items-start h-screen overflow-hidden">
      <Header isExpanded={isExpanded} setIsExpanded={setIsExpanded} setSelectedRestaurant={setSelectedRestaurant} />
      <Cart isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      {/* Modal that opens up when clicked on a logo */}
      {selectedRestaurant && (
        <Modal restaurant={selectedRestaurant} onClose={() => setSelectedRestaurant(null)} />
      )}
    </div>
  );
}

export default App;
