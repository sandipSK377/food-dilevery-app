import { Injectable } from '@angular/core';
import { BACKEND_URL_CONFIG } from 'src/app/backend.config';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  getFoodUrl=BACKEND_URL_CONFIG.foodList;
  constructor(private apiService:ApiService) { }

  getFood(){
    return this.apiService.get(this.getFoodUrl);
  }
}
