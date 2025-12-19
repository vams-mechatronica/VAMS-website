import { Component } from '@angular/core';

@Component({
  selector: 'app-loader-spinner',
  templateUrl: './loader-spinner.component.html',
  styleUrls: ['./loader-spinner.component.scss'],
  standalone: false
})
export class LoaderSpinnerComponent {
  visible = false;
}
