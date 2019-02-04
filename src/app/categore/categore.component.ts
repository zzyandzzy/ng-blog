import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CardType} from '../CardType';

@Component({
  selector: 'app-categore',
  templateUrl: './categore.component.html',
  styleUrls: ['./categore.component.css']
})
export class CategoreComponent implements OnInit {
  categorie: string;
  postList: CardType[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.categorie = this.route.snapshot.paramMap.get('c');
    document.body.style.backgroundColor = '#f7f7f7';
  }

}
