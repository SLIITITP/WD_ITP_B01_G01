import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';





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
                                <th scope="col">id</th>
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
                        
                                
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>aaaa</td>
                                                <td>bbb</td>
                                                <td>ccc</td>
                                                <td>ddd</td>
                                                <td>fff</td>
                                                <td>ggg</td>
                                                <td>hhh</td>
                                                <td>iii</td>
                                                <td>jjj</td>
                                                <td className="d-flex justify-content-between">
                                                    <button className="btn btn-success"><CreateIcon /></button>

                                                    <button className="btn btn-primary"><RemoveRedEyeIcon /></button>
                                                    
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
