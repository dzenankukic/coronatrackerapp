import { Component, OnInit } from '@angular/core';
import { Country } from '../_moduls/country';
import { Data } from '../_moduls/data';
import { Globalvalue } from '../_moduls/globalvalue';
import { CoronatrackerService } from '../_service/coronatracker.service';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { NgbProgressbarConfig, NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cs:CoronatrackerService,config: NgbProgressbarConfig,cn:NgbTypeaheadConfig ) {
    //postavke za bar
    config.max = 80000000;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '15px';
    //postavke za searchbar
    cn.showHint=true;
  }
  //postavke za searchbar
ngOnInit() {
this.getallcountry();
/*
this.getdrzava();*/
/*this.getcounry('BA');*/
this.getlastnews();
}

public barChartOptions = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
public barChartType = 'bar';
public barChartLegend = true;
public barChartData = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
];




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

  //sve drzave editovat
  sortedcountry: Country[];
  sortpopulation(){
    for(var i=0;i<this.coun?.data.length;i++)
     {

     }
  }

  probar(){
    for (let i = 0; i < this.globalVL.data.length; i++) {
      let danas = this.globalVL.data[i].new_deaths;
      let zadnji = this.globalVL.data[i].deaths;
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
