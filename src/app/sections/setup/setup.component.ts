import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TPipe } from '../../core/i18n/t.pipe';

@Component({
  selector: 'app-setup',
  standalone: true,
  imports: [CommonModule, TPipe],
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent {
  readonly devices = [
    { name: 'MacBook Air M1', type: 'Apple Laptop' },
    { name: 'iPad Pro M2', type: 'Tablet' },
    { name: 'iPhone 14 Pro', type: 'Smartphone' },
    { name: 'AirPods Pro', type: 'Audio' },
    { name: 'ASUS ROG Strix G713PI', type: 'Main Workstation' },
    { name: 'Meta Quest 3', type: 'XR / Testing' },
  ];
}
