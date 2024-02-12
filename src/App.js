import './App.css';
import ProfileContainer from './Components/ProfileContainer'
import Navigation from './Components/Navigation'
import CourseConatiner from './Components/CourseContainer'
import FilterSection from './Components/FilterSection'
function App() {
  return <div className='main-frame'>
    <Navigation />
    <div className='main-frame-2'>
    <ProfileContainer />
    <FilterSection/>
    <CourseConatiner/>
    </div>
    
  </div>;
}

export default App;
