import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member';
import { BnkService } from '../../services/bnk.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  members: Member[];

  constructor(private bnkService: BnkService) { }

  ngOnInit() {
    this.bnkService.list().subscribe(data => this.members = data);
  }

}
