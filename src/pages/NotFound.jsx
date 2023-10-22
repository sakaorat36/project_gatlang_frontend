import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  });

  return (
    <div className="bg-pink-200 min-h-screen">
      <div className="p-60 grid grid-cols-1 text-center relative">
        <h1 className="text-9xl font-semibold ">404</h1>
        <h1 className="text-7xl mt-12 font-semibold">Page Not Found</h1>
      </div>
    </div>
  );
}
