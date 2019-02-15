import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ComparableInterface } from './note.model';

export interface Clonable {
    clone(id, item);
}

@Injectable()
export class Repository {
    private _autoIncrement = 1;
    private itemsSubject = new BehaviorSubject([]);
    items$ = this.itemsSubject.asObservable();
    private _items = [];

    add(item: Clonable) {
        this.itemsSubject.next(
            [item.clone(this._autoIncrement, item)].concat(this.itemsSubject.getValue())
        );
        this._autoIncrement++;
    }
    
    remove(item: ComparableInterface) {
        this.itemsSubject.next(
          this.itemsSubject.getValue().filter(currentItem => !currentItem.isEqual(item))
        )
    }
    
    update(item: ComparableInterface) {
        this.itemsSubject.next(
          this.itemsSubject.getValue().map(currentItem => currentItem.isEqual(item) ? item : currentItem
          )
        )
    }
}