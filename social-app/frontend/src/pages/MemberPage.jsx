import React, { useEffect, useState } from "react";
import Members from "../services/Members";
import MemberComponent from "../components/MemberComponent";

function MemberPage() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    Members.getMembers()
      .then((res) => {
        console.log(res.data);
        setMembers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return members.length > 0 ? (
    members.map((member) => (
      <MemberComponent key={member._id} member={member} />
    ))
  ) : (
    <p>Loading...</p>
  );
}

export default MemberPage;
