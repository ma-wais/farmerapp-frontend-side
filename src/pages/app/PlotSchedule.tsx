import Layout from './Layout'
import ArrowLeft from '../../assets/img/advisory/ArrowLeft.svg'
import ArrowRight from '../../assets/img/advisory/ArrowRight.svg'
// import ArrowGo from '../../assets/img/advisory/ArrowGo.svg'

const PlotSchedule = () => {
  const days=[
    {
      day: 'Wed',
      date: '22',
      month: 'MAR'
    },
    {
      day: 'Thu',
      date: '23',
      month: 'MAR'
    },
    {
      day: 'Fri',
      date: '24',
      month: 'MAR'
    },
    {
      day: 'Sat',
      date: '25',
      month: 'MAR'
    },
    {
      day: 'Sun',
      date: '26',
      month: 'MAR'
    },{
      day: 'Wed',
      date: '22',
      month: 'MAR'
    },{
      day: 'Wed',
      date: '22',
      month: 'MAR'
    },{
      day: 'Wed',
      date: '22',
      month: 'MAR'
    },{
      day: 'Wed',
      date: '22',
      month: 'MAR'
    },
  ]
  return (
    <Layout showUI goBack pageTitle='Schedule'>
      <div className='layout flexRow'>
        <img src={ArrowLeft} alt="previous" />
        <div className="layout flexRow " style={{overflowX: 'auto', width: '95%'}}>
            {days.map((day, index) => (
                <div className="flexColumn ml20" key={index}
                    style={{border:'1px solid #E9E9E9', borderRadius:'10px',padding:'5px' }} >
                  <p style={{marginLeft:'5px'}} >{day.day}</p>
                  <h5 style={{marginLeft:'8px'}} className=" textMD textDark">{day.date}</h5>
                  <p style={{marginLeft:'5px'}} >{day.month}</p>
                </div>
              ))}
        </div>
        <img  src={ArrowRight} alt="next" />
      </div>
    </Layout>
  )
}

export default PlotSchedule
