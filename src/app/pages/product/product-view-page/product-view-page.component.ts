import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-product-view-page',
  standalone: true,
  imports: [],
  templateUrl: './product-view-page.component.html',
  styleUrl: './product-view-page.component.scss'
})
export class ProductViewPageComponent implements OnInit{
  constructor(private activatedRouter:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(response => {
      const id = response.get('id');
      console.log(id)
    })
  }

}
