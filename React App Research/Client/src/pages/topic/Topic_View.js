import React, { useEffect, useState } from 'react';
import "./Topic.css";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import Navbar from '../admin/nav-bar';


function TopicView() {

    const [topic, settopic] = useState([])

    const gettopic=()=>{
              axios.get("http://localhost:8088/topic/views/pend")
               .then((res)=>{
                 console.log(res.data);
                 settopic(res.data);
               })
               .catch((error)=>{
                 console.log(error);
               })
    }
     
     useEffect(()=>{
        gettopic();
     })

  

     const rejectTopic =() =>{
         submit();
              
     }

     const accepttopic=()=>{
       submit();
     }

     const submit =() =>{
         axios.post("http://localhost:8088/topicacc/response")
     }


    return(
        <div>

<Navbar/>

     <div class="tablealign-topic">
                  <table class="table-topic">

                    <tr>
                       <th>Leader ID</th>
                       <th>Group ID</th>
                       <th>Topic</th>
                       <th>Email</th>
                       <th>Action</th>                                 
                    </tr>
          
              {topic.map((view) => 
              <tr>
               <td>{view.stdID}</td>
               <td>{view.grpID}</td>
               <td>{view.title}</td>
               <td>{view.email}</td>
                  <td>
                    <Stack direction="row" spacing={3}>
                     
                 <Button
                   sx={{color:"coral",
                        border:"2px solid",
                        
                          }}  
                  variant="outlined" onClick={rejectTopic} startIcon={<DeleteIcon 
                 sx={{color:"coral",marginTop:1.7}}/>}>
                         Reject
                 </Button>
                   <Button variant="outlined" onClick={accepttopic} endIcon={<SendIcon 
                   
                 sx={{ marginTop:1.7}}/>}>
                        Accept
                  </Button>

                </Stack>
                </td>
           </tr>  
           )}

             </table>
          </div> 
  
                    
           
                 

        </div>
    )
}

export default TopicView;