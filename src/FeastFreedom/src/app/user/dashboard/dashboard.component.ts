import { Component, OnInit } from '@angular/core';
import { ProvidersService } from 'src/app/DIservices/providers.service';
import { KitchensService } from 'src/app/kitchens/services/kitchens.service';
import { Kitchen } from '../../DIservices/kitchen';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public kitchens: any;
  public error = null;
  public featured: Kitchen[] | undefined;

  constructor(private kitchensService: KitchensService) {
    this.kitchensService.getFeaturedKitchens().subscribe(
      (data) => (this.kitchens = data),
      (error) => (this.error = error),
      () => {
        console.log('Featured kitchens.', this.kitchens);
        this.featured = this.kitchens.filter(
          (kitchen: any) => kitchen.featured
        );
      }
    );
  }

  ngOnInit(): void {}
}
