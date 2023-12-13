function QualitySettings({
  qualities,
  showQualitySettings,
  setShowQualitySettings,
  handleQualityClick,
}) {
  return (
    <div
      className={`text-white flex flex-col bg-[#808080] absolute top-0 right-0 transition-all duration-200 ${
        showQualitySettings ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button onClick={() => setShowQualitySettings(false)} className="text-xs">
        x
      </button>
      {qualities.map((qualityOption, index) => (
        <button
          key={qualityOption.quality}
          onClick={() =>
            handleQualityClick(qualityOption.quality, qualityOption.url)
          }
          className={`text-primary px-2 text-xs ${
            index % 2 === 0 ? "bg-[#0F0F0F]" : "bg-[#171717]"
          }`}
        >
          {qualityOption.quality}
        </button>
      ))}
    </div>
  );
}

export default QualitySettings;
