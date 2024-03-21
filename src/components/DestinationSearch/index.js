import {Component} from 'react'
import './index.css'
import DestinationItem from './DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  changed = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const result = destinationsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div>
        <div className="container">
          <h1>Destination Search</h1>
          <div className="search">
            <input
              type="search"
              name="searchInput"
              placeholder="Search"
              value={searchInput}
              onChange={this.changed}
            />
            <div style={{padding: '10px'}}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                alt="search"
              />
            </div>
          </div>
        </div>
        <ul>
          {result.map(each => (
            <DestinationItem userDetails={user} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
