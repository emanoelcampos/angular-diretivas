import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss']
})
export class NgswitchComponent implements OnInit {

  aba: string = 'home';

  constructor() { }

  ngOnInit(): void {
  }

}
