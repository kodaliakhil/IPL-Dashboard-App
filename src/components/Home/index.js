// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsDetails()
  }

  getTeamsDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    // console.log(data)
    const formattedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    // console.log(formattedData)
    this.setState({
      teamsList: formattedData,
      isLoading: false,
    })
  }

  render() {
    const {teamsList, isLoading} = this.state
    // console.log(isLoading)
    return (
      <div className="bg-container">
        <div className="logo-heading-container">
          <img
            className="ipl-logo-img"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>

        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          <ul className="all-cards-container">
            {teamsList.map(eachItem => (
              <TeamCard key={eachItem.id} item={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
