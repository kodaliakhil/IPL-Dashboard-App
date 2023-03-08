// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {item} = props
  const {id, name, teamImageUrl} = item

  return (
    <Link to={`/team-matches/${id}`} className="card-container">
      <li className="card-items-container">
        <img className="team-card-image" src={teamImageUrl} alt={name} />
        <p className="card-team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
