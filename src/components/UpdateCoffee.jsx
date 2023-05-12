
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
  const {_id, name, quantity, supplier, taste, category, details, potho } = coffee;

  const handleUpdateCoffee =  (event) =>{
    event.preventDefault();
    const form= event.target;
 
    const name=form.name.value;
    const quantity=form.quantity.value;
    const supplier=form.supplier.value;
    const taste=form.taste.value;
    const category=form.category.value;
    const details=form.details.value;
    const potho=form.potho.value;
    
     
       const updatedCoffee = { name,quantity,supplier,taste,category,details, potho};
      //  console.log(newCoffee)

       fetch(`http://localhost:5000/coffee/${_id}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(updatedCoffee)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'Coffee Updated Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }
       })
  }

    return (
        <div className="bg-[#F4F3F0] md:p-24 p-5">
      <Link to="/">
        <button>Home</button>
      </Link>
      <h1 className="text-3xl font-extrabold">Update Coffee </h1>
      <form onSubmit={handleUpdateCoffee}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control  md:w-1/2  ">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Coffee Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name ="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>


        {/* form supplier and test row */}
        <div className="md:flex mb-8">
          <div className="form-control  md:w-1/2  ">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category  and details row */}
        <div className="md:flex mb-8">
          <div className="form-control  md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={details}

                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form Photo row */}
        <div className="mb-8">
          <div className="form-control  w-full  ">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              {/* <span>Name</span> */}
              <input
                type="text"
                name="potho"
                defaultValue={potho}

                placeholder="Photo Url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <button className="btn btn-block bg-[#D2B48C] submit-btn text-black">Add Coffee</button>
       
      </form>
    </div>
    );
};

export default UpdateCoffee;