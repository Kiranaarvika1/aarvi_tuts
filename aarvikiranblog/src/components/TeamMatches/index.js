// Write your code here
import './index.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    matchDetails: [],
    recentMatchDetails: [],
    imageUrl: '',
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    console.log(data)

    const newLatestData = {
      latestMatchDetails: data.latest_match_details,
    }
    const newRecentData = {
      recentMatches: data.recent_matches,
    }

    this.setState({
      matchDetails: newLatestData.latestMatchDetails,
      recentMatchDetails: newRecentData.recentMatches,
      imageUrl: data.team_banner_url,
    })
    // because of array of objects and state update
  }

  render() {
    const {matchDetails, recentMatchDetails} = this.state
    const {latestMatchDetails} = matchDetails
    const {imageUrl} = this.state

    return (
      <div className="app-container">
        <div className="team-matches-container">
          <img src={imageUrl} alt="team banner" className="team-banner-img" />
          <h1 className="latest-matches-heading">Latest Matches</h1>
          <LatestMatch latestMatchDetails={latestMatchDetails} />
          <ul className="recent-matches-container">
            {recentMatchDetails.map(eachMatch => (
              <MatchCard matchCardDetails={eachMatch} key={eachMatch.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default TeamMatches
