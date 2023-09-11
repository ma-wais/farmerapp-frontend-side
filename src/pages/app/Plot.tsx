import React from 'react'
import YChill from '../../assets/img/advisory/DefProfile.svg'
import Arrow from '../../assets/img/advisory/arrowback.svg'
import palak from '../../assets/img/advisory/Frame.svg'
import Chev from '../../assets/img/advisory/Chev Icon.svg'
import ArrowUp from '../../assets/img/advisory/ArrowUp.svg'
import ArrowDown from '../../assets/img/advisory/ArrowDown.svg'

const Plot = () => {
  const [activeQuestion, setActiveQuestion] = React.useState<number>(0);

  const toggleQuestion = (questionNumber: number) => {
    setActiveQuestion(activeQuestion === questionNumber ? 0 : questionNumber);
  };
  return (
    <div>
        <img src={Arrow} style={{position:'fixed',top:'40px',left:'20px',cursor:'pointer', width:'40px'}}  alt="" />
        <img src={YChill} style={{width:'100%',height:'auto'}}  alt="plot" />
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
        <p className='heading p20 ml20' >Followed Practices</p>
        <div className='about' >
        <article className='schedule' >
          <aside className='layout contentBetween' onClick={() => toggleQuestion(1)}>
            <p className='textMD'>Drip</p>
            <img src={activeQuestion  === 1 ? ArrowUp : ArrowDown} alt="minimize" style={{marginRight:'10px'}} />
          </aside>
            <p style={{ display: activeQuestion === 1 ? 'block' : 'none'}}>
            Drip irrigation involves delivering water in controlled drops directly to plants' root zones, conserving water and promoting efficient plant growth.            </p>
        </article>
        <article className='schedule'>
            <aside className='layout contentBetween' onClick={() => toggleQuestion(2)}> 
              <p className='textMD'>Spray</p>
              <img src={activeQuestion  === 2 ? ArrowUp : ArrowDown} alt="minimize" style={{marginRight:'10px'}} />
            </aside>
            <p style={{display: activeQuestion === 2 ? 'block' : 'none'}}>
              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
            </p>
        </article>
        <article className='schedule'>
            <aside className='layout contentBetween' onClick={() => toggleQuestion(3)}>
                <p className='textMD'>Agronomical Practices</p>
                <img src={activeQuestion  === 3 ? ArrowUp : ArrowDown} alt="minimize" style={{marginRight:'10px'}} />
            </aside>
            <p style={{display: activeQuestion === 3 ? 'block' : 'none'}}>
              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
            </p>
        </article>
        </div>
    </div>
  )
}

export default Plot
