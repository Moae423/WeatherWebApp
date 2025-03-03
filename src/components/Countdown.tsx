import { useEffect, useState } from "react";
import image from "../assets/image/swiss.jpg";
const Countdown = () => {
  const [Hours, setHours] = useState(new Date());
  const options: Intl.DateTimeFormatOptions = { weekday: "long" };
  const HariIni: string = Hours.toLocaleString("en-EN", options);
  const Jam: number = Hours.getHours();
  const Menit: number = Hours.getMinutes();
  const Detik: number = Hours.getSeconds();

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div
      className=" text-white  rounded-2xl shadow-lg p-8 w-xl flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <p className="text-6xl font-semibold">
        {Jam.toString().padStart(2, "0")} : {Menit.toString().padStart(2, "0")}{" "}
        : {Detik.toString().padStart(2, "0")}
      </p>
      <p className="text-2xl font-semibold font-JetBrain">{HariIni}</p>
    </div>
  );
};
export default Countdown;
