import { useState } from "react";

import { FormControl, FormGroup,InputLabel,TextField , MenuItem,Select,Typography,styled,Button,Input} from "@mui/material";

import {addSupplier} from '../service/api';
import { useNavigate } from "react-router-dom";


const Container = styled(FormGroup)`
width: 50%;
margin: 5% auto 0 auto;
&>div {
    margin-top:20px;
}`

const defaultValue={
    name:'',
    address:'',
    email:'',
    web:'',
    phone:'',
    status:''
}


const AddSupplier = () => {

    const [user,setUser] = useState({defaultValue});

    const navigate = useNavigate();

    const onValueChange = (e) =>{
        setUser({ ...user,[e.target.name]: e.target.value});
        
    }

    const addSupplierDetails =async  () => {
       await addSupplier(user);
       navigate('/');

    }


    return(
        
        <center><br></br>
        <div className="sub-main"><Container>
      
        <Typography variant="h4">Add Supplier</Typography>
        <FormControl>
         <InputLabel><b>Name</b></InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name"/>
          </FormControl>

          <FormControl>
         <InputLabel><b>Address</b></InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="address"/>
          </FormControl>

          <FormControl>
         <InputLabel><b>Email</b></InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="email"/>
          </FormControl>

          <FormControl>
         <InputLabel><b>Website</b></InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="web"/>
          </FormControl>
        
          <FormControl>
         <InputLabel><b>Phone</b></InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="phone"/>
          </FormControl>
        <br/>
        <FormControl>
     <InputLabel><b>Select Status</b></InputLabel> 
        <Select onChange={(e) => onValueChange(e)} name="status">
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
    </Select> 
    </FormControl>
    <br></br>
   <center>
        <FormControl><div className="add-button">
            
            <Button  onClick={() => addSupplierDetails()}>Add Supplier</Button>
     </div>
        </FormControl>  </center> 

      </Container></div>
      </center>
    )
}
export default AddSupplier;