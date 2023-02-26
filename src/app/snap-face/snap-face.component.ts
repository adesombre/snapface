import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html',
  styleUrls: ['./snap-face.component.scss']
})
export class SnapFaceComponent implements OnInit {
    title!: string;
    description!: string;
    createDate!:Date;
    snaps!: number;
    imageUrl!:string;
   ngOnInit(){
    this.title= "Archibald";
    this.description= "Mon meilleur amis depuis tous petit";
    this.createDate = new Date();
    this.snaps= 6;
    this.imageUrl="https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg"
   }
}
