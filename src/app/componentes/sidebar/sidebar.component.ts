import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  rpgIcon:any = "/assets/dragonhead.svg"
  homeIcon:any = "/assets/home.svg"
}
