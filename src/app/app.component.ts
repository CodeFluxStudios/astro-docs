import {Component} from '@angular/core';
import {fadeAnimation} from './theme/animations/fade-animation';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'discord',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/discord-logo.svg')
    );
  }
}
