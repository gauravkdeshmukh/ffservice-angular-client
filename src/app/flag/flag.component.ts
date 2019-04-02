import { Component, OnInit, Input } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl
} from "@angular/forms";
import { FfService } from '../ff.service';
import { map } from 'rxjs/operators';
@Component({
  selector: "app-flag",
  templateUrl: "./flag.component.html",
  styleUrls: ["./flag.component.scss"]
})

export class FlagComponent implements OnInit {
  @Input() flagValue: number[];
  @Input() flags: any;
  @Input() flagName: string[];

  form: FormGroup;


  ngOnInit() {
    // keeping this static as there is no requirement for dynamic regions.
    this.flags = [
      { id: 0, name: "ASIA" },
      { id: 1, name: "KOREA" },
      { id: 2, name: "EUROPE" },
      { id: 3, name: "JAPAN" },
      { id: 4, name: "AMERICA" }
    ];
    this.addCheckboxes(this.flagValue);
  }

  constructor(private formBuilder: FormBuilder, private ffService:FfService) {
    this.form = this.formBuilder.group({
      flags: new FormArray([])
    });
  }

  private addCheckboxes(flagValue: number[]) {
    this.flags.map((o, i) => {
      const control = new FormControl(flagValue[i] === 1);
      (this.form.controls.flags as FormArray).push(control);
    });
  }

  submit() {
    const selectedFlagIds = this.form.value.flags
      .map((v, i) => ( v ? 1 : 0))
      .filter(v => v !== null);
      const flag = {
        name: this.flagName,
        value: parseInt(selectedFlagIds.join(''),2),
      };
      return this.ffService.post(flag).subscribe();
  }
}
