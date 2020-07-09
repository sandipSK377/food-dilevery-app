import { Component, OnInit, TemplateRef } from '@angular/core';
import { ShareService } from 'src/app/core/services/share.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  loading:boolean=false;
  orderDetail:any;
  modalRef:BsModalRef;
  constructor(private shareService: ShareService,private modalService: BsModalService,private router: Router) { }

  ngOnInit() {
    this.getApiStatus();
  }
  getApiStatus() {

    this.shareService.messageSource.subscribe(data => {
      if(data){
        if (data.error) {
          this.loading = false;
        }
        if(data.order){
          this.orderDetail=data.order;
        }
      }

    })


  }
  placeOrder(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
    console.log('dd')
  }
  reOrder(){
    this.modalRef.hide();
    this.router.navigate([''])
  }
}
