import { Injectable } from "@angular/core";
import { SnapFace } from "../models/snap-face.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService{
    snapfaces: SnapFace[]=[
        {
        id:1,
        title:'Archibald',
        description:'Mon meilleur amis depuis tous petit',
        createDate:new Date(),
        snaps:60,
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        location:'paris',
      
        },
      {
        id:2,
        title:'Three mountain',
        description:'Un endroit magnifique pour les randonnée',
        createDate:new Date(),
        snaps:900,
        imageUrl:'https://www.irishamerica.com/wp-content/uploads/2016/10/FEATURE-Three_Rock_Mountain_Southern_Tor.jpg',
        location:'californie',
  
      },
      {
        id:3,
        title:'un bon repas',
        description:'Mmmh que c\'est bon !',
        createDate:new Date(),
        snaps:100,
        imageUrl:'https://tse3.mm.bing.net/th?id=OIP.ur3rFKWe-tQHnEOvzQbTkgHaE8&pid=Api&P=0',
  
      }
      ];
      getAllFaceSnaps(): SnapFace[]{
        return this.snapfaces;

      }


      getFaceSnapById(faceSnapId: number) : SnapFace{
        const snapFace = this.snapfaces.find(snapFace =>snapFace.id === faceSnapId);
        if (!snapFace) {
            throw  new Error('facesnap not found');
        }else {
            return snapFace;
        }

      }
      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const snapFace = this.getFaceSnapById(faceSnapId);
        snapType ==='snap' ? snapFace.snaps++ : snapFace.snaps-- ;
      }
     
  
  
}

