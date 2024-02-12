
import './index.css'

import { Component } from 'react'

class FilterSection extends Component {

    state = { inputText: "" }

    OnChange = (event) => {
        this.setState({ inputText: event.target.value })
    }

    render() {
        return <div className='Filter-section'>
            <input type='search' value='' placeholder='Tell Your Interests' className='' onChange={this.OnChange} />
            <div>
                <label >Filter By:</label>
                <select>
                    <option>Technical</option>
                    <option>Core</option>
                    <option>Electives</option>
                    <option>All</option>

                </select>
            </div>
        </div>
    }
}
export default FilterSection