import  { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../../AuthProvider/AuthProvider';

const BookNow = () => {
    const service = useLoaderData();
    const { title, price, _id, img, } = service;
    const { user } = useContext(AuthContext);
    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerNamr: name,
            date,
            email,
            img,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);
        fetch('https://car-solution-server-8i7iupbny-maruf-hussain.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }


    return (

        <div>
            <h1 className='text-center text-3xl mb-8'>Service Type: {title}</h1>
            <form onSubmit={handleBookService}>

                <div className='bg-slate-200 p-8 mb-4 rounded-md'>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Price</span>
                            </label>
                            <input type="text" defaultValue={'$' + price} name='price' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' className="input input-bordered" />
                        </div>

                    </div>
                    <div className="form-control mb-8">
                        <label className="label">

                        </label>
                        <input type="text" placeholder="Product Description" className="input input-bordered h-36" />
                    </div>
                    <button className='btn btn-error btn-block mb-8'>Submit</button>

                </div>
            </form>

        </div>



    );
};

export default BookNow;