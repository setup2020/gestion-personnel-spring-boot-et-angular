import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { FormBuilder } from '@angular/forms';
import { ILineUserPoste, IOrganisation, IPoste, ITask, ITypeOrganisation } from '../models/typeOrganisation';
import { Router } from '@angular/router';
import { IPost } from 'src/app/model/post.model';

@Component({
  selector: 'png-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.css']
})
export class OrganisationsComponent implements OnInit {
  searchInput!:number;
  inputChamp!:any;
  task!:string;
  res: any[]=[];

  editForm=this.fb.group({
    parent:[''],
    type:[''],
    libelle:[''],
    libelleEn:[''],
    children:['']
  })
  type: ITypeOrganisation[]=[];
  postes: ILineUserPoste[]=[];
  sousOrganisations: IOrganisation[]=[];
  posteSelect!: ILineUserPoste;
  tasks: ITask[];
  tasksValidation: ITask[];
  tasksSousOrganisation: ITask[];

  constructor(private router:Router, private typeOrg:ConfigService,private fb:FormBuilder) {
    this.tasks=[];
    this.tasksValidation=[];
    this.tasksSousOrganisation=[];
   }

  ngOnInit(): void {
    this.typeOrg.getAllOrganisation().subscribe({
      next:(res:any)=>{
      
        this.res=res;
        
      }
    })

    this.typeOrg.getAllTypeOrganisation().subscribe({
      next:(res:any)=>{
      

        this.type=res;
        
      }
    });

   
  }

  save():void{
    const {hasChild,parent,type,libelleEn,libelle,children}=this.editForm.value;

   let org:IOrganisation={
    libelle,
    libelleEn,
    typeOrganisationDTO:{...type},
    parent:parent? parent.id:null,
    organisationDTOList:[]
   }

   

   this.typeOrg.createOrg(org).subscribe({
    next:(res:any)=>{
 
      this.res.push(res)
      this.editForm.reset();
      
    }
   })
  }

  go(org:IOrganisation):void{
      this.router.navigate(['/config/organisations',org.id])
  }


  search():void{
  
    this.tasks=[];
    this.typeOrg.getAllPosteUser(this.searchInput).subscribe({
      next:(res:ILineUserPoste[])=>{
       

        this.postes=res;
        this.postes.map(p=>{
         p.boss= p.posteDTO?.organisationDTO?.parent?false:true;

         return p;
        })
        
      }
    })
    

  }

  getPost(p:ILineUserPoste):void{
    this.posteSelect=p;
    console.log("Boss",this.posteSelect);
   
    this.tasks=[];
    if(this.posteSelect.posteDTO){
      this.typeOrg.getAllTasksOrganisationChef(this.posteSelect.posteDTO.organisationDTO?.id!).subscribe({
        next:(res:ITask[])=>{
          this.tasks=res;
          this.tasks.map(t=>{
            t.pointA=Number(t.pointA);
            t.pointB=Number(t.pointB);
          })
          console.log(this.tasks);
        }

       
      })
     
      this.typeOrg.getAllTasksOfValidationOrganisationChef(this.posteSelect.posteDTO.organisationDTO?.id!).subscribe({
        next:(res:ITask[])=>{
          this.tasksValidation=res;
        }
      })

      this.typeOrg.getAllTasksAttributeAMaSousOrganisation(this.posteSelect.posteDTO.organisationDTO?.id!).subscribe({
        next:(res:ITask[])=>{
          this.tasksSousOrganisation=res;
        }
      })
    }
    
    this.typeOrg.getAllSousOrganisation(p.posteDTO?.organisationDTO?.id!).subscribe({
      next:(res:IOrganisation[])=>{
     
        this.sousOrganisations=res;
        
      }
    })
  }

  createTask():void{
   
 
    let task:ITask={
      name:this.task,
      pointA:this.posteSelect.posteDTO?.organisationDTO?.id  ,
      pointB:this.inputChamp==="me"?this.posteSelect.posteDTO?.organisationDTO?.id:this.inputChamp,
      status:this.posteSelect.boss?"TO DO": "OPENED"
    };
    
    

    this.typeOrg.createTask(task).subscribe({
      next:(res:any)=>{
        console.log(res);
        
      }
    })
    
  }
}
