import { Component, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SnapFace } from '../models/snap-face.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  snapFace!: SnapFace;
  buttonText!: string;
  
 constructor(private faceSnapsService:FaceSnapService,private route:ActivatedRoute){} 
 
 ngOnInit(){
  
  this.buttonText= "Oh snap!"
  const faceSnapId =+this.route.snapshot.params['id'];
  this.snapFace =this.faceSnapsService.getFaceSnapById(faceSnapId)

 }
 onSnap(){
  if (this.buttonText === "Oh snap!"){
     this.faceSnapsService.snapFaceSnapById(this.snapFace.id,'snap');
     this.buttonText = "Opps, unSnap";
 }else {
    this.faceSnapsService.snapFaceSnapById(this.snapFace.id, 'unsnap')
    this.buttonText="Oh snap!";
  }
}



}
