import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeroesComponent,MessagesComponent,RouterLink,HttpClientInMemoryWebApiModule,InMemoryDataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello World';
}
