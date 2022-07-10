import { Component } from 'react';

import { Form } from '../Form';
import { Filter } from '../Filter';
import { ContactList } from '../ContactsList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addDateForm = contact => {
    if (this.state.contacts.find(item => item.name === contact.name)) {
      alert('такой контакт есть');
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleChangeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  handleVisiblyContacts = () => {
    const normalizeFilter = this.state.filter.trim().toLowerCase();
    const visiblyContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return visiblyContacts;
  };

  hendleDeleteContact = event => {
    this.setState({
      contacts: this.state.contacts.filter(item => item.id !== event.target.id),
    });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <Form onSubmit={this.addDateForm} />

        <h2>Contacts</h2>
        <Filter
          onChangeFilter={this.handleChangeFilter}
          value={this.state.filter}
        />
        <ContactList
          dates={this.handleVisiblyContacts()}
          onDeleteContact={this.hendleDeleteContact}
        />
      </div>
    );
  }
}
