import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get<any>("https://namaz-vakti-api.herokuapp.com/countries");
  }
  getCities(id:any){
    return this.http.get<any>("https://namaz-vakti-api.herokuapp.com/cities?country="+id);
  }
  getDistrict(countryId:any,cityId:any){
    return this.http.get<any>(`https://namaz-vakti-api.herokuapp.com/regions?country=${countryId}&city=${cityId}`);
  }
  getPrayingTime(districtId:any){
    return this.http.get<any>("https://namaz-vakti-api.herokuapp.com/data?region="+districtId);
  }
}
