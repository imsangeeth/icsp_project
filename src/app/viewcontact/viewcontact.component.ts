import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit {

  displayedColumns: string[] = ['slno','name', 'insurancecard', 'companyname', 'PolicyNumber','InsuredAmount','View'];
  exampleDatabase: ExampleHttpDao | null;
  data: GithubIssue[] = [];
  name = 'Imp';
  searchval:string;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-edit-24px.svg'));

  }

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
            this.sort.active, this.sort.direction, this.paginator.pageIndex,this.name);
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
          this.sort.active, this.sort.direction, this.paginator.pageIndex,this.searchval);
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
  name: string;
  insurancecard: string;
  companyname: string;
  PolicyNumber: string;
  InsuredAmount: string;

  Edit:string;
  userid:string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDao {
  constructor(private http: HttpClient) {}

  getRepoIssues(sort: string = '2d242uyz', order: string = 'asc' , page: number,search:string = 'Imp'): Observable<GithubApi> {

    console.log(sort);
    console.log(order);


    const href = 'http://localhost/IcspApi/Api/index.php/user/allcontacts';
    //const requestUrl ='http://localhost/IcspApi/Api/index.php/user/allcontacts';
   // const requestUrl =
      //  `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;
    const requestUrl =
    `${href}/${sort}/${search}/${page + 1}/${order}`;

    return this.http.get<GithubApi>(requestUrl);
  }
}
