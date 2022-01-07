import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ContactsCollection } from '../api/ContactsCollection';

export const ContactList = () => {
  const contacts = useTracker(() => {
    return ContactsCollection.find({}).fetch()  //Tracker
  })

  return (
  <>
    <h3>Contacts List</h3>
    <ul>
      {contacts.map(contact => 
      (
        <li key={contact.email}>{contact.name} - {contact.email}</li>
      ))}
    </ul>
  </>
  )
}