import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { FormBuilder } from '@angular/forms';
import { ITypeOrganisation } from '../models/typeOrganisation';

@Component({
  selector: 'png-type-organisation',
  templateUrl: './type-organisation.component.html',
  styleUrls: ['./type-organisation.component.css']
})
export class TypeOrganisationComponent implements OnInit {
  res: any[]=[];

  editForm=this.fb.group({
    hasChild:[false],
    hasParent:[false],
    libelle:[''],
    libelleEn:['']
  })

  constructor(private typeOrg:ConfigService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.typeOrg.getAllTypeOrganisation().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.res=res;
        
      }
    })

    
  }

  save():void{
    const {hasChild,hasParent,libelle,libelleEn}=this.editForm.value;

   let typeOrganisation:ITypeOrganisation={
    hasChild,
    hasParent,
    libelle,
    libelleEn
   }
   console.log(typeOrganisation);
   

   this.typeOrg.createTypeOrg(typeOrganisation).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.res.push(res)
      this.editForm.reset();
      
    }
   })
  }



}
