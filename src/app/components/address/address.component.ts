import {Component, OnInit} from '@angular/core';
import {AddressService} from '../../services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  standalone: false,
  styleUrl: './address.component.css'
})
export class AddressComponent implements OnInit {
  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    console.log("address initialized");
  }
}
