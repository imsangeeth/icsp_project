import { Component, OnInit , ViewChild} from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {MatPaginator, MatSort,MatSortable, MatTableDataSource} from '@angular/material';


/** Constants used to fill up our data base. */
//const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  //'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
//const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  //'//Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  //'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

/**
 * @title Data table with sorting, pagination, and filtering.
 */



@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrls: ['./viewcustomer.component.css']
})
export class ViewcustomerComponent implements OnInit {

   dataSource;
  displayedColums = ['name', 'username', 'email'];

  //displayedColumns: string[] = ['id', 'name', 'email', 'phonenumber'];
  //dataSource: MatTableDataSource<UserData>;

 // @ViewChild(MatPaginator) paginator: MatPaginator;
 // @ViewChild(MatSort) sort: MatSort;

 // users$: Object;

  constructor(private data: DataService) {
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
   // this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    
    //this.dataSource.paginator = this.paginator;
   // this.dataSource.sort = this.sort;

    this.data.getUser().subscribe(
      results => {
        if(!results){
          return
        }
        this.dataSource = new MatTableDataSource(results);
        console.log(results);
      }//this.users$ = data
);
    
  }

  

  


}


