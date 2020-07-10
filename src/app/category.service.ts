import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db
      .list('categories', reference => reference.orderByChild('name'))
      .snapshotChanges()
      .pipe(map(metadata => metadata.map(data => ({ key: data.payload.key, val: data.payload.val() }))));
  }
}
