import { Component }              from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-form',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})

export class SignComponent {
  
  public title = 'Sample Contract';
  private form: FormGroup;

  constructor(fb: FormBuilder) {

    this.form = fb.group({
      signatureField: '',
    });
  }

}

