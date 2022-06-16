import React from "react";
import ListContact from "./ListContact";
import InputData from "./InputData";
import { getData } from "../utils/data";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContact = this.onAddContact.bind(this);
  }

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  }

  onAddContact({ name, tag }) {
    this.setState((prev) => {
      return {
        contacts: [
          ...prev.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: "/images/default.jpg",
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="app">
        <div className="tambahkontak">
          <h1>Tambah Kontak</h1>
          <InputData addContact={this.onAddContact} />
        </div>
        <h1>Daftar Kontak</h1>
        <ListContact contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default ContactApp;
