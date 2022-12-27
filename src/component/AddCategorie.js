import axios from "axios";
import { useState } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
const AddCategorie = () => {
    const [name , setName] = useState("")
    const addCategorieToDB = async (e) =>{
        e.preventDefault()
       let data = await axios.post("https://productapp.onrender.com/api/categorie/create",{name},{
           headers: {
               "Content-Type": "application/json"
           }
       })
       if(data){
       alert("Categorie added success")
       }
      }
    return ( 
        <div className="form">
       <div className="box">
       <h4>Add Categorie</h4>
           <p> <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Categorie Name"/></p>
            <Button onClick={addCategorieToDB} color="success">AddCategorie</Button>&nbsp;&nbsp;<Link style={{color:"white" , textDecoration:"none"}} to="/home"><Button  color="danger">Back</Button></Link>
       </div>
    </div> 
     );
}
 
export default AddCategorie;