import React from 'react'
import Layout from './Layout'
import {RiSearch2Line} from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import Arrow from '../../assets/img/app/Arrow 2.svg'
import bottle from '../../assets/img/advisory/itembottle.svg'
import SLider from '../../assets/img/advisory/settings-sliders 1.svg'

const CategoryItems: React.FC = () => {
  return (
    <Layout goBack showUI pageTitle='Lorem'>
      <div className='layout'>
        <ul className='list bordered' style={{width:'80%'}}>
            <li>
            <RiSearch2Line style={{fontSize:'20px'}} />
            <input type="text" placeholder="Search Videos" style={{outline:'none',border:'none',fontSize:'15px'}}/>
            </li>
        </ul>
        <button style={{width:'10%',height:'40px',margin:'10px',borderRadius:'20px',
        backgroundColor:'rgb(235,235,235)' }}>
            <img src={SLider} alt="slider" />
        </button>
      </div>
      <div className='layout' style={{flexWrap:'wrap'}}>
        <div className='layout m20 flexColumn' 
            style={{width:'45%', border:'1px solid rgb(230,230,230)', borderRadius:'10px'}}>
            <img src={bottle} alt="bottle" />
            <p className='ml20 textMD textDark'>Niria</p>
            <p className='ml20 textMD textDark'>Lorem</p>
            <p className='ml20'>Category</p>
            <div className='ml20 layout contentBetween'>
                <p >₹450</p>
                <NavLink to={'/app/ecommerse/itemdetails'} className='mr20'>
                    <img src={Arrow} alt="go" />
                </NavLink>
            </div>
        </div>
        <div className='layout m20 flexColumn ml20' 
            style={{width:'45%', border:'1px solid rgb(230,230,230)', borderRadius:'10px'}}>
            <img src={bottle} alt="bottle" />
            <p className='ml20 textMD textDark'>Niria</p>
            <p className='ml20 textMD textDark'>Lorem</p>
            <p className='ml20'>Category</p>
            <div className='ml20 layout contentBetween'>
                <p >₹450</p>
                <NavLink to={'!#'} className='mr20'>
                    <img src={Arrow} alt="go" />
                </NavLink>
            </div>
        </div>
      </div>
      
    </Layout>
  )
}

export default CategoryItems
