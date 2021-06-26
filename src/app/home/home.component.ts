import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	gridImages = [
		['./assets/img/grid/1.jpg', './assets/img/grid/2.jpg', './assets/img/grid/3.jpg', 
		'./assets/img/grid/4.jpg', './assets/img/grid/5.jpg', './assets/img/grid/6.jpg',
		'./assets/img/grid/7.jpg', './assets/img/grid/8.jpg', './assets/img/grid/9.jpg',
		'./assets/img/grid/49.jpg', './assets/img/grid/50.jpg', './assets/img/grid/51.jpg',
			'./assets/img/grid/40.jpg', './assets/img/grid/41.jpg', './assets/img/grid/42.jpg', 
		'./assets/img/grid/10.jpg', './assets/img/grid/11.jpg', './assets/img/grid/12.jpg'],
		['./assets/img/grid/13.jpg', './assets/img/grid/14.jpg', './assets/img/grid/15.jpg',
		'./assets/img/grid/16.jpg', './assets/img/grid/17.jpg', './assets/img/grid/18.jpg',
		'./assets/img/grid/4.jpg', './assets/img/grid/5.jpg', './assets/img/grid/6.jpg',
			'./assets/img/grid/40.jpg', './assets/img/grid/41.jpg', './assets/img/grid/42.jpg', 
		'./assets/img/grid/19.jpg', './assets/img/grid/20.jpg', './assets/img/grid/21.jpg',
		'./assets/img/grid/22.jpg', './assets/img/grid/23.jpg', './assets/img/grid/24.jpg'],
		['./assets/img/grid/25.jpg', './assets/img/grid/26.jpg', './assets/img/grid/27.jpg', 
			'./assets/img/grid/28.jpg', './assets/img/grid/29.jpg', './assets/img/grid/30.jpg', 
			'./assets/img/grid/31.jpg', './assets/img/grid/32.jpg', './assets/img/grid/33.jpg', 
			'./assets/img/grid/34.jpg', './assets/img/grid/35.jpg', './assets/img/grid/36.jpg',
			'./assets/img/grid/1.jpg', './assets/img/grid/2.jpg', './assets/img/grid/3.jpg'],
		['./assets/img/grid/37.jpg', './assets/img/grid/38.jpg', './assets/img/grid/39.jpg', 
			'./assets/img/grid/40.jpg', './assets/img/grid/41.jpg', './assets/img/grid/42.jpg', 
			'./assets/img/grid/43.jpg', './assets/img/grid/44.jpg', './assets/img/grid/45.jpg', 
			'./assets/img/grid/46.jpg', './assets/img/grid/47.jpg', './assets/img/grid/48.jpg',
		'./assets/img/grid/19.jpg', './assets/img/grid/20.jpg', './assets/img/grid/21.jpg',
		'./assets/img/grid/13.jpg', './assets/img/grid/14.jpg', './assets/img/grid/15.jpg'],
		['./assets/img/grid/1.jpg', './assets/img/grid/54.jpg', './assets/img/grid/3.jpg', 
		'./assets/img/grid/31.jpg', './assets/img/grid/53.jpg', './assets/img/grid/33.jpg',
		'./assets/img/grid/16.jpg', './assets/img/grid/52.jpg', './assets/img/grid/18.jpg',
		'./assets/img/grid/49.jpg', './assets/img/grid/50.jpg', './assets/img/grid/51.jpg',
			'./assets/img/grid/43.jpg', './assets/img/grid/44.jpg', './assets/img/grid/45.jpg'],
		['./assets/img/grid/13.jpg', './assets/img/grid/14.jpg', './assets/img/grid/15.jpg',
		'./assets/img/grid/16.jpg', './assets/img/grid/17.jpg', './assets/img/grid/18.jpg',
		'./assets/img/grid/4.jpg', './assets/img/grid/5.jpg', './assets/img/grid/6.jpg',
			'./assets/img/grid/31.jpg', './assets/img/grid/32.jpg', './assets/img/grid/33.jpg', 
		'./assets/img/grid/19.jpg', './assets/img/grid/20.jpg', './assets/img/grid/21.jpg',
		'./assets/img/grid/22.jpg', './assets/img/grid/23.jpg', './assets/img/grid/24.jpg'],
		[
			'./assets/img/grid/4.jpg', './assets/img/grid/5.jpg', './assets/img/grid/6.jpg',
			'./assets/img/grid/22.jpg', './assets/img/grid/23.jpg', './assets/img/grid/24.jpg',
			'./assets/img/grid/16.jpg', './assets/img/grid/52.jpg', './assets/img/grid/18.jpg',
			'./assets/img/grid/28.jpg', './assets/img/grid/29.jpg', './assets/img/grid/30.jpg',
			'./assets/img/grid/13.jpg', './assets/img/grid/14.jpg', './assets/img/grid/15.jpg',
			'./assets/img/grid/43.jpg', './assets/img/grid/44.jpg', './assets/img/grid/45.jpg', 
		]
			
	];

  constructor() { }

  ngOnInit(): void {
  	const numRows = this.gridImages.length;
  	for (let i = 0; i < numRows; i++) {
  		this.gridImages[i] = this.gridImages[i].sort((a, b) => {
  			const r1 = Math.round(Math.random()) * 2 - 1;
  			const res = Math.round(Math.random()) * r1;
  			console.log(res, r1)
  			return res;
  		})
  	}
  }

}
