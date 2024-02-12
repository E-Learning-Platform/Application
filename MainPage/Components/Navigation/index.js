import './index.css'

import { Component } from 'react'
import NavigationItem from '../NavigationItem'

const NavigationOptions=['Home', 'Dashboard', 'Account','Log Out']

class Navigation extends Component{
render(){
    return (
        <div className='Navigation-section'>
        {
            NavigationOptions.map(x=>{
                return <NavigationItem item={x}/>
            })
        }
        </div>
    )
}
}

export default Navigation