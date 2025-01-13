import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "../utilities/axios"; 

const UpdateModal = ({ isVisible, onClose, contactDetail }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue, 
  } = useForm();

  useEffect(() => {
    if (contactDetail) {
      setValue("contactName", contactDetail.contactName);
      setValue("address", contactDetail.address);
      setValue("email", contactDetail.email);
      setValue("phone", contactDetail.phone);
    }
  }, [contactDetail, setValue]);

  const onSubmit = async (data) => {
    try {

      const response = await axios.put(`/update?id=${contactDetail._id}`, data, {
        withCredentials: true, 
      });

      if (response.data.success) {
        onClose();
      } else {
        alert("Failed to update contact.");
      }
    } catch (error) {
      console.error("Error updating contact:", error);
      alert("An error occurred while updating the contact.");
    }
    reset(); 
  };

  const handle = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  if (!isVisible) return null;

  return (
    <div
      id="wrapper"
      onClick={handle}
      className="bg-black fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="flex flex-col items-center justify-center bg-white rounded-lg w-[600px] p-6">
        <h1 className="text-xl text-black font-semibold font-primary text-center mb-4">
          Update Contact Information
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full p-6"
          noValidate
        >
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
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              id="address"
              type="text"
              {...register("address")}
              className="mt-1 block w-full rounded-md border px-2 py-1 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="mt-1 block w-full rounded-md border px-2 py-1 focus:outline-none"
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

          <div className="flex justify-center items-center gap-2">
            <button type="submit" className="btn inline-block">
              Update
            </button>
            <button className="btn-Cancel inline-block" onClick={() => onClose()}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
