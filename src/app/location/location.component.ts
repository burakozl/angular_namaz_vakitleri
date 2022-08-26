import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  countries:any = [];
  cities:any = [];
  districts:any = [];
  prayTime:any = [];
  dailyPraytime:any = [];
  selectedCountryId:any;
  selectedCityId:any;
  selectedDistrictId:any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getCountries();
  }
  getCountries(){
    this.apiService.getCountries().subscribe(res => {
      this.countries = res;
    });
  }

  getCities(){
      this.apiService.getCities(this.selectedCountryId).subscribe((res) => {
          this.cities = res;
      })
  }
  getDistrict(){
    this.apiService.getDistrict(this.selectedCountryId,this.selectedCityId).subscribe((res) => {
          this.districts = res;
          this.getPrayingTime();
    })
  }
  getPrayingTime(){
    this.apiService.getPrayingTime(this.selectedDistrictId).subscribe((res) => {
        this.prayTime = res;
        this.dailyPraytime = this.prayTime[0].splice(1);
    })
  }
  onChange(e:any){
      this.getCities();
      this.getDistrict();
  }


}
