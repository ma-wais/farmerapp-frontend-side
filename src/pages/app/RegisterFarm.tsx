import { Box } from '@mui/material'
import Layout from './Layout'
import Profile from '../../assets/img/advisory/profile.svg'
import { useState } from 'react';
import YChill from '../../assets/img/advisory/Frame.png'
import Capsicum from '../../assets/img/advisory/capsicum (1) 3.png'
import Carrot from '../../assets/img/advisory/carrot.png'
import Cocumber from '../../assets/img/advisory/cocumber.png'
import eggPlant from '../../assets/img/advisory/eggplant 6.png'
import Mango from '../../assets/img/advisory/mango 3.png'
import Onion from '../../assets/img/advisory/onoin.png'
import Radish from '../../assets/img/advisory/radish 3.png'
import Tomato from '../../assets/img/advisory/tomato 4.png'
import { NavLink } from 'react-router-dom';

const RegisterFarm: React.FC = () => {
    const [selectedCrop, setSelectedCrop] = useState<string | null>(null);

  const crops = [
    { name: 'Tomato', image: Tomato },
    { name: 'Brinjal', image: eggPlant },
    { name: 'Capsicum', image: YChill },
    { name: 'Capsicum2', image: Capsicum },
    { name: 'Cocumber', image: Cocumber },
    { name: 'Mango', image: Mango },
    { name: 'Carrot', image: Carrot },
    { name: 'Mushrooms', image: Onion },
    { name: 'Radish', image: Radish },
  ];
  const toggleCropSelection = (cropName: string) => {
    setSelectedCrop(selectedCrop === cropName ? null : cropName);
  };

  return (
    <Layout pageTitle='Register Farm' showUI goBack>
      <Box >
        <p className='heading'>Choose a Plot Icon</p>
        <div className='m20'>
        <button className='btn primary ml20' style={{border:'none'}} >Take a Photo</button>

        <input placeholder='Upload Screenshot' id="imageinput" type="file" accept="image/*" style={{display:'none', visibility:'hidden'}}/>
        <label htmlFor="imageinput" className='btn textSM primary textCenter' style={{cursor:'pointer',margin:'10px 0 0 20px'}} >From Gallery</label>
        </div>
      </Box>
      <Box className='p40' >
        <p className='heading' >Add your First Plot</p>
        <form action="">
          <ul className='list radioList bordered p20'>
             <li>
             <img src={Profile} alt="logo" />
             <input className='input' placeholder='Plot Name' type="text" />
             </li>
             <li>
             <img src={Profile} alt="logo" />
             <input className='input' placeholder='Plot Geolocation' type="text" />
             </li>
             <li>
             <img src={Profile} alt="logo" />
             <input className='input' placeholder='Plot Pin Code' type="text" />
             </li>
          </ul>
        </form>
      </Box>
      <Box className='p40'>
        <p className='heading' >Main Crop</p>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around' }}>
          {crops.map((crop,index) => (
            <div style={{width:'30%',borderRadius:'10px', cursor: 'pointer', height:'120px',  marginTop:'10px',
               border: selectedCrop.includes(crop.name) ? '3px solid green' : '1px solid rgb(220,220,220  )'}}>
              <img
                onClick={() => toggleCropSelection(crop.name)}
                src={crop.image} alt={crop.name}
                style={{
                  width: '60px', height: '60px', margin: 'auto', display:'block', marginTop:'15px'
                }}
             />
              <p style={{textAlign:'center',marginTop:'10px'}} >{crops[index].name}</p>
            </div>
          ))}
        </div>
      </Box>

      <p className='heading p40' >Inter Crop</p>
      <p className='heading p40' >Is your main crop same as your Inter Crop</p>
      <Box className='tabs' sx={{ marginTop: '40px' }}>
          <button 
          style={{backgroundColor:'#fff',width:'48%', borderRadius:'10px',border:'none',height:'40px',marginLeft:'5px' }}  
          onClick={()=>{}}
          >
            Yes
          </button>
          <button style={{width:'48%', borderRadius:'10px',border:'none',height:'40px',marginLeft:'5px' }}>
            No
          </button>
      </Box>
      <NavLink
        to={"/app/advisory/farms"}
        className={"btn primary block"}
        style={{ marginBottom: "100px" }}
      >
        Proceed
      </NavLink>
    </Layout>
  )
}

export default RegisterFarm