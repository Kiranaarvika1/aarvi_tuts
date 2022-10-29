// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props

  const teamName = matchCardDetails.competing_team
  const teamLogo = matchCardDetails.competing_team_logo
  const matchStatus = matchCardDetails.match_status
  const {result} = matchCardDetails

  return (
    <div className="match-card-container">
      <img src={teamLogo} alt="team logo" className="match-card-team-logo" />
      <h1 className="match-card-team-name">{teamName}</h1>
      <p className="result">{result}</p>
      <p className="match-status">{matchStatus}</p>
    </div>
  )
}

export default MatchCard
