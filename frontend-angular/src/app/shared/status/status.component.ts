import { Component, Input, OnInit } from '@angular/core';
import { IMPACT, STATE } from 'src/app/util/enum';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})
export class StatusComponent implements OnInit {
  @Input() status?: string;
  @Input() impact?: string;
  STATE = STATE;
  IMPACT = IMPACT;
  constructor() {}

  ngOnInit(): void {}
}
