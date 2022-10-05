import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-modal-basic',
  templateUrl: './app.component.html',
})
export class NzDemoModalBasicComponent {
  isVisible = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
