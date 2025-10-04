import arrow from '../../assets/left-arrow.svg';
import gear from '../../assets/gear.svg';

function Footer({ isExpanded, onArrowClick }) {
  return (
    <div className="w-full fixed bottom-0 flex px-4 py-2">
      <button onClick={onArrowClick}>
        <img 
          src={arrow} 
          alt="Arrow" 
          className={`w-6 h-6 cursor-pointer transition-all duration-500 
          ${isExpanded ? 'rotate-180' : 'rotate-0'}`} 
        />
      </button>
      <img src={gear} alt="Gear" className="w-6 h-6 cursor-pointer fixed bottom-2 right-2" />
    </div>
  );
}

export default Footer;