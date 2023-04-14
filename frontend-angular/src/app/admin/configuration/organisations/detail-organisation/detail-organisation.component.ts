import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../../services/config.service';
import { ILineUserPoste, ILineUserPosteDTO, IOrganisation, IPoste, IUser } from '../models/typeOrganisation';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'png-detail-organisation',
  templateUrl: './detail-organisation.component.html',
  styleUrls: ['./detail-organisation.component.css']
})
export class DetailOrganisationComponent implements OnInit {
  org!: IOrganisation;
  users:IUser[]=[];
  lineUserPoste:ILineUserPoste[]=[];
editForm=this.fb.group({
  libelle:[''],
  libelleEn:[''],
  responsable:[false]
})

editUserForm=this.fb.group({
  user:[''],
  poste:[''],
  lines:this.fb.array([])
})
  postes: IPoste[]=[];
  organisations: IOrganisation[]=[];
  constructor(private fb:FormBuilder, private activedRouted:ActivatedRoute,private configService:ConfigService) { }

  ngOnInit(): void {

    this.configService.getUsers().subscribe({
      next:(res:IUser[])=>{
     

        this.users=res;
        
      }
    })

    this.configService.getAllSousOrganisation(this.activedRouted.snapshot.params['id']).subscribe({
      next:(res:IOrganisation[])=>{
        console.log(res);
        
        this.organisations=res;
      }
    })
    this.configService.getOrg(this.activedRouted.snapshot.params['id']).subscribe({
      next:(res:IOrganisation)=>{
       
        this.org=res;
        this.configService.getOrgPoste(this.org.id!).subscribe({
          next:(res:IPoste[])=>{
            this.postes=res;
            this.UserOrg();
           
          }
        })
        
      }
    })

  }

  save():void{
    let {libelle,libelleEn,responsable}=this.editForm.value;
      let poste:IPoste={libelle,libelleEn,organisationDTO:this.org,id:null,responsable}
    this.configService.createPoste(poste).subscribe({
      next:(res:IPoste)=>{
        this.postes.push(res);
      }
    })
  }

  saveUser():void{
    const {lines}=this.editUserForm.value;
    let liness:ILineUserPosteDTO={
      lineUserPosteDTO:[]
    };

    liness.lineUserPosteDTO=[];
    for (let index = 0; index < lines.length; index++) {
        liness.lineUserPosteDTO.push(lines[index].user)
    }

    this.configService.createUserOrg(liness).subscribe({
      next:(res:any)=>{
       this.UserOrg();
       this.editUserForm.reset();
       this.lines.clear();
        
      },
      error:()=>{

      }
    })
   
  }


  get lines():FormArray{
    return this.editUserForm.controls['lines'] as FormArray;
  }

  addLine():void{
    const {user,poste}=this.editUserForm.value;
     let userPoste:ILineUserPoste={userDTO:user,posteDTO:poste,responsable:true}
    const userForm=this.fb.group({
      user:[userPoste]
    });
    this.lines.push(userForm);
   
    
  }

  deleteUser(index:number):void{
    this.lines.removeAt(index);
  }


  UserOrg():void{
       

    let ids="";
    this.postes.forEach(p=>{
     
      ids+=p.id+",";
    });
   
    
    this.configService.getAllUserOrganisation(ids).subscribe({
      next:(res:any)=>{
      
        this.lineUserPoste=res;
        
      }
    })
  }
}
