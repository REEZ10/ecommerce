import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  myItems = [
    {
      itemName: 'my item 1',
      image: 'https://nzxt.com/assets/cms/34299/1666138830-h5-flow-hero-white.png?auto=format&fit=crop&h=1000&w=1000',
      price: 'RM 4000'
    },
    {
      itemName: 'my item 2',
      image: 'https://m.media-amazon.com/images/I/51A7kRyEnIL.jpg',
      price: 'RM 2'
    }
  ]


  constructor(private cartService: CartService , ){}

  addToCart(item:any){
    this.cartService.cartItems.push(item);
    console.log(`item pushed into cart service's cartItems is : `, item);
    alert('Item added to cart');
  }

}
