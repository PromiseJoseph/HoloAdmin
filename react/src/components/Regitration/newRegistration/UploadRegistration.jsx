import React, { useState } from "react";
import * as XLSX from "xlsx"
import { uploadFile } from "../../api/api";
const UploadRegistration = () => {
    const { read, utils } = XLSX;

    //file Array
    const [fileU, setFileU] = useState([])
    //file name
    const [fName, setFName] = useState(null)
    //loading
    const [loading, setLoading] = useState(false)
    /**
     * error handler
     * status true => success , status false => error
     */
    const [alert, setAlert] = useState(false)
    const [resMsg, setResMsg] = useState(
        {
            status: true,
            message: "",
        })


    //file handler
    const handleFile = async (e) => {
        const accept = "xlsx"
        var file = e.target.files[0]

        var fileName = file.name
        var fileExt = fileName.split(".", 2)
        fileExt = fileExt[1]

        if (fileExt == accept && fileName != "") {
            var fileData = await file.arrayBuffer(file)
            var excelfile = read(fileData)
            var excelsheet = excelfile.Sheets[excelfile.SheetNames[0]]
            var exceldata = utils.sheet_to_json(excelsheet);
            setFileU(exceldata);
            setFName(fileName);
            setAlert(false)
            setResMsg({
                status: false,
                message: ""
            })

        }
        else {
            setAlert(true)
            setResMsg({
                status: false,
                message: "file not supported "
            })
        }
    }

    //upload handler
    const handleUpload = (file, name) => {
        if (name != null) {
            setLoading(true)
            var newUpload = uploadFile(file, name)
            newUpload.then(response => {
                console.log("response")
                setLoading(false)
                var res = response.data
                if (res.status == true) {
                    setAlert(true)
                    setResMsg({
                        status: true,
                        message: res.message
                    })
                }
                else {
                    setAlert(true)
                    setResMsg({
                        status: false,
                        message: res.message
                    })
                }
            })
            newUpload.catch(error=>{
                var res =error.response.data
                setLoading(false)
                setAlert(true)
                setResMsg({
                    status: false,
                    message: res.message
                })
               
            })

        }
        else {
            setAlert(true)
            setResMsg({
                status: false,
                message: "please select a file"
            });
        }
    }

    return (
        <>
            <div className="col-lg-6">

                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title fw-bold">Upload Registration</h3>
                        <form>
                            <div className="row mb-3">
                                <label className="col-sm-2 col-form-label">File Upload</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="file" id="formFile"
                                        onChange={e => {
                                            handleFile(e)
                                        }}
                                    />
                                </div>
                            </div>
                            { loading ?
                                <>
                                    <div className="light mx-3 text-muted  text-center">
                                        <div className="spinner-grow " role="status">
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary mx-3"
                                            onClick={e => {
                                                e.preventDefault()
                                                handleUpload(fileU, fName)
                                            }
                                            }
                                        >Submit</button>
                                        <button type="reset" className="btn btn-secondary">Reset</button>
                                    </div>
                                </>
                            }
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
export default UploadRegistration 
