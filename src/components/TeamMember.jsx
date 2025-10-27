import React from 'react';
import './TeamMember.css';

function TeamMember({ name, position, bio, image }) {
  return (
    <div className="team-member">
      <div className="team-photo">
        <img src={image} alt={name} />
      </div>
      <div className="team-name">{name}</div>
      <div className="team-position">{position}</div>
      <div className="team-bio">{bio}</div>
    </div>
  );
}

export default TeamMember;