import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/Services/apiservice.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {

  listArray:any;
  dummyListArray:any;
  p: number = 1;
  p1: number = 1;
  tableListArray=[];
  constructor(public apiService:APIServiceService) { }

  ngOnInit(){
    this.apiService.getList().subscribe((response)=>{
      this.listArray = response;
      this.dummyListArray =  this.listArray.map(function(el) {
        var o = Object.assign({}, el);
        o.isActive = true;
        return o;
      })
      console.log(this.dummyListArray);
    });
  }

  compare(i,id){
    this.dummyListArray = this.dummyListArray.map(obj =>
      obj.id === id ? { ...obj, isActive: false } : obj);
    this.tableListArray.push(i);
    console.log(this.tableListArray)
  }

  Remove(id){
    let valueofId = id;
    console.log(valueofId);
    this.dummyListArray = this.dummyListArray.map(obj =>
    obj.id === id ? { ...obj, isActive: true } : obj);
    this.tableListArray =  this.tableListArray.filter(item => item.id !== valueofId);
    console.log(this.tableListArray);
  }
}
