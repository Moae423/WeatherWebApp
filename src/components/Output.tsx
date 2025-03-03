import WeatherImage from "../assets/Weather-pana.svg";

interface WeatherProps {
  Weather: {
    location: {
      name: string;
      region: string;
      country: string;
    };
    current: {
      temp_c: number;
      condition: {
        text: string;
        icon: string;
      };
    };
  } | null;
}

const Output: React.FC<WeatherProps> = ({ Weather }) => {
  return (
    <div className="row-span-3 px-4 flex items-center justify-center rounded-2xl bg-[#00B4D8] shadow-lg">
      <div className="flex items-center justify-center">
        <img src={Weather?.current.condition.icon} sizes="100" alt="" />
        {/* Kasih If  */}
        {Weather ? (
          <>
            {Weather.current.condition.text === ""}
            <div className="flex flex-col items-start p-3">
              <h1 className="text-start text-3xl font-bold text-white">
                {Weather.current.temp_c}°C
              </h1>
              <p className="w-sm text-[#dfe2e2] text-lg font-satoshi">
                {Weather.current.condition.text}
              </p>
              <p className="w-sm text-[#dfe2e2] text-lg font-satoshi">
                <span className="font-bold text-blue-950">
                  {Weather.location.country},
                </span>
                {Weather.location.name}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center">
              <img src={WeatherImage} alt="" />
              <p className="text-2xl text-white font-bold">
                Wanna Check Weather?
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Output;
