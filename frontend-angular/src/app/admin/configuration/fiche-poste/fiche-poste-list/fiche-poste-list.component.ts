import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { IFichePoste } from 'src/app/model/fiche-poste.model';
import { SpToastrService } from 'src/app/services/sp-toastr.service';

@Component({
  selector: 'png-fiche-poste-list',
  templateUrl: './fiche-poste-list.component.html',
  styleUrls: ['./fiche-poste-list.component.css']
})
export class FichePosteListComponent implements OnInit {
  fichePostes: IFichePoste[]=[];

  constructor(  private configService:ConfigService,private toarstService:SpToastrService) { }

  ngOnInit(): void {
    this.load();
   
  }

 
  remove(f:IFichePoste):void{
    this.configService.deleteFichePoste(f.id!).subscribe({
      next:()=>{
        this.fichePostes=this.fichePostes.filter(fp=>fp.id!==f.id);
        this.toarstService.showSuccess("Suppression effectuée !!");
        this.load();

      },
      error:()=>{
        this.toarstService.showError("Une erreur c'est produite !!");
      }
    })
  }

  load():void{
    this.configService.getAllFichePoste().subscribe({
      next:(res:IFichePoste[])=>{
        this.fichePostes=res;
      }
    })
  }
}
