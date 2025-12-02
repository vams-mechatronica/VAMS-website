import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { LoaderSpinnerComponent } from './shared/components/loader-spinner/loader-spinner.component';
// import { LoaderComponent } from './shared/loader-spinner/loader-spinner.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'vamsmechatronica';

  @ViewChild(LoaderSpinnerComponent) loader!: LoaderSpinnerComponent;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loader.visible = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        setTimeout(() => (this.loader.visible = false), 300);
      }
    });
  }
}
