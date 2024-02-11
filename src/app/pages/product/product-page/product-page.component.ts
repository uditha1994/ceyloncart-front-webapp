import { Component } from '@angular/core';
import { ProductViewCardComponent } from "../../../share/cards/product-view-card/product-view-card.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-product-page',
    standalone: true,
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.scss',
    imports: [ProductViewCardComponent, RouterLink]
})
export class ProductPageComponent {

}
