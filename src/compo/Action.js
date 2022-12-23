import { useState,useEffect } from "react";
import { useLocation, useNavigate,useParams} from "react-router-dom";
import { toast } from 'react-toastify';


import { Container, Input,Button } from "reactstrap";
let intial={
    name:'',
    avatar:'',
    pricing:'',
    discription:''
}
export default function Action()
{
    const [form,setform]=useState(intial)
    const nav=useNavigate()
    const handlechange=(e)=>{
        setform({...form,[e.target.name]:e.target.value})
    }
    
const {id,isView}=useParams()

    const submit=()=>{
        if(id){
        fetch("https://6384cba53fa7acb14f00d8c5.mockapi.io/mouni/"+id,{
            method:'PUT',
           
            headers:{"Content-Type":"application/json"
        },
            body:JSON.stringify(form)
        }).then((data)=>{
            data.json()
        }).then((res)=>{
            setform(intial);
            nav(-1)
              toast.success("product updated sucessfully ")})
    }
    else{
        fetch("https://6384cba53fa7acb14f00d8c5.mockapi.io/mouni",{
            method:'POST',
           
            headers:{"Content-Type":"application/json"
        },
            body:JSON.stringify(form)
        }).then((data)=>{
            data.json()
        }).then((res)=>{
            setform(intial);
            nav(-1)
              toast.success("product added sucessfully ")})
  

    }
}
    useEffect(()=>{
if(id)
{
    fetch("https://6384cba53fa7acb14f00d8c5.mockapi.io/mouni/"+id)
    .then((data)=>data.json()).then((res)=>setform(res))

}
    },[id])
    
    
    return(
        <Container>
          
<form>

    <Input type="text" name='name' value={form.name} onChange={handlechange} disabled={isView==='true'? true:false} className='mb-3' placeholder="'Enter name"/>
    <Input type="text" name='avatar' value={form.avatar} onChange={handlechange} className='mb-3' disabled={isView==='true'? true:false} placeholder="Enter image"/>
    <Input type="number" name='pricing' value={form.pricing} onChange={handlechange} className='mb-3' disabled={isView==='true'? true:false} placeholder="'Enter pricing"/>
    <Input type="text" name='discription' value={form.discription} onChange={handlechange} className='mb-3' disabled={isView==='true'? true:false} placeholder="'Enter discription"/>

<Button color='success' onClick={submit}>SUBMIT</Button>
<Button color='danger' onClick={()=>nav(-1)}>CANCLE</Button>

</form>
        </Container>
    )
}