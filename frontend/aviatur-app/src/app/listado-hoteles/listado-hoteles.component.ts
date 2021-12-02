import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sort } from '../services/pagination/page';
import { PaginatedDataSource } from '../services/pagination/paginated-datasource';
import { RequestManager } from '../services/requestManager';
import { environment } from './../../environments/environment'
import { Hotel } from './hotel';
import { HotelQuery, HotelService } from './hotel.service'
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-listado-hoteles',
  templateUrl: './listado-hoteles.component.html',
  styleUrls: ['./listado-hoteles.component.scss']
})

export class ListadoHotelesComponent implements OnInit {
  starsArray:any[] =[];
  allStars = true;
  mobile = false;

  public innerWidth: any;

  datosHoteles: Hotel[]=[{
    "_id": "249942",
    "name": "Hotel Stefanos",
    "stars": 3,
    "price": 994.18,
    "image": "4900059_30_b.jpg",
    "amenities": [
      "safety-box",
      "nightclub",
      "deep-soaking-bathtub",
      "beach",
      "business-center"
    ]
  }];
  dataSource: MatTableDataSource<Hotel> = new MatTableDataSource();
  obs: Observable<Hotel[]> = Object();

  stars: any[] = [];

  displayedColumns = ['name']
  initialSort: Sort<Hotel> = { property: 'name', order: 'asc' }
  
  data = new PaginatedDataSource<Hotel, HotelQuery>(
    (request, query) => this.hoteles.page(request, query),
    this.initialSort,
    { search: '', starsFilter: [1,2,3,4,5] },
    100
  )
  
  
  constructor(private hoteles: HotelService, private request: RequestManager, private changeDetectorRef: ChangeDetectorRef) {
    for (let i of [1,2,3,4,5]){
      let star = {
        id: i,
        isSelected: false,
        name: "check"+i+1
      }
      this.stars.push(star)
    }
    this.hoteles.setHoteles(this.datosHoteles); 
    this.cargarDatos(); 
   
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 1024){
        this.mobile = true;
    }else{
      this.mobile = false;
    }
  }

  validarChecks(id:number) {    
    this.starsArray = this.stars.filter(t => t.isSelected); 
    this.starsArray = this.starsArray.map ((t) => t.id);        
     if (this.starsArray.length  > 0) {
       this.allStars= false;   
       this.data.queryBy({starsFilter: this.starsArray});     
    } else {
      this.allStars = true;
      this.data.queryBy({starsFilter: [1,2,3,4,5]}); 
    } 
  }

  vaciarChecks() {
    if (this.allStars) {
      this.stars = this.stars.map(option => ({ ...option, ...{ isSelected: false } }));
      this.data.queryBy({starsFilter: [1,2,3,4,5]}); 
    }
  }

  cargarDatos(){
    this.request.get(environment.AVIATUR_SERVICE, `hoteles`)
        .subscribe((datosInfoHoteles: any) => {
          this.hoteles.setHoteles(datosInfoHoteles.Data); 
          this.datosHoteles = datosInfoHoteles.Data;
          this.data = new PaginatedDataSource<Hotel, HotelQuery>(
            (request, query) => this.hoteles.page(request, query),
            this.initialSort,
            { search: '', starsFilter:[1,2,3,4,5] },
            10
          )
          
          
        });
  }

  Arr = Array; //Array type captured in a variable
  ngOnInit() {

    this.onResize("");
    this.changeDetectorRef.detectChanges();
      this.innerWidth = window.innerWidth;
      this.cargarDatos(); 
      this.obs = this.data.connect2();
  }

}
