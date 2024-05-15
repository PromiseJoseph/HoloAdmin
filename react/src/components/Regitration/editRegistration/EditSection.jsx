import React, { useContext, useEffect, useState } from "react";
import Title from "../../Header/Title";

import { callContext } from "../../Context/setContext";
import { editItem, getItem, getPayment, getSingle } from "../../api/api";
import { useLayoutSetup } from "../../../Layout";
import { LoadOption } from "../newRegistration/OptionsSet";

const EditSection = () => {
    /**
     * postid is only limited to selecting curent post format
     * cureditid is the only real id from database
     */

    const { allregist, curedit, editstatus, setEditstatus, setCuredit } = useContext(callContext);

    //handles loading animation
    const [loading, setLoading] = useState(false)

    //used in setup fo only paayment_id
    const [payment, setPayment] = useState({ id: "" });

    //api data
    const [data, setData] = useState({
        name: "",
        conference: "",
        association: "",
        church: "",
        payment_id: "",

    })

    //response message and it's status
    const [resMsg, setResMsg] = useState(
        {
            status: true,
            message: "",
        })



    useEffect(() => {

        //edit data
        if (editstatus == true) {

            allregist.map(item => {

                if (item.id == curedit) {
                    setData({

                        name: item.name,
                        conference: item.conference,
                        association: item.association,
                        church: item.church,
                        payment_id: item.payment_id,
                    })
                }

            }, [])
            //optionSet
            LoadOption("conference", "association", "church");


        }
       
    }, [])




  

    //api section
    const api = "updateregistration/"
    const handleUpdate = (api, id, editItem, data) => {
        setLoading(true);
        var newEditItem = editItem(api, id, data);
        newEditItem.then(response => {
            setLoading(false);
            var res = response.data
            setResMsg(
                {
                    status: res.status,
                    message: res.message,
                }

            )
            if (res.status == true) {
                setData({
                    name: "",
                    conference: "",
                    association: "",
                    church: "",
                    payment_id: "",
                })
                setCuredit();
                setPayment({id:""});
                setEditstatus(false)
            }
        })
        newEditItem.catch((error) => {
            let newdata;
            if (newdata = error.response.data) {
                setLoading(false)
                let message = newdata.message.split(".", 2);
                setResMsg({
                    status: false,
                    message: message
                })
                console.log(resMsg)

            }
            return
        })

    }
    //end of api section


    
    //Get section
    const getHandle = (payment) => {
        setLoading(true)
        var gettedItem = getPayment("getpayment/", payment.id)

        gettedItem.then(response => {
            setLoading(false);

            var res = response.data

            if (res.status == true) {
                res.item.map(e => {
                    setData({
                        name: e.name,
                        conference: e.conference,
                        association: e.association,
                        church: e.church,
                        payment_id: e.payment_id,
                    })
                     setCuredit(e.id);
                })
                setEditstatus(true)
                LoadOption("conference", "association", "church");

               
            }
            //else
            setResMsg(
                {
                    status: res.status,
                    message: res.message,
                })

        })
        gettedItem.catch((error) => {
            setLoading(false)
            let newdata;
            if (newdata = error.response.data) {

                let message = newdata.message.split(".", 2);
                setResMsg({
                    status: false,
                    message: message
                })
                setEditstatus(false);
                setCuredit();
                setPayment({id:""});

            }
            return

        })
    }
    return (
        <>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> Registration </h5>
                                <form>
                                    <div>
                                        <input className="col-lg-6 mx-3 p-2" type="text" placeholder="paste payment_id " value={payment.id}
                                            style={{ borderRadius: `${5}px`, border: `${1}px solid black` }}
                                            onChange={pay => setPayment({ ...payment, id: pay.target.value })} required />
                                        {console.log(payment)}
                                        {
                                            loading == true ?
                                                <>

                                                    <div className="light mx-3 text-muted">
                                                        <div className="spinner-grow " role="status">
                                                        </div>
                                                    </div>

                                                </>
                                                :
                                                <>
                                                    <button className="btn btn-success fs-6 "

                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            if (loading == false && payment.id != "")
                                                                getHandle(payment)
                                                        }}
                                                    >GET</button>
                                                </>
                                        }

                                    </div>
                                </form>
                                <div className="col-lg-12">

                                    < h5 className="card-title">Fetched Item</h5>


                                    <form>
                                        {
                                            editstatus == true ?
                                                <>
                                                    <div className="col-12 mb-4">
                                                        <label className="form-label">Name</label>

                                                        <input type="text" className="form-control" required value={data.name}
                                                            onChange={newdata =>
                                                                setData({ ...data, name: newdata.target.value })
                                                            }

                                                        />

                                                    </div>
                                                    <div className="col-12 mb-4">
                                                        <label className="form-label">Conference</label>

                                                        <select className="form-select" aria-label="Default select example" id="conference"
                                                            onChange={newdata =>
                                                                setData({ ...data, conference: newdata.target.value })}>
                                                            <option value={data.conference}>
                                                                {data.conference}
                                                            </option>

                                                        </select>
                                                    </div>
                                                    <div className="col-12 mb-4">
                                                        <label className="form-label">Association</label>

                                                        <select className="form-select" aria-label="Default select example" id="association"
                                                            onChange={newdata =>
                                                                setData({ ...data, association: newdata.target.value })}>
                                                            <option value={data.association}

                                                            >{data.association}</option>

                                                        </select>

                                                    </div>
                                                    <div className="col-12 mb-4">
                                                        <label className="form-label">Church</label>

                                                        <select className="form-select" aria-label="Default select example" id="church"
                                                            onChange={newdata =>
                                                                setData({ ...data, church: newdata.target.value })
                                                            }>
                                                            <option value={data.church}>{data.church}</option>

                                                        </select>

                                                    </div>


                                                    <div className="col-12 mb-4">
                                                        <label className="form-label">Payment_id</label>
                                                        <input type="text" className="form-control" required value={data.payment_id}
                                                            onChange={newdata =>
                                                                setData({ ...data, payment_id: newdata.target.value })
                                                            } />
                                                    </div>

                                                </> :

                                                <>
                                                    <div className="text-muted">
                                                        <p>You have no current fetched item</p>
                                                    </div>
                                                    {/* *other section loads when there is no current edit


                                                    <div className="col-12 mb-4">
                                                        <label className="form-label">Name</label>

                                                        <input type="text" className="form-control" required
                                                            onChange={newdata =>
                                                                setData({ ...data, name: newdata.target.value })
                                                            } />

                                                    </div>
                                                    <div className="col-12 mb-4">
                                                        <label className="form-label">Conference</label>

                                                        <select className="form-select" aria-label="Default select example" id="conference">
                                                            <option value="" onChange={newdata =>
                                                                setData({ ...data, conference: newdata.target.value })
                                                            } >Select Conference</option>

                                                        </select>
                                                    </div>
                                                    <div className="col-12 mb-4">
                                                        <label className="form-label">Association</label>

                                                        <select className="form-select" aria-label="Default select example" id="association">
                                                            <option value="" onChange={newdata =>
                                                                setData({ ...data, association: newdata.target.value })
                                                            }>Select Association</option>

                                                        </select>

                                                    </div>
                                                    <div className="col-12 mb-4">
                                                        <label className="form-label">Church</label>

                                                        <select className="form-select" aria-label="Default select example" id="church">
                                                            <option value=""
                                                                onChange={newdata =>
                                                                    setData({ ...data, church: newdata.target.value })
                                                                }>Select Church</option>

                                                        </select>

                                                    </div>


                                                    <div className="col-12 mb-4">
                                                        <label className="form-label">Payment_id</label>
                                                        <input type="text" className="form-control" required
                                                            onChange={newdata =>
                                                                setData({ ...data, payment_id: newdata.target.value })
                                                            } />
                                                    </div> */}
                                                </>
                                        }

                                        <div className="text-center">
                                            {editstatus == true && loading == true ?
                                                <>
                                                    <div className="light mx-3 text-muted">
                                                        <div className="spinner-grow " role="status">
                                                        </div>
                                                    </div>
                                                </>

                                                : editstatus == true && loading == false ?
                                                    <button type="submit" className="btn btn-primary mx-3"
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            handleUpdate(api, curedit, editItem, data)
                                                        }}
                                                    >Update</button>
                                                    :
                                                    <button type="submit" className="btn btn-primary mx-3"
                                                        onClick={e => {
                                                            e.preventDefault()

                                                        }}>Update</button>
                                            }
                                            <button type="reset" className="btn btn-secondary"
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    if (editstatus == true) {
                                                        setData({
                                                            name: "",
                                                            conference: "",
                                                            association: "",
                                                            church: "",
                                                            payment_id: ""

                                                        })
                                                        setCuredit([])
                                                    }
                                                }}

                                            >Reset</button>
                                        </div>
                                        {
                                            resMsg.status == false ?
                                                <>
                                                    <div className="text-danger fw-bold text-center mt-3">
                                                        <p>{resMsg.message}</p>
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <div className="text-success fw-bold text-center mt-3">
                                                        <p>{resMsg.message}</p>
                                                    </div>
                                                </>


                                        }
                                    </form>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default EditSection