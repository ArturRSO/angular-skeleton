import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public options: any;

  constructor() { }

  ngOnInit(): void {
    this.loadOptions();
  }

  public scrollToElement(elementId: any) {

    const element = document.querySelector(`#${elementId}`);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

  private loadOptions(): void {
    this.options = [
      {
        name: 'About',
        element: 'about'
      },
      {
        name: 'Contact',
        element: 'contact'
      },
      {
        name: 'Services',
        element: 'services'
      }
    ]
  }
}
