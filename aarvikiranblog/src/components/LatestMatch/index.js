// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  console.log(latestMatchDetails)

  const {id, date, result, umpires, venue} = latestMatchDetails
  const imgUrl = latestMatchDetails.competing_team_logo
  const competingTeam = latestMatchDetails.competing_team
  const firstInnings = latestMatchDetails.first_innings
  const manOfTheMatch = latestMatchDetails.man_of_the_match
  const matchStatus = latestMatchDetails.match_status
  const secondInnings = latestMatchDetails.second_innings

  return (
    <div className="latest-match-container">
      <div className="latest-match-top">
        <div>
          <h1>{competingTeam}</h1>
          <h1>{date}</h1>
          <p>{venue}</p>
          <p className="result-text">{result}</p>
        </div>
        <div>
          <img
            src={imgUrl}
            alt="team logo"
            className="latest-match-team-logo"
          />
        </div>
      </div>
      <hr />
      <div className="latest-match-bottom">
        <p className="sub-heading">First Innings</p>
        <p>{firstInnings}</p>
        <p className="sub-heading">Second Innings</p>
        <p>{secondInnings}</p>
        <p className="sub-heading">Man of The Match</p>
        <p>{manOfTheMatch}</p>
        <p className="sub-heading">Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
