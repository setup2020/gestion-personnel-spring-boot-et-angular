import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfigService } from '../../services/config.service';
import { IFichePoste } from 'src/app/model/fiche-poste.model';
import { SpToastrService } from 'src/app/services/sp-toastr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'png-fiche-poste-add',
  templateUrl: './fiche-poste-add.component.html',
  styleUrls: ['./fiche-poste-add.component.css'],
})
export class FichePosteAddComponent implements OnInit {
  submitted = false;
  editForm = this.fb.group({
    description: ['', [Validators.required]],
    nom: ['', [Validators.required, Validators.minLength(3)]],
    mission: [''],
    profil: [''],
    connaissanceMarche: [0,Validators.required],
    connaissanceMetier: [0,Validators.required],
    connaissanceMilieu: [0,Validators.required],
    connaissanceMethode: [0,Validators.required],

    experienceMarche: [0,Validators.required],
    experienceMetier: [0,Validators.required],
    experienceMilieu: [0,Validators.required],
    experienceMethode: [0,Validators.required],
    experienceMenerale: [0,Validators.required],

    acculturation: [0,Validators.required],
    courtoisie: [0,Validators.required],
    relationnel: [0,Validators.required],
    integration: [0,Validators.required],

    resilience: [0,Validators.required],
    initiative: [0,Validators.required],
    critique: [0,Validators.required],
    equipe: [0,Validators.required],

    emotions: [0,Validators.required],
    coordination: [0,Validators.required],
    gestionEquipe: [0,Validators.required],
    decision: [0,Validators.required],

    procedure: [0,Validators.required],
    exigence: [0,Validators.required],
    normes: [0,Validators.required],
    morale: [0,Validators.required],

    id: [0],
  });

  constructor(
    private fb: FormBuilder,
    private configService:ConfigService,
    private toarstService:SpToastrService,
    private router:Router
    ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get f(): any {
    return this.editForm.controls;
  }

  save(): void {
    console.log(this.f);
    
    this.submitted=true;
    if(this.editForm.invalid){
      return;
    }
    const {
      id,
      connaissanceMarche,
      connaissanceMetier,
      connaissanceMilieu,
      connaissanceMethode,
      experienceMarche,
      experienceMetier,
      experienceMilieu,
      experienceMethode,
      experienceMenerale,
      acculturation,
      courtoisie,
      relationnel,
      integration,
      resilience,
      initiative,
      critique,
      equipe,
      emotions,
      coordination,
      gestionEquipe,
      decision,
      procedure,
      exigence,
      normes,
      morale,
      description,
      mission,
      profil,
      nom
    } = this.editForm.value;

    let fichePoste:IFichePoste={
      nom,
      profil,
      mission,
      id,
      connaissanceMarche,
      connaissanceMetier,
      connaissanceMilieu,
      connaissanceMethode,
      experienceMarche,
      experienceMetier,
      experienceMilieu,
      experienceMethode,
      experienceMenerale,
      acculturation,
      courtoisie,
      relationnel,
      integration,
      resilience,
      initiative,
      critique,
      equipe,
      emotions,
      coordination,
      gestionEquipe,
      decision,
      procedure,
      exigence,
      normes,
      morale,
      description
    }

    this.configService.createFichePoste(fichePoste).subscribe({
      next:()=>{
        this.router.navigate(['/config/fiche-poste']).then(()=>{
          this.toarstService.showSuccess("Enregistement effectué !!");

        });
      }
    })
  }
}
