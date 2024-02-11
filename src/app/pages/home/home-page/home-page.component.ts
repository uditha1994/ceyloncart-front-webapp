import { Component } from '@angular/core';
import { MainSliderComponent } from "./inner-items/main-slider/main-slider.component";
import { ProductViewCardComponent } from "../../../share/cards/product-view-card/product-view-card.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [MainSliderComponent, ProductViewCardComponent]
})
export class HomePageComponent {

}
