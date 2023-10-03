import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingRow from "./BookingRow/BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate();

    const url = `https://car-solution-server-r58db1bh3-maruf-hussain.vercel.app/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authoraization: `Bearer ${localStorage.getItem('car-token')}`
            }
        })
            .then(res => res.json())
            .then(data =>{
                if(!data.error){
                    setBookings(data)
                }
                else{
                  navigate('/');
                }
            })
                
    }, [url, navigate]);

    const handleDelete = id => {
        const proceed = confirm('Are You Sure Delete This Item')
        if (proceed) {
            fetch(`https://car-solution-server-r58db1bh3-maruf-hussain.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted Succecfully')
                        const remainig = bookings.filter(booking => booking._id !== id)
                        setBookings(remainig);
                    }
                })
        }
    };

    const handleUpdateConfirm = id => {
        fetch(`https://car-solution-server-r58db1bh3-maruf-hussain.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application.json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id !== id);
                    updated.status = 'confirm'
                    const newUpdate = [updated, ...remaining];
                    setBookings(newUpdate)
                }
            })
    }
    return (
        <div>
            <h1 className="text-5xl text-center mb-8">Total Bookings: {bookings.length}</h1>
            <div className="overflow-x-auto">
                <table className="table mb-8  bg-slate-100">


                    <tbody>

                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleUpdateConfirm={handleUpdateConfirm}
                            ></BookingRow>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Bookings;