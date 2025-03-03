import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { CloudFog } from "lucide-react";

interface inputAreaProps {
  value: string;
  Error?: string | null;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleWeather: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const InputArea: React.FC<inputAreaProps> = ({
  value,
  handleChange,
  handleWeather,
  Error,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-3">
      <CloudFog size={100} color="#caf0f8" />
      <h3 className="text-center text-white text-3xl font-bold font-JetBrain">
        What Weather In Your Country
      </h3>
      {/* <input type="text" className="border-2 border-black my-3 w-1/2" /> */}
      <Input
        className="w-1/2 my-3  bg-[#90E0EF] border-none font-normal"
        value={value}
        onChange={handleChange}
        placeholder="Where Weather You Wanna See ? "
      />
      <Button
        onClick={handleWeather}
        variant="outline"
        className="bg-[#0077B6] border-none font-satoshi hover:bg-[#CAF0F8] text-white active:scale-95 cursor-pointer hover:scale-105 transition-all duration-300"
      >
        Check Weather
      </Button>
      {Error && <p className="text-red-500 mt-2">{Error}</p>}
    </div>
  );
};

export default InputArea;
