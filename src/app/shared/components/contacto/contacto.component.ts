import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '@core/contact.interface';

import { ContactService } from '../../../modules/home/contact.service'
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactI: Contact
  contactForm: FormGroup;
  private isEmail = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$'
  private isName = '^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$'
  constructor( private contact: ContactService, private fb: FormBuilder) { }

  ngOnInit(): void {
      this.initForm();
  }

  private initForm(): void{
    this.contactForm = this.fb.group({
      name: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      message: ['',[Validators.required]]
    })
  }
  onSave(): void {
    console.log('save', this.contactForm.value);
    if(this.contactForm.valid){
        const data = this.contactForm.value
        const contactId = this.contactI ?.id || null;
        this.contact.saveContact(data,contactId);
    }

  }



}
