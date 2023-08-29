import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    // console.log("try---", environment.weatherApiBaseUrl);
    
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json')
    })

  }
  // getWeatherData(cityName: string): Observable<WeatherData> {
  //   console.log("try---", environment.weatherApiBaseUrl);
    
  //   return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
  //     headers: new HttpHeaders()
  //       .set(environment.XRapidAPIHostLabelHeaderName, environment.XRapidAPIHostLabelHeaderValue)
  //       .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
  //     params: new HttpParams()
  //       .set('q', cityName)
  //       .set('units', 'metric')
  //       .set('mode', 'json')
  //   })

  // }
}
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { WeatherData } from '../models/weather.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class WeatherService {

//   constructor(private http: HttpClient) { }

//   getWeatherData(cityName: string): Observable<WeatherData> {
//     const headers = new HttpHeaders()
//       .set(environment.XRapidAPIHostLabelHeaderName, environment.XRapidAPIHostLabelHeaderValue)
//       .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue);

//     const params = new HttpParams()
//       .set('q', cityName)
//       .set('units', 'metric')
//       .set('mode', 'json');

//     return this.http.get<WeatherData>(environment.weatherApiBaseUrl, { headers, params });
//   }
// }
