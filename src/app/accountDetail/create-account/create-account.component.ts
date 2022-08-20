import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  accountForm!: FormGroup|any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource:any[] = [];

  constructor(
    public fb: FormBuilder
  ) {
    this.createForm()
    // console.log(this.accountForm.value)

   }

  ngOnInit(): void {
  }

  createForm() {
     this.accountForm = this.fb.group({
      isDefault: [true],
      accountName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      isAddressHQAddress: [false],
      address1: ['', Validators.required],
      address2:['', Validators.required],
      city:['', Validators.required],
      pin:['', Validators.required],
      country:['', Validators.required],
      currencyOptions:['USD'],
      state:['', Validators.required],
      bankName:['', Validators.required],
      branchName:['', Validators.required],
      bankAddressLine1:['', Validators.required],
      bankAddressLine2:['', Validators.required],
      bankCity:['', Validators.required],
      bankPin:['', Validators.required],
      bankState:['', Validators.required],
      bankCountry:['', Validators.required],
      swiftCode:['', Validators.required],
    });
  }

  patchData(patchData: any){
    console.log(patchData)
    this.accountForm.patchValue({
      accountName: patchData.accountName,
      accountNumber: patchData.accountNumber,
      isAddressHQAddress: patchData.isAddressHQAddress,
      address1: patchData.address1,
      address2:patchData.address2,
      city:patchData.city,
      pin:patchData.pin,
      country:patchData.country,
      currencyOptions:patchData.currencyOptions,
      state:patchData.state,
      bankName:patchData.bankName,
      branchName:patchData.branchName,
      bankAddressLine1:patchData.bankAddressLine1,
      bankAddressLine2:patchData.bankAddressLine2,
      bankCity:patchData.bankCity,
      bankPin:patchData.bankPin,
      bankState:patchData.bankState,
      bankCountry:patchData.bankCountry,
      swiftCode:patchData.swiftCode,
      isDefault:patchData.isDefault
    })
  }

  submitForm(){
    console.log(this.accountForm);
    if(this.accountForm.value.isDefault){
      this.dataSource.forEach(element => {
        element.isDefault = false
      });
  }
  this.dataSource.push(this.accountForm.value);
  this.createForm();


  }

}
