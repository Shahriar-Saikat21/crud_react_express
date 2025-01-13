import logo from '../assets/logo.png';
import {useState} from 'react'
import { NavLink,useNavigate} from "react-router-dom";
import axios from "../utilities/axios";
import { HiOutlineBars4,HiOutlineXMark } from "react-icons/hi2";

const Navbar = () => {
  const[toggle,setToggle]=useState(false);
  const toggleHandler=()=>{setToggle(!toggle)};
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    try {
      const response = await axios.post('/logout', {}, { withCredentials: true });
  
      if (response.data.success) {
        navigate("/");
      } else {
        alert("Logout failed. Try again.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <nav className="bg-[#4caf50] fixed w-full h-[60px] ">
      <div className=" md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-12 px-4">
        <div className='flex justify-between items-center'>
            <img src={logo} className='h-[50px]'/>
            <h1 className="text-3xl font-bold text-[#ffffff] ml-2 font-primary">Contacts Locker</h1>
        </div>
        
        <ul className="hidden md:flex justify-center items-center gap-4 ">
          <NavLink to={"/home"}className=" pcNav">Home</NavLink>
          <NavLink to={"/add"}className=" pcNav">Add</NavLink>
          <NavLink to={"/"}className=" pcNav" onClick={handleLogout}>Logout</NavLink>
        </ul>
        <div className='md:hidden' onClick={toggleHandler}>
          {
            toggle?<HiOutlineXMark className=' text-3xl text-[#ffffff] cursor-pointer'/>:
              <HiOutlineBars4 className=' text-3xl text-[#ffffff] cursor-pointer'/>
          }            
        </div>
        <div className={toggle?'absolute bg-[#4caf50] w-full md:hidden border-b top-[60px] left-0':'hidden'}>
          <ul className=" p-5 flex flex-col gap-2">
            <NavLink to={"/home"} className=" mobileNav">Home</NavLink>
            <NavLink to={"/add"} className=" mobileNav">Add</NavLink>
            <NavLink className=" mobileNav" onClick={handleLogout}>Logout</NavLink>      
          </ul>
        </div>       
      </div>
    </nav>
  );
};

export default Navbar;
