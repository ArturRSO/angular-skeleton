import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private loader: LoaderService
  ) { }

  ngOnInit(): void {
    // this.testLoader();
  }

  private testLoader(): void {
    this.loader.enable();
  }
}
