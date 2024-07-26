function MemberComponent({ member }) {
  return (
    <div className="members-wrapper box">
      <img className="members-image" src={member.image} alt="" />
      <div>
        <h5>
          {member.user.firstName} {member.user.lastName}
        </h5>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <span className="col-md-4">
            <strong>Gender:</strong>
            {member.gender}
          </span>
          <span className="col-md-4">
            <strong>Role:</strong>

            <span href="">{member.role}</span>
          </span>
          <span className="col-md-4">
            <strong>Birth date:</strong>
            {member.birthDate}
          </span>
          <span className="col-md-6">
            <strong>Email:</strong>
            {member.email}
          </span>
          <span className="col-md-6">
            <strong>Member from:</strong>
            {member.createdAt}
          </span>
        </div>
      </div>
      <div className="d-flex flex-column gap-1">
        {/* <a className="btn btn-sm btn-info" href="/post/author/644a553656f68374bf7964ba"><i className="bi bi-binoculars"></i></a> */}
        {/* <button className="btn btn-sm btn-success" data-user-details="644a553656f68374bf7964ba"> */}
        {/* <i className="bi bi-eye"></i></button> */}
      </div>
    </div>
  );
}

export default MemberComponent;
