import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { TreeFormGroup } from "../form-group";


const fb = new FormBuilder();

export class LoginFormGroup extends TreeFormGroup {

  get email(): FormControl {
    return this.get('email') as FormControl;
  }

  get senha(): FormControl {
    return this.get('senha') as FormControl;
  }

  constructor() {
    super({
      email: fb.control('', [Validators.required]),
      senha: fb.control('', [Validators.required])
    })
  }
}
