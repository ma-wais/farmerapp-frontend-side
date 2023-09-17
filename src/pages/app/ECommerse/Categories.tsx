import React from 'react'
import Layout from './Layout'
import hoe from '../../assets/img/advisory/hoe.svg'
import veg from '../../assets/img/advisory/vegshop.svg'
import {RiSearch2Line} from 'react-icons/ri'

const Categories: React.FC = () => {
    const categorys = [
        {
          picture: hoe,
            category: "Lorem",
          date: "Ipsum",
        },
        {
          picture: hoe,
            category: "Lorem",
          date: "Ipsum",
        },
        {
          picture: hoe,
            category: "Lorem",
          date: "Ipsum",
        },
        {
          picture: hoe,
            category: "Lorem",
          date: "Ipsum",
        },
        {
            picture: hoe,
              category: "Lorem",
            date: "Ipsum",
          },
          {
            picture: hoe,
              category: "Lorem",
            date: "Ipsum",
          },
        {
          picture: hoe,
            category: "Lorem",
          date: "Ipsum",
        }
    ]
  return (
    <Layout showUI goBack pageTitle='Categories'>
      <ul className='list bordered'>
        <li>
          <RiSearch2Line style={{fontSize:'20px'}} />
          <input type="text" placeholder="Search Videos" style={{outline:'none',border:'none',fontSize:'15px'}}/>
        </li>
      </ul>
      <div className="layout " style={{width: "100%",flexWrap:'wrap'}}>
        <div
          className="flexColumn ml20 m20"
          style={{
            border: "1px solid #E9E9E9", width:'150px', height:'200px',
            borderRadius: "10px",
            backgroundImage: `url(${veg})`, backgroundSize: 'cover', backgroundPosition: 'center'
          }}
        >
          <h5 style={{ margin:"140px 0 0 8px",color:'white' }} className="textMD">
           Lorem
          <p style={{color:'white' }}>Ipsum</p>
          </h5>
        </div>
        <div
          className="flexColumn ml20 m20"
          style={{
            border: "1px solid #E9E9E9", width:'150px', height:'240px',
            borderRadius: "10px",
            backgroundImage: `url(${hoe})`, backgroundSize: 'cover', backgroundPosition: 'center'
          }}
        >
          <h5 style={{ margin:"140px 0 0 8px",color:'white' }} className="textMD">
           Lorem
          <p style={{color:'white' }}>Ipsum</p>
          </h5>
        </div>
          {categorys.map((day, index) => (
            <div
              className="flexColumn ml20 m20"
              key={index}
              style={{
                border: "1px solid #E9E9E9", minWidth:'150px', height: index === 0? '250px' : '200px',
                borderRadius: "10px",   
                backgroundImage: `url(${day.picture})`, backgroundSize: 'cover', backgroundPosition: 'center'
              }}
            >
              <h5 style={{ margin:"140px 0 0 8px" }} className=" textMD textDark">
                {day.date}
              <p>{day.category}</p>
              </h5>
            </div>
          ))}
        </div>
    </Layout>
  )
}

export default Categories
