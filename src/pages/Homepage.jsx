import { useNavigate } from "react-router-dom";
import bgAddText from "../assets/bgAddText.png";
export default function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="relative">
        <img src={bgAddText} alt="background" className="z-0 absolute " />
        <div className=" absolute flex flex-row space-x-2 top-[629px] left-[186px] gap-5 mx-2">
          <div
            className="rounded-full bg-[#F3CB60] cursor-pointer px-4 text-4xl py-4 font-semibold"
            onClick={() => navigate("/register")}
          >
            Register
          </div>
          <div
            className="rounded-full bg-white cursor-pointer  text-4xl font-semibold py-4 px-4"
            onClick={() => navigate("/login")}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
}
