import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingRow from "./BookingRow/BookingRow";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:7000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    const handleDelete = id => {
        const proceed = confirm('Are You Sure Delete This Item')
        if(proceed){
            fetch(`http://localhost:7000/bookings/${id}` ,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('Deleted Succecfully')
                    const remainig = bookings.filter(booking => booking._id !== id)
                    setBookings(remainig);
                }
            })
        }
            }
    return (
        <div>
            <h1 className="text-5xl text-center mb-8">Total Bookings: {bookings.length}</h1>
            <div className="overflow-x-auto">
                <table className="table mb-8  bg-slate-100">
                    {/* head */}
                   
                    <tbody>

                      {
                        bookings.map(booking => <BookingRow
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        ></BookingRow>)
                      }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Bookings;