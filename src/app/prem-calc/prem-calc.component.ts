import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Occupation } from '../models/occupation';
import { OccupationRating } from '../models/occupation-rating';

@Component({
  selector: 'app-prem-calc',
  templateUrl: './prem-calc.component.html',
  styleUrls: ['./prem-calc.component.css']
})
export class PremCalcComponent implements OnInit {
  form: any;
  age: number = 0;
  maxDate: any = new Date(new Date().getTime()).toISOString().substring(0, 10);
  occupations: Occupation[] = [];
  premium: any | undefined = '';
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      sumInsured: ['', Validators.required],
      selectedOccupation: ['', Validators.required]
    });
    this.occupations = [
      new Occupation('Cleaner', OccupationRating.LightManual),
      new Occupation('Doctor', OccupationRating.Professional),
      new Occupation('Author', OccupationRating.WhiteCollar),
      new Occupation('Farmer', OccupationRating.HeavyManual),
      new Occupation('Mechanic', OccupationRating.HeavyManual),
      new Occupation('Florist', OccupationRating.LightManual)
    ];
  }

  ngOnInit(): void {

  }

  onOccupationSelectionChange(occupation: any) {
    this.calculatePremium();
  }

  onDobSelectionChange(dob: any) {
    if (!this.form.controls['dob'].invalid) {
      this.age = this.calculateAgeFromSelectedDate(dob);
    }
  }

  /**
   * Calculate age based on selected dob.
   * @param selectedDob
   * @returns
   */
  private calculateAgeFromSelectedDate(selectedDob: any): number {
    const today = new Date();
    const birthDate = new Date(selectedDob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    //Considering age can not be zero year, if calculated age is zero return 1 or calculated age.
    return age === 0 ? 1 : age;
  }

  private calculatePremium() {
    if (!this.form.invalid && this.age > 0) {
      this.premium = this.form.controls['sumInsured'].value * this.form.controls['selectedOccupation'].value * this.age / 1000 * 12;
    }
    else {
      this.premium = '';
    }
  }

  onSubmit() {
    this.calculatePremium();
  }
}
