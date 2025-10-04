import info from '../../assets/info.svg';

function ProgressBar({title, value, target, nutrientType}) {
  const progress = value / target;
  const progressRounded = Math.round(progress * 100);

  const nutrientGradients = {
    RDA: "bg-gradient-to-r from-orange-400 via-yellow-400 to-green-500",
    AI: "bg-gradient-to-r from-orange-400 via-yellow-400 to-green-500",
    UL: "bg-gradient-to-r from-green-400 via-yellow-400 to-red-500",
    AMDR: "bg-gradient-to-r from-orange-400 via-green-400 to-orange-400",
    DG: "bg-gradient-to-r from-green-400 via-yellow-400 to-red-400", // for Saturated Fat
  };

  return (
    <div>
      <p>
        {title} 
        <span className="text-xs ml-2">({value}/{target})</span>
        <img src={info} alt="Info" className="inline w-4 h-4 cursor-pointer ml-2" title="This is some info about the nutrient"/>
      </p>

      <div className="flex items-center gap-2">
        {/* Progress bar */}
        <div className="w-full bg-[#f4f4f4] rounded-full h-2.5">
          <div className={`${nutrientGradients[nutrientType]} h-2.5 rounded-full`} style={{ width: `${Math.min(progressRounded, 100)}%` }}></div>
        </div>
        <p className="w-10">{progressRounded}%</p>
      </div>
    </div>
  );
}

export default ProgressBar;