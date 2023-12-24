export interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
  photo: string;
}

export type ApiContact = Omit<Contact, 'id'>;

export interface ContactsList {
  [id:string]: ApiContact;
}