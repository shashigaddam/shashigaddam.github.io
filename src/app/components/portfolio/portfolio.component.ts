import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// import { ActivatedRoute } from '@angular/router'; 



@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  // public portfolioId: string;
  // public portfolioIdChange: string = '456';
  constructor() {
  }

  ngOnInit() {
    
    // this.portfolioId = this.route.snapshot.paramMap.get('id'); 
    // alert(this.portfolioId);
  // $('.carousel').carousel({
  //     interval: 500
  //   });
  }
  ngAfterViewInit() {
    $('.carousel').carousel({
      interval: 500
    });
  }
    // if(this.portfolioId==="123") {
    //   // alert(this.portfolioId);
    //   $('.carousel').carousel({
    //     interval: 500
    //   });    }
  
  
}
