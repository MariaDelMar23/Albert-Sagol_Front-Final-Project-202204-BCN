import Header from "../../components/Header/Header";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <Header pageName={"Register"} adminUser={false} />
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
