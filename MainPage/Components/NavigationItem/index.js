import './index.css'
import { Component } from 'react'

class NavigationItem extends Component{

    render(){
        const {item}=this.props
        return <li className='nav-item'>{item}</li>
    }

}

export default NavigationItem