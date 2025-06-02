import {Component, Input, OnInit} from '@angular/core';
import {UtilityMeter} from '../../utils/utilityMeter';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-utility-meter-accordion',
  templateUrl: './utility-meter-accordion.component.html',
  standalone: false,
  styleUrl: './utility-meter-accordion.component.css'
})
export class UtilityMeterAccordionComponent implements OnInit {
  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }
  @Input() utilityMeter!: UtilityMeter;
}
