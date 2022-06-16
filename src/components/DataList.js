import React from "react";
import DataImg from "./DataImg";
import ListUser from "./ListUser";
import CloseButton from "./CloseButton";

function DataList({ id, imageUrl, name, tag, onDelete }) {
  return (
    <div className="datalist">
      <DataImg className="Gambar" imageUrl={imageUrl} />
      <ListUser name={name} tag={tag} />
      <CloseButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default DataList;
