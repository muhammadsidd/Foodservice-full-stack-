import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { KitchensService } from '../../services/kitchens.service';

@Component({
  selector: 'app-kitchen-detail',
  templateUrl: './kitchen-detail.component.html',
  styleUrls: ['./kitchen-detail.component.css']
})
export class KitchenDetailComponent implements OnInit {
  id: any;
  kitchen: any;
  errorMsg: any;

  constructor(private kitchensService: KitchensService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");
    });

    this.kitchensService.getKitchen(this.id).subscribe(
      (data) => this.kitchen = data,
      (error) => this.errorMsg = error,
    );
  }
  
  kitchenList() {
    this.router.navigate(['/kitchens'])
  }
}
