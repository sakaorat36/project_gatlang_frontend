import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotAuthorized() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  });

  return (
    <div className="bg-pink-200 min-h-screen">
      <div className="p-60 grid grid-cols-1 text-center relative">
        <h1 className="text-9xl font-semibold text-red-500">
          Sorry
          <span> :( </span>
        </h1>
        <h1 className="text-4xl mt-12 font-semibold">
          Your Are Not Authorized
        </h1>
      </div>
    </div>
  );
}
