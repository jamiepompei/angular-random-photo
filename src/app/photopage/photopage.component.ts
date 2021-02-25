import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photopage',
  templateUrl: './photopage.component.html',
  styleUrls: ['./photopage.component.css']
})
export class PhotopageComponent implements OnInit {
  url: string = ''

  constructor(private photoService: PhotoService) {
    this.fetchPhoto();
   }
  
   onClick(){
    this.fetchPhoto();
   }


  fetchPhoto(){
    this.photoService.getPhoto().subscribe(response => {
      this.url = response.urls.regular;
    });  
  }

  ngOnInit(): void {
  }

}
