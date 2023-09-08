import YChill from '../../assets/img/advisory/DefProfile.svg'
import Arrow from '../../assets/img/advisory/arrowback.svg'
import palak from '../../assets/img/advisory/Frame.svg'
import Chev from '../../assets/img/advisory/Chev Icon.svg'

const Plot = () => {
 
  return (
    <div>
        <img src={Arrow} style={{position:'fixed',top:'40px',left:'20px',cursor:'pointer', width:'40px'}}  alt="" />
        <img src={YChill} style={{height:'50vh'}}  alt="" />
        <p className='heading p20 textDark ml20' >My Plot 1</p>
        <p className='textSM ml20'>Location</p>
        <p className='heading p20 ml20' >Crop Planted</p>
        <div className='layout m20 cropList'>
            <img src={palak} alt="palak" />
            <div>
              <p className='textMD ml20'>Palak</p>
              <p className='textSM ml20'>Primary Crop</p>
            </div>
        </div>
        <div className='layout m20 cropList'>
            <img src={palak} alt="" />
            <div>
              <p className='textMD ml20'>Palak</p>
              <p className='textSM ml20'>Secondary Crop</p>
            </div>
        </div>
        <p className='heading p20 textDark ml20' >Crop Schedule</p>
        <div className='layout m20 contentBetween schedule'>
          <p className='textMD '>March 22nd 2023 to  21st April 2023</p>
          <img src={Chev} alt="Go" style={{cursor:'pointer',marginRight:'10px'}} />
        </div>
        <div className='layout m20 contentBetween schedule'>
          <p className='textMD '>Feb 19th 2023 to March 21st 2023</p>
          <img src={Chev} alt="Go" style={{cursor:'pointer',marginRight:'10px'}} />
        </div><div className='layout m20 contentBetween schedule'>
          <p className='textMD '>Jan 19th 2023 to Feb 18th 2023</p>
          <img src={Chev} alt="Go" style={{cursor:'pointer',marginRight:'10px'}} />
        </div>
    </div>
  )
}

export default Plot
