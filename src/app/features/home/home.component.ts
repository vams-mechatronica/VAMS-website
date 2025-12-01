import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // aboutData: VamsAbout | null = null;
  // promonitor: any;

  constructor() {}

  ngOnInit() {
    // this.vams.getAbout().subscribe(data => {
    //   this.aboutData = data;
    // });

    // this.vams.getPromonitor().subscribe(pm => {
    //   this.promonitor = pm;
    // });
  }
}
