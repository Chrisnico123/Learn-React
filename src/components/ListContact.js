import React from "react";
import DataList from "./DataList";

function ListContact({ contacts, onDelete }) {
  return (
    <div className="contact">
      {contacts.map((contact) => (
        <DataList key={contact.id} id={contact.id} onDelete={onDelete} {...contact} />
      ))}
    </div>
  );
}

export default ListContact;
