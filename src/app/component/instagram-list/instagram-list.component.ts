import { Component, OnInit } from '@angular/core';
import { BnkService } from '../../services/bnk.service';
import { ActivatedRoute } from '@angular/router';
import { Feed, FeedItem } from '../../models/feed';

@Component({
  selector: 'app-instagram-list',
  templateUrl: './instagram-list.component.html',
  styleUrls: ['./instagram-list.component.css']
})
export class InstagramListComponent implements OnInit {

  feedItems: FeedItem[];

  constructor(private route: ActivatedRoute, private bnk: BnkService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('instagramId');

    this.bnk.instagram(id).subscribe(data => {
      this.feedItems = data.feeds.filter(data => { return data.thumbnail.endsWith(".jpg") });
    });
  }

}
