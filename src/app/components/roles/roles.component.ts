import { HttpClient } from '@angular/common/http';
import { Component , inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

  roleList: IRole [] = [];

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles()
  }

  
  // getAllRoles(){
  //   this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any)=>{
  //     this.roleList = res.data;

  //     })  
      
  // }

  getAllRoles() {
    this.http.get<any>("https://testing20241112230329.azurewebsites.net/WeatherForecast")
      .subscribe(
        (res) => {
          this.roleList = res; // Directly assign the response to roleList
        },
        (error) => {
          console.error('Error fetching roles:', error);
          // Optionally handle errors (e.g., show an error message to the user)
        }
      );
  }

}