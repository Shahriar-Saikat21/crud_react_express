import { useForm } from "react-hook-form";
import axios from "../utilities/axios";

const addData = async(data)=>{
  try {
    const response = await axios.post("/add", data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding contact:", error);
  }

}

const Add = () => {
  const {register,handleSubmit,formState: { errors },reset} = useForm();

  const onSubmit = async (data) => {
    const result = await addData(data);
    if (result.success) {
      alert("Contact Created successfully");
    } else {
      alert("An error occurred. Please try again later.");
    }
    reset();
  };

  return (
    <div className="flex border-2 rounded-md justify-center items-center md:mx-4 bg-gray-100 w-1/2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-white shadow-md rounded-lg p-6"
        noValidate
      >
        <h2 className="text-2xl font-bold text-center mb-6">Add New Contact</h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Contact Name
          </label>
          <input
            id="name"
            type="text"
            {...register("contactName", { required: "Name is required" })}
            className={`mt-1 block w-full rounded-md border px-2 py-1 focus:outline-none ${
              errors.name ? "border-red-500" : "border-gray-300"
            } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 px-2 py-1 focus:outline-none"
          >
            Address
          </label>
          <input
            id="address"
            type="text"
            {...register("address")}
            className={'mt-1 block w-full rounded-md border px-2 py-1 focus:outline-none'}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="text"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={'mt-1 block w-full rounded-md border px-2 py-1 focus:outline-none'}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="text"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{11}$/,
                message: "Enter a valid 11-digit phone number",
              },
            })}
            className={`mt-1 block w-full rounded-md border px-2 py-1 focus:outline-none ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } shadow-sm focus:ring-blue-500 focus:border-blue-500`}
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div className="flex justify-center items-center">
          <button className="btn">Add Contact</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
