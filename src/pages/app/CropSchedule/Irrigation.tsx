import Layout from "./Layout"
import item from '../../assets/img/advisory/itemPF.svg'
import product from '../../assets/img/advisory/product.svg'
import { NavLink } from "react-router-dom"

const Irrigation = () => {
    
    const products =[
        {
            image: product,
            name: 'Khodal Iron Earth',
            price: '₹450',    
        },
        {
            image: product,
            name: 'Khodal Iron Earth',
            price: '₹450',    
        }
    ]
  return (
    <Layout showUI goBack pageTitle="Irrigation">
        <div className="layout" style={{padding: "15px", border:'1px solid rgb(220,220,220)',borderRadius:'10px'}}>
            <p className="textDark " style={{fontSize:'50px',paddingTop:'10px'}}>22</p>
            <div style={{width:'70%'}} className="ml20">
                <p className="textMD">Wed</p>
                <p className="textMD">Mar 2002</p>
            </div>
            <h3 style={{fontSize:'18px',color:'#C89963',paddingTop:'10px'}}>Today</h3>
        </div>
        <h3 className="textDark textMD m20">Enter the details</h3>
        <p className="textDark ">The irrigation is to be given after Field Capacity of the Soil.</p>
        <h3 className="textDark textMD m20">Images</h3>
        <div className="layout m20">
            <img src={item} alt="item" style={{width:'30%'}}/>
            <img src={item} alt="item" style={{width:'30%', marginLeft:'10px'}}/>
            <img src={item} alt="item" style={{width:'30%', marginLeft:'10px'}}/>
        </div>
        <div className="layout contentBetween m20">
            <p className="textMD">View Related Products</p>
            <NavLink to={"/#"} className="ViewLink ">
                <h4>View All</h4>
            </NavLink>
        </div>
        <div className="layout flexRow " style={{overflowX: 'auto', width: '100%'}}>
            {products.map((item,index) => (
                <div style={{minWidth:'200px', marginTop:'10px', marginLeft: `${index === 0 ? '0' : '10px'}`}}
                 key={index} >
                    <img src={item.image} alt="item" style={{width:'100%'}}/>
                    <div className="layout contentBetween">
                    <p className="textSM textDark">{item.name}</p>
                    <p className="textMD textDark">{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
        <NavLink
        to={"#!"}
        className={"btn primary block m20"}
      >
        Mark As Complete
      </NavLink>
    </Layout>
  )
}

export default Irrigation
