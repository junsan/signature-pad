import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'viewed-component',
  templateUrl: './viewed.component.html',
  styleUrls: ['./viewed.component.css']
})

export class ViewedComponent {

  constructor(
    private route: ActivatedRoute,
  	private router: Router) {
  }

  public title = 'View Sample Contract';
  public signature = '';
  public fullname = '';

  ngOnInit(): void {
  	  this.route.params.forEach((params: Params) => {
        this.signature = params['id'];
        this.fullname = params['name'];
      });
  }
}

