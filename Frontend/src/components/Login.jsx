import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form';
import logo from "../assets/logo.png";

const Login = () => {
  //form hook
  const {register,handleSubmit,formState:{errors},reset} = useForm();

  //submit function
  const useSubmit = () => { 
    
    reset();
  };


  return (
    <div className="flex border-2 rounded-md justify-center items-center md:mx-4">
      <div className="hidden md:block">
        <img src={logo} alt="logo" />
      </div>
      <div className=" px-10 py-6">
        <h1 className="text-4xl mb-2 pt-4 pr-5 font-bold font-primary text-[#4caf50]">
          Welcome to Contacts Locker
        </h1>
        <h1 className="text-3xl text-[#4caf50] mb-4 pt-4 pr-5 font-primary">Login</h1>
        <form className="flex flex-col justify-center items-start " onSubmit={handleSubmit(useSubmit)} noValidate>
          <input
            type="text"
            placeholder="Enter User Name"
            className=" formInput"
            {...register("userName", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
          />
          <p className=" mb-2 text-[#FF0000] font-primary font-semibold">{errors.userName?.message}</p>

          <input
            type="password"
            placeholder="Enter Password"
            className=" formInput"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
          />
          <p className=" mb-2 text-[#FF0000] font-semibold font-primary">{errors.password?.message}</p>
          <button
            className="btn"
          >
            Login
          </button>
        </form>
        <h2 className="text-sm text-black inline-block mr-2 font-primary">
          Not signup yet??
        </h2>
        <Link to={"/signup"} className="text-xl text-[#4caf50] underline font-primary">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Login;
