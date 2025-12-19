import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { LoaderSpinnerComponent } from './shared/components/loader-spinner/loader-spinner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false   // ✅ MUST be false (or remove the line entirely)
})
export class AppComponent implements AfterViewInit {

  @ViewChild(LoaderSpinnerComponent)
  loader!: LoaderSpinnerComponent;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.router.events.subscribe(event => {
      if (!this.loader) return;

      if (event instanceof NavigationStart) {
        this.loader.visible = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        setTimeout(() => {
          this.loader.visible = false;
        }, 300);
      }
    });
  }
}
