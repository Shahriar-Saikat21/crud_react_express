function onDelete() {
    console.log("Delete Btn Clicked")
}

const DeleteModal = ({isVisible,onClose}) => {
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
          Are you sure to delete this contact ?
        </h1>
        
        <div className="flex justify-center items-center gap-2">
        <button type="submit" className="btn-Delete inline-block" onClick={()=>onDelete()}>
            Delete
        </button>
        <button className="btn-Cancel inline-block" onClick={() => onClose()}>
            Cancel
        </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
