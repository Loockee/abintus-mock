import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../share/employee';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];

  constructor(private employeeService: EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
    let x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(elt => {
        let y = elt.payload.toJSON();
        y['$key'] = elt.key;
        this.employeeList.push(y as Employee);
      });
    });
  }
  
  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, emp);
  }
  
  onDelete(key: string) {
    if(confirm('Are you sure to delete this record ?')) {
      this.employeeService.deleteEmployee(key);
      this.toastr.warning(Deleted successfully", "Employee deleted");
    }
  }

}
