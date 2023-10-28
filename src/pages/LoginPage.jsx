import LoginForm from "../features/auth/LoginForm";
import icecreamLogin from "../assets/icecreamLogin.jpg";

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-row bg-pink-200">
        <div className="basis-1/2">
          <img src={icecreamLogin} alt="Icecream" />
        </div>
        <LoginForm />
      </div>
    </>
  );
}
