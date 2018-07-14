import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BnkService } from '../../services/bnk.service';
import { Feed } from '../../models/feed';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

  feed: Feed

  constructor(private route: ActivatedRoute, private bnk: BnkService) { }

  ngOnInit() {
  }

}
