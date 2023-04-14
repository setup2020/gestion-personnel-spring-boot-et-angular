import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/admin/users/services/users.service';
import { User } from 'src/app/model/user.model';
import { CustomValidators } from '../validetors/CustomValidators';

@Component({
  selector: 'app-profile-shared',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input() user?: User;
  submitted = false;
  loading = false;
  constructor(
    private userService: UsersService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}
  editPaswordForm = this.fb.group({
    currentPassword: [null, [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
  });
  editForm = this.fb.group({
    lastname: ['', [Validators.required, Validators.minLength(3)]],
    firstname: [''],
    phone: [''],
    address: [''],
    skype: [''],
    teamViewer: [''],
    whatsapp: [''],
    email: ['', [Validators.required, Validators.email]],
  });

  ngOnInit(): void {
    this.editForm.get('lastname')?.setValue(this.user?.lastname);
    this.editForm.get('firstname')?.setValue(this.user?.firstname);
    this.editForm.get('phone')?.setValue(this.user?.phone);
    this.editForm.get('email')?.setValue(this.user?.email);
    this.editForm.get('address')?.setValue(this.user?.address);
  }

  get f(): any {
    return this.editPaswordForm?.controls;
  }
  savePwd(): void {
    console.log(this.f);

    this.submitted = true;
    if (this.editPaswordForm.invalid) {
      return;
    }

    const { currentPassword, password, confirmPassword } =
      this.editPaswordForm.value;

    if (password !== confirmPassword) {
      console.log(this.editForm.value);

      this.toastr.error('Les mots de passes ne sont pas identiques');
      return;
    }
    this.loading = true;
    this.userService
      .changedPwd({
        current_password: currentPassword,
        password: password,
        password_confirmation: confirmPassword,
      })
      .subscribe({
        next: (data: any) => {
          this.loading = false;
          this.submitted = false;
          this.editPaswordForm.reset();
          this.toastr.success('Modification effectué');
          this.router.navigate(['/']);
        },
        error: (error: any) => {
          this.loading = false;
          if (error.error.code === 422) {
            this.toastr.error(error.error.error);
          } else {
            this.toastr.error('Une Erreur c est produite');
          }
        },
      });
  }
}
