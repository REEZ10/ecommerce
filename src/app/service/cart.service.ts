import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItems: any=[]
  public itemList = new BehaviorSubject<any>([]);
  
  getProducts(){
    return this.itemList.asObservable();
  }


  removeCartItem(item:any){
    this.cartItems.map((a:any, index:any)=>{
      if(item.id===a.id){
        this.cartItems.splice(index,1);
      }
    }
    )
  }

  getCartItems(){
    return this.cartItems;
  }

  constructor() { }
}
