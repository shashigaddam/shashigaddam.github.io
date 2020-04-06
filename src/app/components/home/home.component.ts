import { Component, OnInit, Inject } from '@angular/core';
import { PortfolioService } from '../../portfolio.service';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private chartData: Array<any>;
  public errorMsg;
  constructor(private _portfolio:PortfolioService, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {

    this._portfolio.getBarchart()
      .subscribe(data => this.chartData = data,
        error => this.errorMsg = error);
        this.document.body.classList.add('homePage');
  }


  ngOnDestroy(){
    this.document.body.classList.remove('homePage')
  }


}
