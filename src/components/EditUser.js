import React from "react";

const EditUser = (props) => {
  const { data } = props();
  return (
    <>
      <Form>
        <input type="text" value={data.name} />
        <input type="text" value={data.username} />
        <input type="text" value={data.email} />
        <input type="text" value={data.phone} />
        <input type="text" value={data.website} />
      </Form>
    </>
  );
};

export default EditUser;
