import Search from './Search';
import Menu from './Menu';
import { useState } from "react";
import Entrees from './Entrees';

function Header({ isExpanded, setSelectedRestaurant }) {
  const [query, setQuery] = useState("");

  return (
    <main className='w-2/3 border-r-black border-r-2 h-full flex justify-start flex-col p-4'>
      <div className="text-xl mt-5 p-2 w-full max-w-full">
        <h1 className="font-[Poppins] text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">FastFoodCalc</h1>
        <Search setQuery={setQuery} />
      </div>

      <Menu isExpanded={isExpanded} setSelectedRestaurant={setSelectedRestaurant} query={query} />
    </main>
  );
}

export default Header;