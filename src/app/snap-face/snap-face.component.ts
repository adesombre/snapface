import { Component ,OnInit,Input} from '@angular/core';
import { Router } from '@angular/router';
import { SnapFace } from '../models/snap-face.model';
import { FaceSnapService } from '../services/face-snaps.service';
@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html',
  styleUrls: ['./snap-face.component.scss']
})
export class SnapFaceComponent implements OnInit {
    @Input() snapFace!: SnapFace;
    buttonText!: string;
    
   constructor(private faceSnapsService:FaceSnapService,private router:Router){} 
   ngOnInit(){
    
    this.buttonText= "Oh snap!"
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
  
  onViewFaceSnap(){
      this.router.navigateByUrl(`facesnaps/${this.snapFace.id}`)
  }
    
}
