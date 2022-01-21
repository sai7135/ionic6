import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  async promise(){
    try{
    var res=await this.getPromise()
    console.log(res);
    }
    catch(e){
      console.log(e);
    }
  }
 async getPromise(){
   return Promise.reject("hi");
 }
}
