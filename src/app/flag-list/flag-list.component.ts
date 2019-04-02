import { Component, OnInit } from "@angular/core";
import { FfService } from '../ff.service';

@Component({
  selector: "app-flag-list",
  templateUrl: "./flag-list.component.html",
  styleUrls: ["./flag-list.component.scss"]
})
export class FlagListComponent implements OnInit {
  items: any;
  flags: any;
  constructor(private ffService:FfService) {}

  ngOnInit() {
    this.items = this.ffService.get();
        // keeping this static as there is no requirement for dynamic regions.
        this.flags = [
          { id: 0, name: "Asia" },
          { id: 1, name: "Korea" },
          { id: 2, name: "Europe" },
          { id: 3, name: "Japan" },
          { id: 4, name: "America" }
        ];
  }
}
