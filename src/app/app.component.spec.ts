import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {ProgressBarComponent} from './main/components/progress-bar/progress-bar.component';
import {ToolbarComponent} from './main/components/toolbar/toolbar.component';
import {FooterComponent} from './main/components/footer/footer.component';
import {MatCardModule, MatIconModule, MatProgressBarModule, MatToolbarModule} from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatProgressBarModule,
        MatIconModule,
        MatCardModule,
        MatToolbarModule
      ],
      declarations: [
        AppComponent,
        ProgressBarComponent,
        ToolbarComponent,
        FooterComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
