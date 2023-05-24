import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private aFirestore: AngularFirestore, private router: Router) { }

  getProducts(){
    return this.aFirestore.collection('products').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }
        })
      })
    )
  }

  addProduct(products: any) {
    this.aFirestore.collection('products').add(products)
   }

  updateProduct(id: string, productData: any) { 
    this.aFirestore.doc(`products/${id}`).update(productData)
  }

  deleteProduct(id: String) { 
    this.aFirestore.doc(`products/${id}`).delete()
  }

}
