import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '@ng-mf-personal-profile/shared/services';
import { SharedModule } from '@ng-mf-personal-profile/shared/modules';

@Component({
  standalone: true,
  imports: [CommonModule, SharedModule],
  selector: 'app-home-entry',
  templateUrl: './entry.component.html',

})
export class RemoteEntryComponent implements OnInit, AfterViewInit{
  @ViewChild('gitStatsContainer') gitStatsContainer!: ElementRef;
  gitStats = ``;
  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.dataService.getGitStats('iarunpaul').subscribe(
      (resp) => {
        this.gitStats = resp;
        this.updateGitStats();
      },
      (err) => {
        console.error("There was a problem fetching git data at this time. Please try again later.", err);
      }
    );
  }

  ngAfterViewInit(): void {
    this.updateGitStats();
  }

  private updateGitStats(): void {
    if (this.gitStatsContainer && this.gitStats) {
      this.gitStatsContainer.nativeElement.innerHTML = this.gitStats;
    }
  }
}
