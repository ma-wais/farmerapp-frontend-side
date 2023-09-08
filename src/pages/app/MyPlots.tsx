import React from 'react'
import Layout from './Layout'
import YChill from '../../assets/img/app/profile_bg.png'

const MYFarms: React.FC = () => {
    const farm =[
        {
            image: YChill,
            name: 'Farm Name',
            location: 'Location',
        },
        {
            image: YChill,
            name: 'Farm Name',
            location: 'Location',
        }
    ]
  return (
   <Layout showUI pageTitle="Advisory">
    <p className='heading p40' >My Plots</p>
        <div style={{display:'flex',transform:'translateX(-20px)'}} >
            {farm.map((item) => {
                return (
                  <div className='farm m20 ml20'  style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)'}} >
                      <img src={item.image} 
                          style={{width:'100%', borderRadius:'10px'}}  alt="" />
                      <div  style={{width:'90%',display:'inline-block'}} >
                      <h2 style={{padding:'8px 0 0 10px',color:'black'}}>{item.name}</h2>
                      <h3 style={{padding:'8px 0 10px 10px'}}>{item.location}</h3>
                      </div>
                  </div>
                )
            })}
        </div>
   </Layout>
  )
}

export default MYFarms
