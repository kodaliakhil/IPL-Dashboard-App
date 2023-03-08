// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
// import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {teamData: [], isLoading: true, teamId: ''}

  componentDidMount = () => {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = [await response.json()]
    // console.log(data)
    const formattedData = data.map(eachItem => ({
      teamBannerUrl: eachItem.team_banner_url,
      latestMatchDetails: eachItem.latest_match_details,
      recentMatches: eachItem.recent_matches,
    }))
    // console.log(formattedData)
    this.setState({
      teamData: formattedData,
      teamId: id,
      isLoading: false,
    })
  }

  showLoading = () => (
    <Loader type="Oval" color="#ffffff" height={50} width={50} />
  )

  renderElements = (teamData, teamId) => (
    <div>
      <img src={teamData.teamBannerUrl} alt={teamId} />
    </div>
  )

  render() {
    const {teamData, isLoading, teamId} = this.state
    console.log(teamData)
    let teamColor
    if (teamId === 'RCB') {
      teamColor = 'rcb-bg-col'
    }
    return (
      <div className={`bg-container ${teamColor}`}>
        {isLoading
          ? this.showLoading()
          : this.renderElements(teamData[0], teamId)}
      </div>
    )
  }
}

export default TeamMatches
