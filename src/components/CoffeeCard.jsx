import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee }) => {
  const {_id, name, quantity, supplier, taste, category, details, potho } = coffee;
  const handleDelete = _id=>{
    console.log(_id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )
        console.log('Delete Conformed')
      }
    })
  }

  return (
    <div className="card card-side bg-[#f8f7f3] shadow-xl">
      <div>
      <figure>
        <img src={potho} alt="Movie" />
      </figure>
      </div>
      <div className=" flex justify-between w-full md:mx-4 pr-4 md:py-4">
        <div>
        <h2 className="card-title">{name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-2">
            <button className="btn ">View</button>
            <button className="btn">Edit</button>
            <button onClick={()=>handleDelete(_id)}
            className="btn bg-orange-500  rounded-2xl">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
