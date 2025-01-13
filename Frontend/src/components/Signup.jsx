import {useForm} from 'react-hook-form';
import logo from "../assets/logo.png";
import {useNavigate } from "react-router-dom";
import axios from "../utilities/axios";

const signupDataSubmit = async (data)=>{
  try {
    const response = await axios.post('/signup', data);
    return response.data;
  } catch (error) {
    console.log('Failed to create account or network problems');
  }
}

const Signup = () => {
  const navigate = useNavigate();

  //form hook
  const {register,handleSubmit,formState:{errors},reset} = useForm();
  
  //submit function
  const useSubmit = async(data) => {
    const result = await signupDataSubmit(data);
    if (result.success) {
      alert("Signup Successful");
      navigate("/");
    } else {
      alert("Signup failed");
    }
    reset();
  };

  return (
    <div className="flex border-2 rounded-md justify-center items-center md:mx-4">
      <div className=" px-10 py-6">
        <h1 className="text-4xl text-[#4caf50] mb-2 pt-4 pr-5 font-bold font-primary">
          Welcome to Contacts Locker
        </h1>
        <h1 className="text-3xl text-[#4caf50] mb-4 pt-4 pr-5 font-primary">Signup</h1>
        <form onSubmit={handleSubmit(useSubmit)} className="flex flex-col justify-center items-start " noValidate>
          <input
            type="text"
            placeholder="Enter user name"
            className=" formInput"
            {...register("userName", {
              required: {
                value: true,
                message: "Username is required",
              },
              maxLength: {
                value: 10,
                message: "Username must be less than 10 characters",
              },
            })}
          />
          <p className=" mb-2 text-[#FF0000] font-semibold font-primary">{errors.userName?.message}</p>
          <input
            type="password"
            placeholder="Set a password"
            className=" formInput"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <p className=" mb-2 text-[#FF0000] font-primary font-semibold">{errors.password?.message}</p>
          <button className="btn">Signup</button>
        </form>
      </div>
      <div className="hidden md:block">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Signup;
