import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { NgbModalConfig, NgbProgressbarConfig, NgbTypeaheadConfig ,NgbModal  } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Country } from '../_moduls/country';
import { Globalvalue } from '../_moduls/globalvalue';
import { CoronatrackerService } from '../_service/coronatracker.service';

@Component({
  selector: 'app-countryinfo',
  templateUrl: './countryinfo.component.html',
  styleUrls: ['./countryinfo.component.css']
})
export class CountryinfoComponent implements OnInit {

  constructor(private cs:CoronatrackerService,config: NgbProgressbarConfig,cn:NgbTypeaheadConfig ,
    modalcon: NgbModalConfig, private modalservice: NgbModal ) {
    //postavke za bar
    config.max = 80000000;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '25px';
    config.textType = 'dark';
    //modal
    modalcon.backdrop = 'static';
    modalcon.keyboard = false;
  }

ngOnInit() {
this.getallcountry();
this.getlastnews();
  }

  displaydata:any = [];
  ct: Country;
  ime: string;
  globalVL: Globalvalue;
  coun: Data;
   /*Pagination*/
   page = 1;
   pageSize = 10;
   collectionSize = 170;
   countries: Country[];
   selectedcountry: Country;


   open(content,country) {
    this.selectedcountry = country ;
    this.getcountry();
    this.modalservice.open(content);
  }



  getallcountry(){
    this.cs.getcountry().subscribe((result: Data)=>{
       console.log(result);
       this.coun = result;
       console.log(this.coun);
       this.countries = this.coun?.data
       .map((country, i) => ({id: i + 1, ...country}))
       .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

    })

  }

  getcountry(){

    this.cs.getcountrybyid(this.selectedcountry.code).subscribe((result: any)=>
    {
      console.log('drzava bosna');
      console.log(result);
    }
    )
  }
  getlastnews(){
   this.cs.getlastnews().subscribe((result: Globalvalue) => {
    this.globalVL = result;
     console.log(result);
     console.log(this.globalVL);
    })
 }
}
