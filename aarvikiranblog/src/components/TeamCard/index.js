// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id} = teamDetails
  const imageUrl = teamDetails.team_image_url

  console.log(id)

  return (
    <li className="team-card">
      <Link to={`/team-matches/${id}`}>
        <img src={imageUrl} alt="team logo" className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
