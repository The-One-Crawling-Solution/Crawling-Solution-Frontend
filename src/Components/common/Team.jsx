import React from "react";
import teamMembers from "../data/TeamMembers";

const Team = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Meet Our Team</h1>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-md-6 col-sm-12 mb-4" key={index}>
            <div className="card h-100 text-center">
              <img
                src={member.image}
                className="card-img-top rounded-circle mx-auto mt-3"
                alt={member.name}
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text text-muted">{member.title}</p>
                <p className="card-text">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
