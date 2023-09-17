import Layout from './Layout'
import { NavLink } from 'react-router-dom'
import Arrow from "../../assets/img/advisory/Chev Icon.svg"; 
import one from "../../assets/img/advisory/Card.svg"; 
import two from "../../assets/img/advisory/Card (1).svg"; 
import three from "../../assets/img/advisory/Card (2).svg"; 
import four from "../../assets/img/advisory/Card (3).svg"; 

const Payment:React.FC = () => {
    return (
      <Layout pageTitle='Advisory Plan ' showUI goBack>
    <p className='heading p40' >Online Payment</p>
        <div className='layout m20 contentBetween'  
            style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
          <div className='flex '>
          <div>
             <img src={one}
                style={{width:'70px', borderRadius:'10px',margin:'12px 10px 12px 10px'}}  alt="" />
           </div>
            <div style={{width:'50%',display:'inline-block',padding:'35px 0 12px 10px'}} >
            <p className=" textDark" style={{fontSize:'20px',fontWeight:'600'}}>Razorpay</p>
            </div>
          </div>
          <NavLink to={"#!"} style={{ width:'10%',margin:"0% 10px 0 0"}} >
            <img src={Arrow} 
            style={{width:'5%',minWidth:'10px', borderRadius:'10px',margin:'40px 0px 0px 10px'}}  alt="" />
          </NavLink>
        </div>
        <div className='layout m20 contentBetween'  
            style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
          <div className='flex '>
          <div>
             <img src={two}
                style={{width:'70px', borderRadius:'10px',margin:'12px 10px 12px 10px'}}  alt="" />
           </div>
            <div style={{width:'50%',display:'inline-block',padding:'35px 0 12px 10px'}} >
            <p className=" textDark" style={{fontSize:'20px',fontWeight:'600'}}>QR Code</p>
            </div>
          </div>
          <NavLink to={"/app/advisory/payment/qrcode"} style={{ width:'10%'}} >
            <img src={Arrow} 
            style={{width:'5%',minWidth:'10px', borderRadius:'10px',margin:'40px 10px 0px 10px'}}  alt="" />
          </NavLink>
        </div>
    <p className='heading p40' >Offline Payment</p>
        <div className='layout m20 contentBetween'  
            style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
          <div className='flex '>
          <div>
             <img src={three}
                style={{width:'70px', borderRadius:'10px',margin:'12px 10px 12px 10px'}}  alt="" />
           </div>
            <div style={{width:'50%',display:'inline-block',padding:'35px 0 12px 10px'}} >
            <p className=" textDark" style={{fontSize:'20px',fontWeight:'600'}}>Bank Transfer</p>
            </div>
          </div>
          <NavLink to={"/app/advisory/payment/qrinfo"} style={{ width:'10%'}} >
            <img src={Arrow} 
            style={{width:'5%',minWidth:'10px', borderRadius:'10px',margin:'40px 10px 0px 10px'}}  alt="" />
          </NavLink>
        </div>
    <p className='heading p40' >Offers</p>
        <div className='layout m20 contentBetween'  
            style={{borderRadius:'10px',border:'1px solid rgb(200,200,200)',}} >
          <div className='flex '>
          <div>
             <img src={four}
                style={{width:'70px', borderRadius:'10px',margin:'12px 10px 12px 10px'}}  alt="" />
           </div>
            <div style={{width:'80%',display:'inline-block',padding:'35px 0 12px 10px'}} >
            <p className=" textDark" style={{fontSize:'20px',fontWeight:'600'}}>Select applicable offers</p>
            </div>
          </div>
          <NavLink to={"#!"} style={{ width:'10%'}} >
            <img src={Arrow} 
            style={{width:'5%',minWidth:'10px', borderRadius:'10px',margin:'40px 0px 0px 10px'}}  alt="" />
          </NavLink>
        </div>
      <div className='layout m40 contentBetween '>
        <p className='textMD'>Subtotal </p> <p className= 'textDark' style={{fontSize:'20px',fontWeight:'600'}}> ₹500</p>
      </div>
      <div className='layout m20 contentBetween'>
      <p className='textMD'>Discount </p> <p className= 'textDark' style={{fontSize:'20px',fontWeight:'600'}}> ₹-50</p>

      </div>
      <div className='layout m40 contentBetween'>
      <p className='textMD'>Total </p> <p className='textDark ' style={{fontSize:'20px',fontWeight:'600'}}> ₹450</p>

      </div>
      <div className='m40'></div>
      <div className='m40'></div>

      </Layout>
    )
}

export default Payment
