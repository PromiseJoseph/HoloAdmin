import React, { useContext, useEffect, useState } from "react"
import { callContext } from "../Context/setContext";
import Title from "../Header/Title";
import { NavLink,useNavigate} from "react-router-dom";
import { useLayoutSetup } from "../../Layout";
import { deleteItem, getItem, getSingle} from "../api/api";



const AllRegistration = () => {
    const { setEditstatus, editstatus,
        setCuredit, allregist } = useContext(callContext);

    if (editstatus) {
       
        setCuredit()
        setEditstatus(false)
    }
    else{
        useLayoutSetup();
    }
    const handleRefresh = () => {
        window.location.reload()
    }

    return (<>
        <Title
            page="All Registration"
            prevLink="/"
            prev="Home"
            active="Registration / AllRegistration"
        />


        <section className="section">
            <div className="row">
                <div className="col-lg-12">

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">All Registration</h5>
                            <p>You can view and work on  <code>.all registration </code> from here</p>

                            <table className="table datatable">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Conference</th>
                                        <th>Association</th>
                                        <th>Church</th>
                                        <th>Reg. Day</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* imported tabledata goes here*/}
                                    {
                                        allregist.map(item => {
                                            return (

                                                <TableData
                                                    id={item.id}
                                                    name={item.name}
                                                    conference={item.conference}
                                                    association={item.association}
                                                    church={item.church}
                                                    day={item.day}
                                                    month={item.month}

                                                />

                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                            <button className="btn btn-secondary d-flex mx-col-6" onClick={() => { handleRefresh() }}>
                                Refresh
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>)

}
export default AllRegistration



export const TableData = (props) => {


    const {
        setEditstatus,
        setCuredit,
       
    } = useContext(callContext)



    // handles setting f current clicked ide
    const setId = item => {
        if (typeof (item) == "string") {
            var mkId = item.split(".", 2)
            return mkId[mkId.length - 1];
        }
    }



    //sets item id  to be edited before redirect
    const singleUrl = "getSingle/"
    //current id to be edited
    const [newcurId, setNewcurId] = useState(0);

    const handleEdit = (id) => {
        setCuredit(id)
        setEditstatus(true)
         }
      

    

   


    const month = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    //delete section handle
    const deleteUrl = "deleteregistration"
    let deleteId;
    const handleDelete = (deleteUrl, deleteId) => {
        console.log(deleteId)

        var initDel = deleteItem(deleteUrl, { id: deleteId });
        initDel.then(response => console.log(response));

 
    }


 
    return (
        <>
            <tr>
                <td>
                    {props.id}

                </td>
                <td>
                    {props.name}
                </td>
                <td>
                    {props.conference}
                </td>
                <td>
                    {props.association}
                </td>
                <td>
                    {props.church}
                </td>
                <td>
                    {props.day + " " + month[props.month - 1]}
                </td>
                <td className="d-flex mx-2">

                    <NavLink to="/registrations/editregistration" className="btn btn-success mx-3" id={`dd.${props.id}`}
                        onClick={e => {
                            
                            var newId = e.target.getAttribute("id")
                            var curid = setId(newId);
                            handleEdit(curid)
                            
                        }
                        }> <i className="bi bi-pencil-square"></i> Edit</NavLink>
                    <button className="btn btn-danger"  id={`dd.${props.id}`}
                        onClick={e => {
                            var tarId = e.target.getAttribute("id")

                            var setItemId = setId(tarId);
                            deleteId = setItemId
                            console.log(deleteId)
                            handleDelete(deleteUrl, deleteId);


                        }}
                    ><i className="bi bi-trash"></i></button> 
                </td>

            </tr>


        </>
    )
}


