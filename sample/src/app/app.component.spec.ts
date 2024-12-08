// @ts-ignore
import { TestBed } from '@angular/core/testing';
// @ts-ignore
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

const describe = (appComponent: string, param2: () => void) => {

};
describe('AppComponent',
  () => {
    const beforeEach = (param: () => Promise<void>) => {

    };
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent],
      }).compileComponents();
    });

    const it = (shouldCreateTheApp: string, param2: () => void) => {

    };
    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      // @ts-ignore
      fixture(app).toBeTruthy();
    });

    it(`should have as title 'sample'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      // @ts-ignore
      fixture(app.title).toEqual('sample');
    });

    it('should render title', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      // @ts-ignore
      fixture(compiled.querySelector('.content span')?.textContent).toContain('sample app is running!');
    });
  });
