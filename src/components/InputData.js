import React from "react";

class InputData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      tag: "",
    };

    this.OnNameEvent = this.OnNameEvent.bind(this);
    this.OnTagEvent = this.OnTagEvent.bind(this);
    this.OnSubmitEvent = this.OnSubmitEvent.bind(this);
  }

  OnNameEvent(event) {
    this.setState((prev) => {
      return {
        ...prev,
        name: event.target.value,
      };
    });
  }

  OnSubmitEvent(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  OnTagEvent(event) {
    this.setState((prev) => {
      return {
        ...prev,
        tag: event.target.value,
      };
    });
  }

  render() {
    return (
      <div className="kontak">
        <form onSubmit={this.OnSubmitEvent}>
          <input id="name" className="datakontak" placeholder="Nama" type="text" value={this.state.name} onChange={this.OnNameEvent} />
          <br />
          <input id="tag" className="datakontak" type="text" placeholder="Tag" value={this.state.tag} onChange={this.OnTagEvent} />
          <br />
          <button type="submit" className="datakontak">
            Tambah
          </button>
        </form>
      </div>
    );
  }
}

export default InputData;
