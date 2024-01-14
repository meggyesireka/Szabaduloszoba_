import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-reslist',
  standalone: true,
  imports: [AppComponent, CommonModule, HomeComponent,RouterLink,RouterLinkActive,RouterOutlet,RouterModule],
  templateUrl: './reslist.component.html',
  styleUrl: './reslist.component.css'
})
export class ReslistComponent implements OnInit {
  foglalasok: any;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
      this.getFoglalasok();
  }
  getFoglalasok() {
    this.api.getFoglalasok().subscribe({
      next: data => {
        this.foglalasok = data;
      },
      error: err => {
        console.log('Hiba! Adatok betöltése sikertelen!');
      }
    });
}

}