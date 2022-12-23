import { useEffect, useState } from "react"
import { Container,Table,Button } from "reactstrap"
import {AiFillAlert,AiFillEye} from "react-icons/ai";
import { BiColorFill } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Allproduct()
{
    const [product,setproduct]=useState([])
    const getpro=()=>{
        fetch("https://6384cba53fa7acb14f00d8c5.mockapi.io/mouni")
        .then((data)=>data.json()).then((res)=>setproduct(res))

    }
    const deleted=(id)=>{
        fetch("https://6384cba53fa7acb14f00d8c5.mockapi.io/mouni/"+id,{
            method:"DELETE",
            headers:{"Content-Type":'application/json'}

        }).then((data)=>data.json).then((res)=>{
            getpro();
            toast.success("Deleted Successfully")})

    }
    const navigate=useNavigate()
    useEffect(()=>{
       getpro()
    },[])
    return(
        <Container>
            <Button color='success' onClick={()=>navigate('/action')}>CREATE</Button>
            <Table
>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        First Name
      </th>
      <th>
        Description
      </th>
      <th>
        price
      </th>
      <th>
        price
      </th>
      <th>
        Action
      </th>
    </tr>
  </thead>
  <tbody>
 {product.map((data,index)=>{
    return(
        <tr key={data.id}>
            <td>{index+1}</td>
            <td><img src={data.avatar} height="50" alt=""/></td>
            <td>{data.name}</td>
            <td>{data.pricing}</td>
            <td>{data.discription}</td>
            <td>
            <Button color='primary' onClick={()=>navigate(`/action/${data.id}/true`)}>
                <AiFillEye/>
                </Button>
                <Button color='warning' onClick={()=>navigate(`/action/${data.id}/false`)}>
                <AiFillAlert/>
                </Button>

                <Button color='danger' onClick={()=>deleted(data.id)}>
                <BiColorFill/>
                </Button>
            </td>
        </tr>
    )
 })}
  </tbody>
</Table>
        </Container>
    )
}