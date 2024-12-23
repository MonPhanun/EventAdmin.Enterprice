import { Component, EventEmitter, Output } from "@angular/core";

export @Component({
    selector: 'header-component',
    templateUrl: '../../templates/admin/header/index.html',
})
class headerComponent {

    @Output("colapes")
    colapes: EventEmitter<boolean> = new EventEmitter<boolean>();

    isColapes = false

    onColapes() {
        this.colapes.emit(true);
        this.isColapes = true
    }

    onUnColapes() {
        this.colapes.emit(false);
        this.isColapes = false
    }
} 