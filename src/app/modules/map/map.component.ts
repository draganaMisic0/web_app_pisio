import { Component, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
    imports: [RouterOutlet]
    
  })

  export class MapComponent implements OnInit{

    constructor(private router: Router){}

    ngOnInit(): void {
        
    }

  }