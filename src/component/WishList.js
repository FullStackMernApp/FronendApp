import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap"  
const WishList = () => {
    const [wishList,setWishList] = useState([])
    useEffect(()=>{
        const getWishList = async () =>{
            let Data = await axios.get("https://productapp.onrender.com/api/wishList")
            //console.log(Data.data.WishLists[0].produit)
            setWishList(Data.data.WishLists)
        }
        getWishList()
    })
    const deleteWishList = async (id) => {
        let  delWishList =await axios.delete("https://productapp.onrender.com/api/wishList/del/"+id)
        if(delWishList)
        alert("deleted success")
    }
    return ( 
        <div className="wishList">
        <Row>
         {wishList && wishList.map((item,index)=>(
        <Col >
    <Card style={{width: '25rem',margin:"10px 0",marginLeft:"40px"}}>
      <img src="https://picsum.photos/300/200" alt="" />
        <CardBody key={index}>
          <CardTitle>{item.produit.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">{item.produit.amount}</CardSubtitle>
          <CardText>{item.produit.description}</CardText>
          <CardTitle>{item.produit.categorie.name}</CardTitle>
          <Button onClick={()=>deleteWishList(item._id)} > &#10060;</Button>
          </CardBody>
          </Card>
          </Col>
         ))}
            </Row>
      </div>
        
     );
}
 
export default WishList;