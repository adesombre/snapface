import { Component ,OnInit} from '@angular/core';
import { SnapFace}  from '../models/snap-face.model'
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit{
  snapfaces!: SnapFace[];
  constructor(private faceSnapService: FaceSnapService){ }
  ngOnInit() {
    this.snapfaces =this.faceSnapService.getAllFaceSnaps();
 }
}
