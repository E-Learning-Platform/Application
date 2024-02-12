import './index.css'

import { Component } from 'react'

class Course extends Component{

    render(){
        const {obj}=this.props;
        return (
            <div className='card'>
                <h1 className='course-name'>{obj.Name}</h1>
                <hr/>
                <p className='course-standard'>{obj.Standard}</p>
                <p className='course-lecture'>{obj.Lectures}Lessons</p>
            </div>
        )
    }
}

export default Course