import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AfterCartPage } from './after-cart.page';

describe('AfterCartPage', () => {
  let component: AfterCartPage;
  let fixture: ComponentFixture<AfterCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterCartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AfterCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
