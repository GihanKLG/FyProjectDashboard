import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubFollowerProfileComponent } from './github-follower-profile.component';

describe('GithubFollowerProfileComponent', () => {
  let component: GithubFollowerProfileComponent;
  let fixture: ComponentFixture<GithubFollowerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubFollowerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubFollowerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
