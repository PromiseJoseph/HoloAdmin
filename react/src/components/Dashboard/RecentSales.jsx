import React from 'react';
import { useContext } from 'react';
import { callContext } from '../Context/setContext';

const RecentSales = () => {
    const {recentact} = useContext(callContext);
    console.log(recentact)
    return (
        <>
            <div className="col-12">
                <div className="card recent-sales overflow-auto">

                    <div className="card-body">
                        <h5 className="card-title">Recent Registration<span></span></h5>

                        <table className="table table-borderless datatable">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Conference</th>
                                    <th scope="col">Payment</th>
                                    <th scope="col">Status/PaymentId</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                recentact.map(item => {
                                    return( 
                                        <TableData
                                        id={item.id}
                                        name={item.name}
                                        conference={item.conference}
                                        payment_id={item.payment_id} />)
                                })
                                }
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        </>


    );
};

export default RecentSales;

export const TableData = props => {
    return(
        <>
    <tr>
        <th scope="row"><a href="#">{props.id}</a></th>
        <td>{props.name}</td>
        <td><a href="#" className="text-primary">{props.conference}</a></td>
        <td>$165</td>
        <td role='button'><span className="badge bg-success " onClick={e=>{
            e.preventDefault();
            alert('Payment Id: '+ props.payment_id)
        }}
        >{props.payment_id}</span></td>
    </tr>
    </>
    )
}