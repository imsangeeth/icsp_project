import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-campaignview',
  templateUrl: './campaignview.component.html',
  styleUrls: ['./campaignview.component.css']
})
export class CampaignviewComponent implements OnInit {

  
  displayedColumns: string[] = ['Campaignname','Mode','ScheduleTime','ScheduleDate','CampaignDate','ServiceProvider'];
  exampleDatabase: ExampleHttpDao | null;
  data: GithubIssue[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  

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
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
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
  Campaignname: string;
  Mode: string;
  ScheduleTime: string;
  ScheduleDate: string;
  CampaignDate: string;
  ServiceProvider: string;
 
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDao {
  constructor(private http: HttpClient) {}

  getRepoIssues(sort: string = '342werd34', order: string = 'asc' , page: number): Observable<GithubApi> {

    console.log(sort);
    console.log(order);

    const href = 'http://localhost/IcspApi/Api/index.php/user/allcampaign';
    //const requestUrl ='http://localhost/IcspApi/Api/index.php/user/allcontacts';
   // const requestUrl =
      //  `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;
    const requestUrl =
        `${href}/${sort}/${order}/${page + 1}`;

    return this.http.get<GithubApi>(requestUrl);
  }

}
