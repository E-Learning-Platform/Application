import './index.css'
import { Component } from 'react'

class ProfileContainer extends Component{
    render(){
        return <div className='profile-container'>
        <div className='details-container'>
        <h1 className='name'>Rohith Kumar</h1>
        <p className='college-name'>SRM University Ap</p>
        </div>
        <img className='profile-img' src='' alt='profile-img'/>
            
        </div>
        
    }
}
export default ProfileContainer