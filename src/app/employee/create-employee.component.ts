import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidators } from "../shared/custom.validatros";
import { EmployeeService } from './employee.service';
import { IEmployee } from './IEmployee';
import { ISkill } from './ISkill';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private employeeService: EmployeeService,
              private router: Router) { }
  employeeForm: FormGroup;
  employee: IEmployee;
  pageTitle: string;

  validationMessages = {
    'fullName': {
      'required': 'Full Name is required',
      'minlength': 'Full Name must be greater than 2 charecters and less than 10 charecters',
      'maxlength': 'Full Name must be greater than 2 charecters and less than 10 charecters'
    },
    'email': {
      'required': 'email is required',
      'emailDomain': 'Email should be dell.com'
    },
    'confirmEmail': {
      'required': 'Confirm Email is required'
    },
    'emailGroup': {
      'emailMisMatch': 'Email and Confirm Email do not match'
    },
    'phone': {
      'required': 'phone is required'
    },
  };

  formErrors = {
  };

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      contactPreference: ['email'],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, CustomValidators.emailDomain('dell.com')]],
        confirmEmail: ['', Validators.required],
      }, { validator: matchEmail }),
      phone: [''],
      //to create a nested formgroup values
      skills: this.fb.array([
        this.addSkillFormGroup()
      ])
    });

    this.employeeForm.get('contactPreference').valueChanges.subscribe((data: string) => {
      this.onContactPreferenceChange(data);
    });

    this.employeeForm.valueChanges.subscribe(data =>
      this.logValidationerrors(this.employeeForm));

      this.route.paramMap.subscribe(param => {
        const empId = +param.get('id');
        if(empId){
          this.pageTitle = "Edit Employee"
          this.getEmployee(empId);
        } else {
          this.pageTitle = "Create Employee"
          this.employee = {
            id: null,
            fullName: '',
            contactPreference: '',
            email: '',
            phone: null,
            skills: []
          }
        }
      });
  }

  getEmployee(id: number){
    this.employeeService.getEmployee(id).subscribe(
      (employee: IEmployee) => {
        this.editEmployee(employee)
        this.employee = employee;
      },
      (err)=> console.log(err)
    )
  }
  editEmployee(employee: IEmployee){
    this.employeeForm.patchValue({
      fullName: employee.fullName,
      phone: employee.phone,
      emailGroup: {
        email: employee.email,
        confirmEmail: employee.email
      }
    });
    this.employeeForm.setControl('skills', this.setExistingSkills(employee.skills));
  }

  setExistingSkills(skillSets: ISkill[]): FormArray {
    const formArray = new FormArray([]);
    skillSets.forEach(s=> {
      formArray.push(this.fb.group({
      skillName: s.skillName,
      experienceInYears: s.experienceInYears,
      proficiency: s.proficiency

    }));
  });
  return formArray;
  }

  onContactPreferenceChange(selectvalue: string) {
    const phoneControl = this.employeeForm.get('phone');
    if (selectvalue === 'phone') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

  logValidationerrors(group: FormGroup = this.employeeForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);

      this.formErrors[key] = "";
      if (abstractControl && !abstractControl.valid &&
        (abstractControl.touched || abstractControl.dirty || abstractControl.value !=='')) {
        const messages = this.validationMessages[key];

        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }

      if (abstractControl instanceof FormGroup) {
        this.logValidationerrors(abstractControl);
      }

      // if (abstractControl instanceof FormArray) {
      //   for(const control of abstractControl.controls){
      //     if(control instanceof FormGroup){
      //       this.logValidationerrors(control);
      //     }
      //   }
        
      // }

    });
  }
  onLoadDataClick(): void {
    // this.logValidationerrors(this.employeeForm);
    // console.log(this.formErrors);
  }
  addSkillButtonClick() : void{
    (<FormArray>this.employeeForm.get('skills')).push(this.addSkillFormGroup());
  }
  removeSkillButtonClick(skillIndex: number) : void{
    const skillsFormArray = (<FormArray>this.employeeForm.get('skills'));
    skillsFormArray.removeAt(skillIndex);
    skillsFormArray.markAsDirty();
    skillsFormArray.markAsTouched();
  }
  onSubmit(): void {
    this.mapFormValuesEmployeeModel();
    if(this.employee.id){
    this.employeeService.updateEmployee(this.employee).subscribe(
      ()=>this.router.navigate(['list']),
      (err) => console.log(err)
    );
  }else{
    this.employeeService.addEmployee(this.employee).subscribe(
      ()=>this.router.navigate(['list']),
      (err) => console.log(err)
    );
  }
  }
  mapFormValuesEmployeeModel() {
    this.employee.fullName = this.employeeForm.value.fullName;
    this.employee.phone = this.employeeForm.value.phone;
    this.employee.email = this.employeeForm.value.emailGroup.email;
    this.employee.contactPreference = this.employeeForm.value.contactPreference;
    this.employee.skills = this.employeeForm.value.skills;
  }
  addSkillFormGroup(): FormGroup {
    return  this.fb.group({
       skillName: ['', Validators.required],
       experienceInYears: ['', Validators.required],
       proficiency: ['', Validators.required]
     });
 }
}

function matchEmail(group: AbstractControl): { [key: string]: any } | null {
  const emailControl = group.get('email');
  const confirmEmailControl = group.get('confirmEmail');
  if (emailControl.value === confirmEmailControl.value 
    || (confirmEmailControl.pristine && confirmEmailControl.value === '')) {
    return null;
  } else {
    return { 'emailMisMatch': true };
  }
}


