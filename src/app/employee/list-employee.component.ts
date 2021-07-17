import { Component, OnInit } from '@angular/core';
import { IEmployee } from './IEmployee';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  empolyees: IEmployee[];

  constructor(private _employeeService: EmployeeService,
              private _router: Router) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(
      (listEmployees) => this.empolyees = listEmployees,
      (err) => console.log(err)
    );
  }

  onButtonEditClick(employeeId: number): void{
    this._router.navigate(['/edit',employeeId]);
  }

  onButtonDeleteClick(empID: number): void{
    this._employeeService.deleteEmployee(empID).subscribe(
      // ()=> this._router.navigate(['list']),
      // (err)=> console.log(err)
    );
  }

}
