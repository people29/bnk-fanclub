import { Component, OnInit, Input } from '@angular/core';
import { BnkService } from '../../services/bnk.service';
import { Member } from '../../models/member';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Url } from '../../validators/url';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  memberForm: FormGroup;
  member: Member;

  constructor(private bnkService: BnkService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.bnkService.getMember(id).subscribe(data => {
      this.member = data;
      this.memberForm = this.fb.group({
        _id: data._id,
        name: [data.name, Validators.required],
        imgUrl: [data.imgUrl, [Validators.required, Url.validate]],
        instagramId: data.instagramId
      });
    });
  }

  reset() {
    this.memberForm.reset(this.member);
  }

  save() {
    if (this.memberForm.valid) {
      this.bnkService.save(this.memberForm.value).subscribe(() => {
        this.router.navigate(['/admin']);
      }, err => {
        alert(err.message);
      });
    } else {
      console.log(this.memberForm.get('imgUrl').getError('url'));
      alert("Sad!!");
    }
  }

}
