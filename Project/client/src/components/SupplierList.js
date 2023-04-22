import React from 'react'


const SupplierList = () => {
    return (
        <div className='mt-5'>
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                <a href="/AddSupplier"><button className='backBtn'>Add Supplier</button></a>
                </div>
                <div className="table-responsive">
                    <table class="table" >
                        <thead>
                            <tr className="table-dark" >
                                <th scope="col"  >Supplier ID</th>
                                <th scope="col" >Supplier Company Name</th>
                                <th scope="col">Supplier Name</th>
                                <th scope="col" >Address</th>
                                <th scope="col" >Email</th>
                                <th scope="col" >Website</th>
                                <th scope="col" >Phone</th>
                                <th scope="col" >Status</th>
                                <th scope="col" >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <th scope="row">1</th>
                                <td>W.M. Mendis & Co. Limited</td>
                                <td>Sunil De Silva</td>
                                <td>309/5 Negombo Rd, Welisara</td>
                                <td>wmmendis@gmail.com</td>
                                <td>www.wmmendis.com</td>
                                <td>0114692300</td>
                                <td>Active</td>
                                <td className="d-flex justify-content-between" >
                                    <button className="btn btn-success" style={{ marginLeft: '3px' }} ><i class="fas fa-eye" ></i></button>
                                    <button className="btn btn-primary" style={{ marginLeft: '3px' }}><i class="fa-solid fa-pen"></i></button>
                                    <button className="btn btn-danger" style={{ marginLeft: '3px' }}><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr >
                                <th scope="row">2</th>
                                <td>Periceyl</td>
                                <td>Saliya Yalapola</td>
                                <td>128 Vipulasena Mawatha,Colombo</td>
                                <td>Periceylvcm@gmail.com</td>
                                <td>www.Periceyl.com</td>
                                <td>0115635707</td>
                                <td>Active</td>
                                
                                <td className="d-flex justify-content-between" >
                                    <button className="btn btn-success" style={{ marginLeft: '3px' }} ><i class="fas fa-eye" ></i></button>
                                    <button className="btn btn-primary" style={{ marginLeft: '3px' }}><i class="fa-solid fa-pen"></i></button>
                                    <button className="btn btn-danger" style={{ marginLeft: '3px' }}><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr >
                                <th scope="row">3</th>
                                <td>Fine Spirits</td>
                                <td>Tharindu Yapa</td>
                                <td>353 Dr.Colvin R.de Silva Mawatha,Colombo </td>
                                <td>fspirits@gmail.com</td>
                                <td>www.fns.com</td>
                                <td>0112303273</td>
                                <td>Inactive</td>
                                
                                <td className="d-flex justify-content-between" >
                                    <button className="btn btn-success" style={{ marginLeft: '3px' }} ><i class="fas fa-eye" ></i></button>
                                    <button className="btn btn-primary" style={{ marginLeft: '3px' }}><i class="fa-solid fa-pen"></i></button>
                                    <button className="btn btn-danger" style={{ marginLeft: '3px' }}><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr >
                                <th scope="row">4</th>
                                <td>Dcsl</td>
                                <td>Ashan Herath</td>
                                <td>W348+P4C,Hanwella</td>
                                <td>dcsl@gmail.com</td>
                                <td> www.dcsl.com</td>
                                <td>01178451880</td>
                                <td>Active</td>
                              
                                <td className="d-flex justify-content-between" >
                                    <button className="btn btn-success" style={{ marginLeft: '3px' }} ><i class="fas fa-eye" ></i></button>
                                    <button className="btn btn-primary" style={{ marginLeft: '3px' }}><i class="fa-solid fa-pen"></i></button>
                                    <button className="btn btn-danger" style={{ marginLeft: '3px' }}><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>




    )
}

export default SupplierList;