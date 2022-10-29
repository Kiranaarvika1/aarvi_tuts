// Write your code her
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    this.setState({teamsList: data.teams})
  }

  render() {
    const {teamsList} = this.state
    console.log(teamsList)

    return (
      <div className="app-container">
        <div className="ipl-dashboard-container">
          <div className="title-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="ipl-title">IPL Dashboard</h1>
          </div>
          <ul className="team-cards-container">
            {teamsList.map(eachTeam => (
              <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
