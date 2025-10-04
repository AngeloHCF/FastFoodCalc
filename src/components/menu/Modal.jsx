import Entrees from './Entrees';

function Modal({ restaurant, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
      ></div>
      {/* Modal Box */}
      <div className="p-6 relative bg-white rounded-2xl shadow-2xl transition transform scale-100 w-96 h-96 md:w-150 md:h-100 lg:w-200 lg:h-150 flex justify-start flex-col items-center">
        {/* Header */}
        <div className="">
          <button onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-4xl"
          >✕</button>
          <div className="w-24 h-24">
            <img src={restaurant.logo} className="max-w-full max-h-full object-contain"/>
          </div>
        </div>
        <div className='flex-1 overflow-y-auto pr-2'>
          <Entrees data={restaurant.entrees} />
        </div>
        {/* Menu Section */}
        </div>
      </div>
  )
}

export default Modal;