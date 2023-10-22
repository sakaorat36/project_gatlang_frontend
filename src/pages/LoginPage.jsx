import LoginForm from "../features/auth/LoginForm";
import icecreamLogin from "../assets/icecreamLogin.jpg";

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-row bg-pink-200">
        <div className="basis-1/2">
          <img src={icecreamLogin} alt="Icecream" />
        </div>
        <div className="basis-1/2  pt-10 flex flex-col items-center min-[900px]:pt-[15.25rem] min-[900px]:flex-row min-[900px]:justify-between min-[900px]:items-start min-[1075px]:justify-center">
          <div className="mx-auto max-w-[24.75rem] bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 p-4">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
