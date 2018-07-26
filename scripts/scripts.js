"use strict";
class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(info) {
    this.contacts.push(info);
    
  }
  deleteAt(index) {
    this.contacts.splice(index,1);

  }
  print() {
    for ( let i=0; i< this.contacts.length; i++){
        console.log(this.contacts[i]);
  }
    
      }

}

class Contact {
  constructor(name, relation, email, phone) {
    this.name = name;
    this.relation = relation;
    this.email = email;
    this.phone = phone;
  }
}
const book = new AddressBook();
book.add(new Contact("Tremell", "myself", "tremelljlowell@gmail.com", "313-333-8147"));
console.log(book.contacts);

book.add(new Contact("Benita"," my sidechick","shegotitgoingon@gmail.com", "313-555-8888"));
console.log(book);

book.add(new Contact("Wifey"," My main squeeze", "mainsqueeze@gmail.com", "313-666-9999"));

while(true){
    let userPrompt = prompt(`Add, Delete, Print, Quit, Update`);
    if (userPrompt.toLowerCase()==="add"){
        book.add(new Contact(this.name=prompt("Enter Name"), this.relation=prompt("How I know you"),this.email=prompt("What's your eamil"), this.phone=prompt("What's your phone number")))
    } else if (userPrompt.toLowerCase()==="delete"){
        let deleteContact= prompt(`delete`);
        book.deleteAt(deleteContact);
    } else if (userPrompt.toLowerCase()==="print"){
        book.print();
    } else if (userPrompt.toLowerCase()==="quit"){
        alert("Have a great day");
        break;
    } else if (userPrompt.toLowerCase()==="update"){
           
        let update=prompt("What do you want to update?");
           book.update();
            updateItem=prompt("Which item would you like to update: name, email, phone, or relation?");
            book.updateItem(Contact);
            newValue=prompt(`What is your new ${updateItem}`);
            book.newValue(Contact);
            AddressBook.Contact[update][updateItem] = (newValue);
        }
    }






