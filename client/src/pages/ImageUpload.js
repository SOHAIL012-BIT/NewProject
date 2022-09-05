import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  FormControl,
  InputLabel,
  Input,
  FormControlLabel,
} from '@mui/material';
// components
import Dropzone from "dropzone";
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import Iconify from '../components/Iconify';
import SearchNotFound from '../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';
// File Upload

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------


export default function ImageUpload() {

const[file,setFile]= useState();
const[fileName,SetFileName]= useState("");
const [fileDetails,setfileDetails]=useState({
  fileName:"",
  fileSize:0,
  fileType:"",
  lastModifiedDate:"",
});

const [bgColour, setBgColour] = useState("");

 const onFileChange = event => {
    
  // Update the state
  // this.setState({ selectedFile: event.target.files[0] });
  setFile(event.target.files[0])

};

// On file upload (click the upload button)
const onFileUpload = () => {

  // Create an object of formData
  const formData = new FormData();

  // Update the formData object
  formData.append(
    "myFile",
    file
  );

  setfileDetails({
    fileName:file.name,
    fileSize:file.size,
    fileType:file.type,
    lastModifiedDate:file.lastModifiedDate,
  })

  // Details of the uploaded file
  console.log("File is",file);
  // console.log("FIle Details in function",fileDetails)

  // Request made to the backend api
  // Send formData object
 // axios.post("api/uploadfile", formData);
};
console.log("FIle Details ",fileDetails)


// useEffect=({

// })



const uploadZone={
  alignItems:"center",
  textAlign:"center"
}

const buttonStyle={
  marginTop: "20px",
  marginBottom: "20px",
  
}

const btnWrapper={
  position: "relative",
  overflow: "hidden",
  display: "inline-block",
 
}
const btnIcon={
  border: "2px dotted gray",
  color: "gray",
  backgroundColor:"white",
  padding: "8px 20px",
  borderRadius: "20px",
  cursor:"pointer",
  fontSize:"50pt",
  fontWeight:"bold",
  width:"200px"
}
const fileUploadStyle={
  fontSize: "100px",
  position: "absolute",
  left: "0",
  top: "0",
  opacity: "0"
}

  return (
    <Page title="ImageUpload">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Image Upload
          </Typography>
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:image-fill" />}>
            View Images
          </Button>
        </Stack>

<Card style={uploadZone}>
     <Typography variant="h3" gutterBottom style={{marginTop:"50px"}}>
       Drop Your Image Here.
     </Typography>
     {/* <FormControl>

  <Input id="image"  type="file"  onChange={onFileChange}/>
  
 
</FormControl> */}

<div className="upload-btn-wrapper" style={btnWrapper}
onMouseEnter={() => setBgColour("#b3b3b3")}
onMouseLeave={() => setBgColour(" ")}
>
  <button className="btn" style={btnIcon}><Iconify icon="eva:upload-fill" /></button>
  <input type="file" name="myfile" accept="image/*" style={fileUploadStyle} onChange={onFileChange}/>
</div>

      <br/>
                {/* <input type="file"  onChange={onFileChange} id="imagebtn" /> */}
                
      <Button variant="contained" onClick={onFileUpload}  startIcon={<Iconify icon="eva:upload-fill" />} style={buttonStyle}>
            Upload Image
          </Button>
     
</Card>


   

      </Container>
    </Page>
  );
}

