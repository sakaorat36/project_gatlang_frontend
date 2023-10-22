import SideImage from "../components/SideImage";
import RegisterForm from "../features/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <div className="flex flex-row bg-pink-200">
        <SideImage />
        <RegisterForm />
      </div>
    </>
  );
}
