import { Component, Input } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { defaultImage } from './default-image.config';

@Component({
  selector: 'upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class FileUploadComponent {
  @Input() isForUpload = true;
  eventWithEveryFiles: any;
  imageChangedEvent: any;
  @Input() urls = [defaultImage];
  croppers = [];
  cropper: CropperPosition;

  selectedImageIndex = 0;

  constructor(private storage: AngularFireStorage,
              private db: AngularFirestore) { }

  fileChangeEvent(event: any): void {
    this.eventWithEveryFiles = event;
    this.imageChangedEvent = event.target.files.item(0);
    const file = this.imageChangedEvent;
    this.initDetectChanges();

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }
  }

  imageCropped(image: { croppedImage: string, cropper: CropperPosition }) {
    console.log(image);
    const files: FileList = this.eventWithEveryFiles.target.files;
    this.urls[this.selectedImageIndex] = image.croppedImage;
    this.croppers[this.selectedImageIndex] = { ...image.cropper };
    const file = files.item(0);
    this.storage.ref(`/test/${file.name}`)
        .putString(image.croppedImage.split('base64,')[1], 'base64', { contentType: 'image/png' });
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
    this.imageChangedEvent = this.eventWithEveryFiles.target.files.item(index);
    this.cropper = this.croppers[index] ? this.croppers[index] : null;
  }

  initDetectChanges() {
    const files: any = this.eventWithEveryFiles.target.files;
    this.urls = [];
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
          this.croppers.push(null);
        };
        reader.readAsDataURL(file);
      }
    }
  }
}

export interface CropperPosition {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}
