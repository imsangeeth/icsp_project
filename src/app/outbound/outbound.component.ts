import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-outbound',
  templateUrl: './outbound.component.html',
  styleUrls: ['./outbound.component.css']
})
export class OutboundComponent implements OnInit {

  spinnloder : boolean = false;
  fileToUpload
  msg : string = '';
  bgcolor :string = '';
  msgview : boolean = false;
  totalcount : string = '';
  totalinsert : string = '';

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  onFileChange(files: FileList) {

    //console.log(files.item(0));
    this.spinnloder = true; 
    this.fileToUpload = files.item(0); 
    
    let formData = new FormData(); 
    formData.append('file', this.fileToUpload, this.fileToUpload.name); 

    this.data.fileupload(formData).subscribe((response) => {
      this.spinnloder = false; 
      this.totalcount = response['totalcount'];
      this.totalinsert = response['totalinsert'];
      this.msg = response['msg'];
      this.bgcolor = response['bgcolor'];
      this.msgview = true;
      //console.log(response);
    });

}

msgclose()
{
 this.msgview = false;
}

}
