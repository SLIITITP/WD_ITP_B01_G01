import React from 'react'


const inventoryDetail = () => {
    return (
        <div className='mt-5'>
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                <a href="/addProduct"><button className='backBtn'>Add Product</button></a>
                </div>
                <div className="table-responsive">
                    <table class="table" >
                        <thead>
                            <tr className="table-dark" >
                                <th scope="col"  >Name</th>
                                <th scope="col" >Category</th>
                                <th scope="col">Price(LKR)</th>
                                <th scope="col" >Quantity</th>
                                <th scope="col" >Capacity(ml)</th>
                                <th scope="col" >Material</th>
                                <th scope="col" >Percentage(%)</th>
                                <th scope="col" >Country</th>
                                <th scope="col" >URL of the image</th>
                                <th scope="col" >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <th scope="row">Cape Dreams</th>
                                <td>Wine</td>
                                <td>5200</td>
                                <td>10</td>
                                <td>750</td>
                                <td>Cabernet Sauvignon</td>
                                <td>14.5</td>
                                <td>South Africa</td>
                                <td>https://ceylonspirits.lk/wp-content/uploads/2021/03/Cape-Dreams-Cabernet-Sauvignon.jpg</td>
                                <td className="d-flex justify-content-between" >
                                    <button className="btn btn-success" style={{ marginLeft: '3px' }} ><i class="fas fa-eye" ></i></button>
                                    <button className="btn btn-primary" style={{ marginLeft: '3px' }}><i class="fa-solid fa-pen"></i></button>
                                    <button className="btn btn-danger" style={{ marginLeft: '3px' }}><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr >
                                <th scope="row">Cape Dreams</th>
                                <td>Wine</td>
                                <td>5200</td>
                                <td>10</td>
                                <td>750</td>
                                <td>Cabernet Sauvignon</td>
                                <td>14.5</td>
                                <td>South Africa</td>
                                <td>https://ceylonspirits.lk/wp-content/uploads/2021/03/Cape-Dreams-Cabernet-Sauvignon.jpg</td>
                                <td className="d-flex justify-content-between" >
                                    <button className="btn btn-success" style={{ marginLeft: '3px' }} ><i class="fas fa-eye" ></i></button>
                                    <button className="btn btn-primary" style={{ marginLeft: '3px' }}><i class="fa-solid fa-pen"></i></button>
                                    <button className="btn btn-danger" style={{ marginLeft: '3px' }}><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr >
                                <th scope="row">Cape Dreams</th>
                                <td>Wine</td>
                                <td>5200</td>
                                <td>10</td>
                                <td>750</td>
                                <td>Cabernet Sauvignon</td>
                                <td>14.5</td>
                                <td>South Africa</td>
                                <td>https://ceylonspirits.lk/wp-content/uploads/2021/03/Cape-Dreams-Cabernet-Sauvignon.jpg</td>
                                <td className="d-flex justify-content-between" >
                                    <button className="btn btn-success" style={{ marginLeft: '3px' }} ><i class="fas fa-eye" ></i></button>
                                    <button className="btn btn-primary" style={{ marginLeft: '3px' }}><i class="fa-solid fa-pen"></i></button>
                                    <button className="btn btn-danger" style={{ marginLeft: '3px' }}><i class="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr >
                                <th scope="row">Cape Dreams</th>
                                <td>Wine</td>
                                <td>5200</td>
                                <td>10</td>
                                <td>750</td>
                                <td>Cabernet Sauvignon</td>
                                <td>14.5</td>
                                <td>South Africa</td>
                                <td>https://ceylonspirits.lk/wp-content/uploads/2021/03/Cape-Dreams-Cabernet-Sauvignon.jpg</td>
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

export default inventoryDetail
