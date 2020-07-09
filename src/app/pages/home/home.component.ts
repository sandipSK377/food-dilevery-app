import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/core/services/food.service';
import { ShareService } from 'src/app/core/services/share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foodData: any[] = [];
  loading: boolean = false;
  searchVal:string;

  constructor(private foodService: FoodService, private shareService: ShareService,private router: Router) { }

  ngOnInit() {
    this.getFoodDetails();
    this.getApiStatus();
  }
  getApiStatus() {

    this.shareService.messageSource.subscribe(data => {
      if(data){
        if (data.error) {
          this.loading = false;
        }
      }

    })


  }
  getFoodDetails() {
    this.loading = true;
    this.foodService.getFood().subscribe(res => {
      if (res) {
        this.loading = false;
        this.foodData = res.data;
        console.log('food', this.foodData)
      }
    })
  }
  search(){
    this.foodData=this.foodData.filter(data=>data.foodName === this.searchVal);
    console.log(this.foodData);
  }

  resetFilter(){
    this.getFoodDetails();
    this.searchVal='';
  }
  placeOrder(id:any){
    if(id){
      const obj=this.foodData.find(data=>data.id === id);
      this.shareService.changeMessage({order:obj});
      this.router.navigate(['summary'])
    }
  }
}
