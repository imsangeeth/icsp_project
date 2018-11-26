import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-viewservice',
  templateUrl: './viewservice.component.html',
  styleUrls: ['./viewservice.component.css']
})
export class ViewserviceComponent implements OnInit {

  displayedColumns: string[] = ['slno','ticket_id','type', 'phonenumber','department','assign','createdate','ticketStatus','view'];
  exampleDatabase: ExampleHttpDao | null;
  data: GithubIssue[] = [];
  name = 'Imp';
  assigns = '0';

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  searchval:string;
  selectedValue
  
  foods: Food[] = [
    {value: '0', viewValue: 'Assign name'},
    {value: '1', viewValue: 'Ram'},
    {value: '2', viewValue: 'Sangeeth'}
  ]; 

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.exampleDatabase = new ExampleHttpDao(this.http);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getRepoIssues(
            this.sort.active, this.sort.direction, this.paginator.pageIndex,this.name,this.assigns);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;
          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  }

  applyFilter(filterValue: string) {

    if(filterValue.trim().toLowerCase()!='')
    {
      this.searchval = filterValue.trim().toLowerCase();
    }else{
      this.searchval = 'Imp';
    }

    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this.exampleDatabase!.getRepoIssues(
          this.sort.active, this.sort.direction, this.paginator.pageIndex,this.searchval,this.assigns);
      }),
      map(data => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = data.total_count;
        return data.items;
      }),
      catchError(() => {
        this.isLoadingResults = false;
        // Catch if the GitHub API has reached its rate limit. Return empty data.
        this.isRateLimitReached = true;
        return observableOf([]);
      })
    ).subscribe(data => this.data = data);

  }

  assignchange(assignval:string)
  {
    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this.exampleDatabase!.getRepoIssues(
          this.sort.active, this.sort.direction, this.paginator.pageIndex,this.searchval,assignval);
      }),
      map(data => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = data.total_count;
        return data.items;
      }),
      catchError(() => {
        this.isLoadingResults = false;
        // Catch if the GitHub API has reached its rate limit. Return empty data.
        this.isRateLimitReached = true;
        return observableOf([]);
      })
    ).subscribe(data => this.data = data);

  }
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
 // customer_name: string;
  ticket_id: string;
  phonenumber: string;
  department: string;
  assign: string;
  duedate: string;
  ticketStatus: string;
  type:string;
  
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDao {
  constructor(private http: HttpClient) {}

 

  getRepoIssues(sort: string = '2d242uyz', order: string = 'asc' , page: number,search:string = 'Imp',assignsort:string = '0'): Observable<GithubApi> {

      console.log(name);
      console.log(page);
      console.log(sort);
      console.log(order);
      console.log(assignsort);

    const href = 'http://localhost/IcspApi/Api/index.php/user/allservices';
    //const requestUrl ='http://localhost/IcspApi/Api/index.php/user/allcontacts';
   // const requestUrl =
      //  `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;
    const requestUrl =
        `${href}/${sort}/${search}/${assignsort}/${page + 1}/${order}`;

    return this.http.get<GithubApi>(requestUrl);
  }

}
