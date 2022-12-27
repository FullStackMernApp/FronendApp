import { useHistory } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import './home.css'
import NavBar from "./nav"
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap"  
const Home = () => {
  const history = useHistory()
  const [produits,setProduits] = useState([])
  //const [color,setColor] = useState("")
//const [idProd,setIdProd] = useState("")
  useEffect(()=>{
  const getData = async()=>{
    let Data = await axios.get("http://127.0.0.1:9000/api/produit/")
    //console.log(Data.data.produits)
    setProduits(Data.data.produits)
   }
  getData();
  },[])

  const addToWishList = async (idProd)=>{

    console.log("id:",idProd)
    let data = await axios.post("https://productapp.onrender.com/api/wishList/create",{produit:idProd},{
      headers: {
          "Content-Type": "application/json"
      }
  })
  if(data){
      alert("Aded to wish List")
  }

  }
 
    return ( 
    <div className="home">
      <NavBar />
      <div className="span">
      <p className="user">Home {localStorage.getItem("email")}</p></div>
      <Row>
       {produits && produits.map((item,index)=>(
      <Col >
  <Card style={{width: '25rem',margin:"10px 0",marginLeft:"40px"}}>
    <img src={`https://picsum.photos/300/200`} alt="" />
      <CardBody key={index}>
        <CardTitle>{item.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">{item.amount}</CardSubtitle>
        <CardText>{item.description}</CardText>
    
        <p>{item.categorie.name}</p>
        <Button onClick={()=>addToWishList(item._id)}>💗</Button>
        
        </CardBody>
        </Card>
        </Col>
       ))}
          </Row>
    </div>
      
     );
}
 
export default Home;