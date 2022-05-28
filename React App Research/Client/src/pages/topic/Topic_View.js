import React, { useEffect, useState } from 'react';
import "./Topic.css";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import Navbar from '../staff/Supervisors/nav-bar';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ButtonGroup from '@mui/material/ButtonGroup';

function TopicView() {

    const [topic, settopic] = useState([]);
    const [stdID, setstdID] = useState("");
    const [grpID, setgrpID] = useState("");
    const [title, settTitle] = useState("");
    const [email, setemail] = useState("");
    const [status, setstatus] = useState("");

    const gettopic=()=>{
              axios.get("http://localhost:8088/topic/views/pend")
               .then((res)=>{
                // console.log(res.data);
                 settopic(res.data);
               })
               .catch((error)=>{
                 console.log(error);
               })
    }
     
     useEffect(()=>{
        gettopic();
     })


     const onTopicGroupDet = async (id) =>{
       await axios.get(`http://localhost:8088/topic/view/${id}`)
        .then((response) => {
          setstdID(response.data.stdID);
          setgrpID(response.data.groupid);
          settTitle(response.data.title);
          setemail(response.data.email);
        })
        .catch((err) => console.error(err.message))
        
        submit(id);
     }
  

     const rejectTopic = (id) =>  {
      setstatus("Rejected");
      onTopicGroupDet(id);
     }

     const accepttopic = (id) => {
      console.log(id)
      // setstatus("Accepted");
      // onTopicGroupDet(id);
     }

     const submit = async (id) => {

        const active = {
          stdID : stdID,
          grpID : grpID,
          title : title,
          email : email,
          status: status
        }

        console.log(active)

         await axios.post(`http://localhost:8088/topicacc/response/${id}`, active)
         .then((res)=> alert(res.data))
         .catch((err) => console.error(err.message))
     }


    return(
        <div>

        <Navbar/>

        <Box sx={{
                position: 'absolute',
                marginTop: '100px',
                marginLeft: '295px',
                width: 1200,
                bgcolor: 'background.paper',
                border: '5px solid black',
                //boxShadow: 24,
                backgroundColor:"white",
                p: 0.5
            }}>

                <TableContainer component={Paper}>
                  <Table size="small" sx={{ minWidth: 1000, maxWidth: 1200, border: '2px solid black'}} aria-label="customized table">
                      <TableHead>
                      <TableRow sx={{backgroundColor:"gray", height:"10px"}}>
                          <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold"}}>Leader ID</TableCell>
                          <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold"}}>Group ID</TableCell>
                          <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold"}}>Topic</TableCell>
                          <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold"}}>Leader Email</TableCell>
                          <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold"}}>Action</TableCell>
                      </TableRow>
                      </TableHead>
                      <TableBody>
                      {topic.map((view) => (
                          <TableRow hover={true} sx={{height:"10px"}}>
                          <TableCell align="center" sx={{fontSize:"20px"}}> {view.stdID} </TableCell>
                          <TableCell align="center" sx={{fontSize:"20px"}}> {view.grpID} </TableCell>
                          <TableCell align="center" sx={{fontSize:"20px"}}> {view.title} </TableCell>
                          <TableCell align="center" sx={{fontSize:"20px"}}> {view.email} </TableCell>
                          <TableCell align="center" >
                            <ButtonGroup>
                              <ListItemButton
                                  onClick={() => {rejectTopic(topic._id)}}
                                  component="a" 
                                  //href={item.results}
                                  sx={{ 
                                      marginTop:"10px",
                                      width:"100px",
                                      marginRight:"0px"
                                  }} >
                                  <ListItemIcon>
                                    <DeleteIcon color="error"/>
                                     Reject
                                  {/* <Button variant="outlined" onClick={rejectTopic} startIcon={<DeleteIcon />}> Edit </Button> */}
                                  </ListItemIcon>
                                  <ListItemText primary="" />
                              </ListItemButton> 
                              <ListItemButton
                                  onClick={() => {accepttopic(topic._id)}}
                                  component="a" 
                                  //href={item.results}
                                  sx={{ 
                                      marginLeft:"10px",
                                      marginTop:"10px",
                                      width:"100px",
                                      marginRight:"10px",
                                  }} >
                                  <ListItemIcon>                                    
                                    Accept 
                                  <SendIcon color="primary"/>
                                    
                                  {/* <Button variant="contained" onClick={accepttopic} endIcon={<SendIcon />}> Accept </Button> */}
                                  </ListItemIcon>
                              </ListItemButton> 
                              </ButtonGroup> 
                          </TableCell>
                          </TableRow>
                      ))}
                      </TableBody>
                  </Table>
              </TableContainer>
            </Box>

     {/* <div class="tablealign-topic">
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
                     
                 <Button variant="outlined" onClick={rejectTopic} startIcon={<DeleteIcon />}>
                         Reject
                 </Button>
                   <Button variant="contained" onClick={accepttopic} endIcon={<SendIcon />}>
                        Accept
                  </Button>

                </Stack>
                </td>
           </tr>  
           )}

             </table>
          </div>            */}
           
                 

        </div>
    )
}

export default TopicView;