import fastFoodData from '../../data/fastfood.json';

function Menu({ isExpanded, setSelectedRestaurant, query }) {
  const filteredData = Object.entries(fastFoodData).filter(([name]) => 
    name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={`grid p-8 gap-4 transition-all duration-300
    ${isExpanded ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"}`}>
      {filteredData.map(([name, restaurant]) => {
        return (
          <div key={name} className='flex justify-center w-30 h-30 rounded-xl'>
            <img 
            onClick={() => setSelectedRestaurant({ name, ...restaurant })}
            src={restaurant.logo} alt={`${name} logo`} className="max-w-full max-h-full object-contain cursor-pointer transform transition duration-300 hover:scale-110 hover:shadow-lg hover:brightness-110 rounded-xl" />
          </div>
        )
      })}
    </div>
  );
}

export default Menu;