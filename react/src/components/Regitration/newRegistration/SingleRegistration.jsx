import React, { useContext, useEffect, useState } from "react";
import { OptionData } from "./OptionsSet.jsx";
import { postItem } from "../../api/api.js";
import { LoadOption } from "./OptionsSet.jsx";

const SingleRegistration = () => {
   
    const [data, setData] = useState({
        name: "",
        conference: "",
        association: "",
        church: "",
        payment_id: "",
        foreigner: false
    })

    const [loading, setLoading] = useState(false)


    useEffect(() => {
        LoadOption("conference", "association", "church")
    });

    /**
     * error handler
     * status true => success , status false => error
       */ 
    const[alert,setAlert] =useState(false)
    const [resMsg, setResMsg] = useState(
        {
            status: true,
            message: "",
        })

    //api section 
    const api = "newregistration";

    const handleNewReg = (api, postItem, data) => {
        setLoading(true)

        var newPostItem = postItem(api, data);
        newPostItem.then(response => {
            setLoading(false);
            var res = response.data
            setAlert(true)
            setResMsg(
                {
                    status: res.status,
                    message: res.message,
                }
            )
            resMsg == true ? setData({
                name: "",
                conference: "",
                association: "",
                church: "",
                payment_id: "",
                foreigner: false
            }) : "";


        })
        newPostItem.catch((error) => {
            if (data = error.response.data) {
                setLoading(false)
                let message = data.message.split(".", 2);
                setAlert(true)
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




    return (
        <>

            <div className="col-lg-6">

                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title fw-bold">Single Registration</h3>


                        <form>
                            <div className="col-12 mb-4">
                                <label className="form-label">Name</label>

                                <input type="text" className="form-control" required
                                    onChange={e => setData({ ...data, name: e.target.value }

                                    )} />

                            </div>
                            <div className="col-12 mb-4">
                                <label className="form-label">Conference</label>

                                <select className="form-select" aria-label="Default select example" id="conference" onChange={e => setData({ ...data, conference: e.target.value })} >
                                    <option value="">Select Conference</option>

                                </select>
                            </div>
                            <div className="col-12 mb-4">
                                <label className="form-label">Association</label>

                                <select className="form-select" aria-label="Default select example" id="association" onChange={e => setData({ ...data, association: e.target.value })}>
                                    <option value="" >Select Association</option>

                                </select>

                            </div>
                            <div className="col-12 mb-4">
                                <label className="form-label">Church</label>

                                <select className="form-select" aria-label="Default select example" id="church" onChange={e => setData({ ...data, church: e.target.value })}>
                                    <option value="" >Select Church</option>

                                </select>

                            </div>


                            <div className="col-12 mb-4">
                                <label className="form-label">Payment_id</label>
                                <input type="text" className="form-control" required onChange={e => setData({ ...data, payment_id: e.target.value })} />
                            </div>
                            <div className="text-center">
                                {
                                    loading == true ?
                                        <div className="light mx-3 text-muted text-center">
                                            <div className="spinner-grow " role="status">
                                            </div>
                                        </div>

                                        :

                                        <>
                                            <button type="submit" className="btn btn-primary mx-3"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    handleNewReg(api, postItem, data);

                                                }}
                                            >Submit</button>
                                            <button type="reset" className="btn btn-secondary">Reset</button>

                                        </>
                                }
                            </div>
                            {
                                resMsg.status == false && alert == true ?
                                    <>
                                        <div class="alert alert-danger mt-3 text-center" role="alert">
                                            {resMsg.message}
                                        </div>

                                    </>
                                    : resMsg.status == true && alert == true ?
                                        <>
                                            <div class="alert alert-success mt-3 text-center " role="alert">
                                                {resMsg.message}
                                            </div>
                                        </>
                                        :
                                        ""

                            }
                        </form>
                    </div>
                </div>

            </div>

        </>
    );

}
export default SingleRegistration 