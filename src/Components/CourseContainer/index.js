import './index.css'

import { Component } from 'react'
import Course from '../Course'

const CourseList=[
    {
        'Name':'HTML',
        'Standard':'Beginer',
        'Lectures':'10'
    },
    {
        'Name':'css',
        'Standard':'Beginer',
        'Lectures':'10'
    },
    {
        'Name':'js',
        'Standard':'Beginer',
        'Lectures':'10'
    },
    {
        'Name':'python',
        'Standard':'Beginer',
        'Lectures':'10'
    },
    {
        'Name':'java',
        'Standard':'Beginer',
        'Lectures':'10'
    },
    {
        'Name':'c++',
        'Standard':'Beginer',
        'Lectures':'10'
    },
    {
        'Name':'react',
        'Standard':'Beginer',
        'Lectures':'10'
    }
]

class CourseConatiner extends Component{

    render(){
        return (
            <div className='box'>
            {
                CourseList.map(x=>
                    <Course obj={x}/>
                )
            }
            </div>
        )
    }
}

export default CourseConatiner