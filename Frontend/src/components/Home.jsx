import { useState } from "react"
import UpdateModal from "./UpdateModal"
import DeleteModal from "./DeleteModal"

const Home = () => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <div className="w-full md:mx-w-[1460px]">
      <h1 className="text-3xl font-primary font-semibold text-black md:pl-[100px] mb-1 text-center">
        All Contacts
      </h1>
      <div className="flex flex-col md:px-[80px] pb-[20px]">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-bold text-primary ">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-primary">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4 font-primary">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-4 font-primary ">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-4 font-primary">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-4 font-primary">
                      Action
                    </th>
                    <th scope="col" className="px-6 py-4 font-primary">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="font-semibold text-primary">
                  <tr  className="border-b transition duration-300 ease-in-out hover:bg-gray-300 ">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      Saikat
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">333,Dhaka,BD</td>
                    <td className="whitespace-nowrap px-6 py-4">saikat@gmail.com</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      888-9999
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button type="submit" className="text-green-500 hover:text-green-700 font-primary font-bold" onClick={() => setShowUpdateModal(true)}>
                        Update
                      </button>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <button type="submit" className="text-red-500 hover:text-red-700 font-primary font-bold" onClick={()=>setShowDeleteModal(true)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <UpdateModal isVisible={showUpdateModal} onClose={()=>{
        setShowUpdateModal(false);
      }}/>

      <DeleteModal isVisible={showDeleteModal} onClose={()=>{
        setShowDeleteModal(false);
      }}/>
    </div>
  )
}

export default Home
