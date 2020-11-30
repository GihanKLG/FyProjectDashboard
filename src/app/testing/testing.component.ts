import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  title = "coding"
  topic = "Gihan"
  constructor() { 
    console.log(this.topic);
  }

  ngOnInit(): void {
  }

  check(){
    console.log(this.topic)
  }

}
