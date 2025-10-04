import info from '../../assets/info.svg';

function ProgressBar({title, value, target, nutrientType}) {
  const progress = value / target;
  const progressRounded = Math.round(progress * 100);

  const nutrientGradients = {
    RDA: "from-yellow-400 to-green-500",
    AI: "from-yellow-400 to-green-500",
    UL: "from-green-400 via-yellow-400 to-red-500",
    AMDR: "from-yellow-400 via-green-400 to-yellow-400",
    DG: "from-green-400 via-yellow-400 to-red-400", // for Saturated Fat
  };

  return (
    <div>
      <p>
        {title} 
        <span className="text-xs ml-2">({value}/{target})</span>
        <img 
          src={info} 
          alt="Info" 
          className="inline w-4 h-4 cursor-pointer ml-2" 
          title="This is some info about the nutrient"
        />
      </p>

      <div className="flex items-center gap-2">
        {/* Progress bar container*/}
        <div className={`relative w-full bg-[#f4f4f4] rounded-full h-2.5`}>
          {/* Progress bar indicator */}
          <div className={`absolute inset-0 bg-gradient-to-r ${nutrientGradients[nutrientType]} h-2.5 rounded-full`}>
            <div 
              className="absolute right-0 h-full bg-[#f4f4f4]" 
              style={{ width: `${100 - Math.min(progressRounded, 100)}%` }}
            ></div>
          </div>
        </div>
        <p className="w-10">{progressRounded}%</p>
      </div>
    </div>
  );
}

export default ProgressBar;