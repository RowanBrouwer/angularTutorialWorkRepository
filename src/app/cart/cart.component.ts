import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartSerive.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  constructor(
    private cartSerive: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.items = this.cartSerive.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
