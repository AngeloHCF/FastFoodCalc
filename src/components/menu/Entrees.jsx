function Entrees({ data }) {
  if(!data) return null;
  return (
    <div className="mt-6">
      <h2 className="text-center text-2xl font-bold">Entrees</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data.map((item, i) => (
          <li className="inline">
            <button
              className="w-28 h-28 sm:w-32 sm:h-32 bg-gray-100 hover:bg-blue-100 
                         border rounded-xl shadow-md flex items-center justify-center 
                         text-center p-2 transition cursor-pointer"
            >
              <span className="text-sm">{item.item}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Entrees;