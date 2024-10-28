import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public apiBaseUrl: String = 'https://one-care-1.onrender.com/';
  constructor() { }


}
