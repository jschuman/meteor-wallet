import { ContactsCollection } from "./ContactsCollection"

Meteor.methods( {
  'contacts.insert'({ name, email, imageUrl }) {
    if (!name) {
      throw new Meteor.Error("Name is required.")
    }
    return ContactsCollection.insert({name, email, imageUrl})
  }
})



