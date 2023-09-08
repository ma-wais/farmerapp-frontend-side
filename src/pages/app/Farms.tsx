import React from 'react'
import Layout from './Layout'
import YChill from '../../assets/img/app/profile_bg.png'
import Arrow from '../../assets/img/app/Arrow 2.svg'

const Farms: React.FC = () => {

    const farm =[
        {
            image: YChill,
            name: 'Farm Name',
            location: 'Location',
        }
    ]
  return (
   <Layout showUI pageTitle="Advisory">
    <p className='heading p40' >Registered Plots</p>
    <div style={{display:'flex',}}>
        <div style={{width:'48%',}} >
            {farm.map((item) => {
                return (
                  <div className='farm m20'  style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)'}} >
                      <img src={item.image} 
                          style={{width:'100%', borderRadius:'10px'}}  alt="" />
                      <div  style={{width:'60%',display:'inline-block'}} >
                      <h2 style={{padding:'8px 0 0 10px',color:'black'}}>{item.name}</h2>
                      <h3 style={{padding:'8px 0 10px 10px'}}>{item.location}</h3>
                      </div>
                      <img src={Arrow} style={{marginLeft:'30px',display:'inline-block',width:'35px'}}/>
                  </div>
                )
            })}
        </div>
     <button style={{color:'rgb(100,100,100)',borderRadius:'10px',border:'1px dashed rgb(200,200,200) ',
     height:'210px',margin:'20px',width:'48%',backgroundColor:'#fff', fontSize: '19px',}}  
      >
        Add new farm
      </button>
    </div>
   </Layout>
  )
}

export default Farms
