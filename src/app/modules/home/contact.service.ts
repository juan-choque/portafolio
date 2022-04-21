import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Contact } from '../../core/contact.interface'
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactColleccion: AngularFirestoreCollection<Contact>

  constructor( private db: AngularFirestore) {
    this.contactColleccion = db.collection<Contact>('contact');
  }

  public saveContact(contact: Contact, id: string): Promise<void>{
    return new Promise( async (resolve, reject) => {
        try {
          const idg = id || this.db.createId();
          const data = {id, ...contact}
          const result = await this.contactColleccion.doc(idg).set(data)
          resolve(result);
        } catch (error) {
          reject(error.message);
          console.log('error', error)
        }
    })
  }
}


