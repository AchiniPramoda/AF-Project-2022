import React from "react";
import axios from 'axios';

import Navbar from './nav-bar';
import './../../component/css/Page.css';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import ListItemIcon from '@mui/material/ListItemIcon';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ListItem from '@mui/material/ListItem';

export default class AdminSchemaView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            Assignment:[],
            Schema:[],
            schemaName:"",
            department:"",
            schema:null,
            fileName:"",
            viewSub: false,
            edit: false
        }
    }

    componentDidMount  () {

        axios.get("http://localhost:8088/marking/view")
        .then((res)=> {this.setState({
            Schema : res.data
        }); console.log(res.data)}  )
        .catch((err) => console.error(err));
    }

    viewSubOpen = () => {    
        this.setState({
            viewSub: true
        })
        
    };
    
    viewSubClose = () => {
        this.setState({
            viewSub: false
        })
    };

    onViewSubmission = (id) => {
        this.viewSubOpen();
    }

    signModalOpen = () => {    
        this.setState({
            edit: true
        })
        
    };
    
    signModalClose = () => {
        this.setState({
            edit: false
        })
    };

    onEditClick = () => {
        this.signModalOpen();
    }

    render() {
        return (
            <>
                <Navbar/>
                
                <div className="AllView">
                    <h1 style={{color: "white"}}> View Schema </h1>

                {this.state.Schema.map((item) => (
                    <Accordion sx={{
                            marginTop:"20px",
                            backgroundColor: "black",
                            border: "2px solid white",
                            radius: 10,
                            }}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography sx={{color:"white", fontSize:"25px", fontWeight:"bold"}}> {item.schemaName} </Typography>
                            </AccordionSummary>
                                <AccordionDetails>
                            <Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={2} sx={{color:"white", width:"200px"}}>
                                    Department Name : {item.department}
                                </Grid>
                                {/* <Grid item  sx={{color:"white", width:"200px"}}>
                                    End Date: {item.schemaName}
                                </Grid>
                                <Grid item  sx={{color:"white" , width:"200px"}}>
                                    End Time: {item.schemaName}
                                </Grid > */}
                                <Grid>
                                    <ListItemButton
                                        component="a" 
                                        href={`${item.schema}`}
                                        sx={{ 
                                            marginTop:"10px",
                                            border:"2px solid white",
                                            width:"250px",
                                            backgroundColor: "#616161",
                                            marginLeft:"100px"
                                        }} >
                                        <ListItemIcon>
                                            <DownloadOutlinedIcon 
                                                fontSize="large"
                                                color="primary" />
                                        </ListItemIcon>
                                        <ListItemText primary="Schema Template" sx={{color:"white" , width:"200px"}} />
                                    </ListItemButton>  
                                </Grid>
                                                                     
                            </Grid>
                            </Typography>
                            <Stack 
                                direction="row" 
                                spacing={2}
                                sx={{ 
                                    marginTop:"10px"
                                }} >
                                <Button 
                                    variant="contained" 
                                    startIcon={<ModeEditOutlinedIcon />}
                                    color="warning"
                                    onClick={() => this.onEditClick()}
                                    sx={{ 
                                        marginRight:"50px",
                                        border:"2px solid white"
                                    }} >
                                    Edit
                                </Button>
                                <Button 
                                    variant="contained" 
                                    endIcon={<DeleteIcon />}
                                   // onClick={() => this.onDelete(item._id)}                                    
                                    color="error"
                                    sx={{ 
                                        marginRight:"100px",
                                        border:"2px solid white"
                                    }}  >
                                    Remove
                                </Button>
                                <Button 
                                    variant="contained" 
                                    startIcon={<AssignmentRoundedIcon />}
                                    color="primary"
                                    onClick={() => this.onViewSubmission(item._id)}
                                    sx={{ 
                                        marginRight:"100px",
                                        border:"2px solid white"
                                    }} >
                                    View Results
                                </Button>
                            </Stack>
                            </AccordionDetails>
                        </Accordion>
                 ))}

                        <Modal 
                            open={this.state.viewSub}
                            onClose={this.viewSubClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description">

                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 900,
                                bgcolor: 'background.paper',
                                border: '5px solid black',
                                boxShadow: 24,
                                backgroundColor:"lightgray",
                                p: 4
                            }}>
                                <TableContainer component={Paper}>
                                    <Table size="small" sx={{ minWidth: 700, border: '2px solid black'}} aria-label="customized table">
                                        <TableHead>
                                        <TableRow sx={{backgroundColor:"gray", height:"10px"}}>
                                            <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold"}}>Assignment Name </TableCell>
                                            <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold"}}>Lecture Name</TableCell>
                                            {/* <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold"}}>Group ID</TableCell> */}
                                            <TableCell align="center" sx={{fontSize:"20px", fontWeight:"bold"}}> Download Rusult </TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {/* {this.state.researches.map((item) => (
                                            <TableRow hover={true} sx={{height:"10px"}}>
                                            <TableCell align="center" sx={{fontSize:"20px"}}> {item.asgName} </TableCell>
                                            <TableCell align="center" sx={{fontSize:"20px"}}> {item.stdID} </TableCell>
                                            <TableCell align="center" sx={{fontSize:"20px"}}> {item.grpID} </TableCell>
                                            <TableCell align="center">
                                                <ListItemButton
                                                    onClick={() => this.onDownload(item._id)}
                                                    sx={{ 
                                                        marginTop:"10px"
                                                    }} >
                                                    <ListItemIcon>
                                                        <DownloadOutlinedIcon 
                                                            fontSize="large"
                                                            color="primary" />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Download" />
                                                </ListItemButton>  
                                            </TableCell>
                                            </TableRow>
                                        ))} */}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                
                            </Box>
                        </Modal>

                        <Modal
                            open={this.state.edit}
                            onClose={this.signModalClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            sx={{border:"2px solid gray"}}
                        >
                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            border: '2px solid white',
                            boxShadow: 24,
                            p: 4,
                            backgroundColor: "black"
                        }}>
                        <Typography 
                            id="modal-modal-title" 
                            variant="h6" 
                            component="h2"
                            sx={{ 
                                marginLeft:"100px",
                                color:"white",
                                fontSize:"25px",
                                fontWeight:"bold",
                             }}>
                            Edit Assignment
                        </Typography>

                        <FormGroup>
                            <ListItem sx={{backgroundColor:"whitesmoke"}}>
                            <ListItemIcon>
                            <PermIdentityRoundedIcon fontSize="medium" />
                        </ListItemIcon>
                        <TextField 
                            fullWidth
                            sx={{color:"white"}}
                            id="schemaName" 
                            label="Assignment Name" 
                            variant="standard"
                            //onChange={(e) => this.onChange(e)}
                            size="medium" required/>
                            </ListItem>
                        
                    </FormGroup> <br/>

                    <FormGroup >
                    <ListItem sx={{backgroundColor:"whitesmoke"}}>
                        <ListItemIcon >
                            <ApartmentRoundedIcon fontSize="small" />
                        </ListItemIcon>
                        <InputLabel id="demo-simple-select-standard-label"></InputLabel>
                        <Select 
                            fullWidth                           
                            variant="standard"
                            labelId="demo-simple-select-standard-label"
                            id="department"
                           // value={this.state.asgDep}
                            //onChange={(e) => this.onChageSelected(e)}
                            label="Department"
                            >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value="IT">IT</MenuItem>
                            <MenuItem value="SE">SE</MenuItem>
                            <MenuItem value="CS">CS</MenuItem>
                        </Select>
                        </ListItem>
                    </FormGroup> <br/>
                    
                    <FormGroup >
                    <ListItem sx={{backgroundColor:"whitesmoke"}}>
                            <label htmlFor="icon-button-file">
                                <IconButton 
                                    color="primary"
                                    id="schema" 
                                    aria-label="upload picture"
                                    component="span">
                                    <UploadFileRoundedIcon />                                                                  
                                </IconButton>
                                 {/* {this.state.fileName}  */}
                                 <Input 
                                    sx={{
                                        display: 'none',
                                    }}
                                    id="icon-button-file"                                    
                                    //onChange={(e) => this.onFileChange(e)}                                    
                                    type="file" />                                
                            </label>
                            </ListItem>
                    </FormGroup>  <br/>

                    <Button 
                        fullWidth
                        sx={{border:"2px solid white"}} 
                        variant="contained" 
                        size="small"
                        //onClick={(e) => this.onSubmit(e)}
                        color="success" >
                        Submit
                    </Button>  

                    </Box>                 
                    
                    </Modal>

                     <Snackbar open={this.state.open} autoHideDuration={3000} onClose={this.handleClose}>
                        <Alert onClose={this.handleClose} severity={this.state.type} sx={{ width: '100%' }}>
                            {this.state.message}
                        </Alert>
                    </Snackbar> 

                </div>
            </>
        )
    }
}