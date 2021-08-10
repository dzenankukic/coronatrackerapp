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
    //postavke za searchbar
    cn.showHint=true;
    //postavke za modal
    modalcon.backdrop = 'static';
    modalcon.keyboard = false;
  }
  //postavke za searchbar
ngOnInit() {
this.getallcountry();
/*
this.getdrzava();*/
/*this.getcounry('BA');*/
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
/*   refreshCountries() {
    this.countries = this.coun?.data
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }*/




 /* getdata(){
    this.cs.getdata().subscribe((result)=>
    {
      console.log(result);
      this.displaydata = result.data;
    })
  }*/
  //modal open
  open(content,country) {
    this.selectedcountry = country;
    this.modalservice.open(content);
  }
  //sve drzave editovat
  sortedcountry: Country[];
  sortpopulation(){
    for(var i=0;i<this.coun?.data.length;i++)
     {

     }
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
  filtercount: Array<string>;

  pretvori(){
    for(let z=0 ; z < this.countries.length ; z++)
{
  this.filtercount[z]=this.countries[z].name;
}
  }
  public model: any;
  search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 2 ? []
      : this.filtercount.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10))
  )
  //editovat any
  getcounry(id: string){
    this.cs.getcountrybyid(id).subscribe((result: any)=>{
      console.log(result);
      this.ct = result.data;
      console.log(this.ct);
   })
 }


 //Zadnje novosti -- !!Uzeti zadnje podatke i prikazati na baner
  getlastnews(){
   this.cs.getlastnews().subscribe((result: Globalvalue) => {
    this.globalVL = result;
     console.log(result);
     console.log(this.globalVL);
    /* for(var i=0;i<this.globalVL.data.length;i++)
         {
         }*/
    })

 }


}
