import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-modal-basic',
  template: `
    <button nz-button [nzType]="'primary'" (click)="showModal()"><span>Show Modal</span></button>
    <nz-modal cdkScrollable [(nzVisible)]="isVisible" nzTitle="The first Modal" (nzOnCancel)="handleCancel()" (nzOnOk)="handleOk()">
      <ng-container *nzModalContent>
      <nz-select ngModel="lucy">
      <nz-option nzValue="jack" nzLabel="Jack"></nz-option>
      <nz-option nzValue="lucy" nzLabel="Lucy"></nz-option>
      <nz-option nzValue="disabled" nzLabel="Disabled" nzDisabled></nz-option>
    </nz-select>
        <p>Content two</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content two</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content two</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content two</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content two</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content two</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
        <p>Content three</p>
      </ng-container>
    </nz-modal>
  `,
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
