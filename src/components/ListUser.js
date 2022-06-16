import React from "react";

function ListUser({ name, tag }) {
  return (
    <div className="lisUser">
      <h3 className="NamaBesar">{name}</h3>
      <p className="Paragraph">@{tag}</p>
    </div>
  );
}

export default ListUser;
