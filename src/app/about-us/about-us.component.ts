import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router.url);

    this.route.queryParams.subscribe((res: any) => {
      console.log(res);
      if (res.data == "comefromfooter") {
        console.log("ddddd");
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    })
  }

}
