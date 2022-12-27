import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import './AddProduit.css'
const AddProduit = () => {
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [amount,setAmount] = useState("")
    const [id,setId] = useState("")
    const [categorie,setCategorie] = useState([])
    const [catId,setCatId] = useState("")
   const addProdToDB = async (e) =>{
     e.preventDefault()
     if(catId!="Choose Categorie"&&catId!=""){
    let data = await axios.post("https://productapp.onrender.com/api/produit/create",{name,description,amount,categorie:catId},{
        headers: {
            "Content-Type": "application/json"
        }
    })
    if(data)
        alert("product created succee")
}else{
    alert("Please Select Categorie")
}
   }
   useEffect(()=>{
    const getCategorieFromDB = async () => {
        let data = await axios.get("https://productapp.onrender.com/api/categorie");
        setCategorie(data.data.categories)
    }
    getCategorieFromDB() 
   })
   const handelSelect = (e) =>{
    setCatId(e.target.value)
   }
    return (
     
        <div className="form" >
           <div className="box">
           <h4>Add Product</h4>
           <p> <input type="text" placeholder="Product Name " onChange={(e)=>setName(e.target.value)}/></p>
            <p><input type="text" placeholder="Product Description"  onChange={(e)=>setDescription(e.target.value)}/></p>
            <p><input type="text" placeholder="Product amount" onChange={(e)=>setAmount(e.target.value)}/></p>
            <p><select onChange={handelSelect}>
                <option>Choose Categorie</option>
                {categorie && categorie.map((item,index)=>(
                    <option key={index} value={item._id} >{item.name}</option>
                ))}
                </select></p>
            <Button  onClick={addProdToDB} color="success">addProduit</Button>&nbsp;&nbsp;<Link style={{color:"white" , textDecoration:"none"}} to="/home"><Button  color="danger">Back</Button></Link>
           </div>

        </div>
    );
}
 
export default AddProduit;