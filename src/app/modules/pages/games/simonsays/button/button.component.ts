import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input()
  color!: string;
  @Input()
  active: boolean = false;
  @Output()
  intento: EventEmitter<string> = new EventEmitter();


  click() {
    this.intento.emit(this.color);
  }

}
