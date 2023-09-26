

const BookingRow = ({ booking, handleDelete, handleUpdateConfirm }) => {
    const { img, price, date, service, _id, status} = booking;
   

    return (
        <tr>
            <th>
            <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6  w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            </th>
           

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-32 h-32">
                            <img src={img} />
                        </div>
                    </div>

                </div>
            </td>
            <td className="text-4xl">
                {service}


            </td>
            <td className="text-2xl">
                {'$' + price}
                <br />

            </td>
            <td className="text-2xl">{date}</td>
            <th>
                {
                    status === 'confirm' ? <span className="text-success font-bold">Apprved</span>
                    :
                    <button onClick={() => handleUpdateConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>
                }
                
            </th>
        </tr>
    );
};

export default BookingRow;