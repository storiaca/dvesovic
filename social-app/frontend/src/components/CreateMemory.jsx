import React, { useEffect } from "react";

function CreateMemory(props) {
  useEffect(() => {
    console.log("Create memory");
  }, []);
  return (
    <div>
      <h2>Create memory</h2>
    </div>
  );
}

export default CreateMemory;
