import { PageRequest, Page } from "../services/pagination/page";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { Hotel } from "./hotel";
import { Injectable } from "@angular/core";
import { RequestManager } from '../services/requestManager';
import { environment } from '../../environments/environment'

export interface HotelQuery {
  search: string;
  starsFilter: number[];
}

@Injectable({ providedIn: "root" })
export class HotelService {
  hoteles = [{_id: "",   
    name: "",
    stars: 0,
    price: 0,
    image: "",  
    amenities: []
  }];

  constructor(private request: RequestManager) { }

  setHoteles(hotelesInfo:any[]){
    this.hoteles=hotelesInfo;
  }

   page(request: PageRequest<Hotel>, query: HotelQuery): Observable<Page<Hotel>> {
    // fake pagination, do your server request here instead
    let filteredHotels = this.hoteles;
    
    let { search, starsFilter } = query;
    if (search) {
      search = search.toLowerCase();
      filteredHotels = filteredHotels.filter(
        ({ name, price }) =>
          name.toLowerCase().includes(search) ||
          String(price).toLowerCase().includes(search)
      );
    }
    if(starsFilter){
        filteredHotels = filteredHotels.filter(hotel => starsFilter.find(s => s === hotel.stars))
    }
    
    filteredHotels = [...filteredHotels].sort((a, b) => {
      const propA = a[request.sort.property]
      const propB = b[request.sort.property]
      let result
      if (typeof propA === 'string') {
        result = propA.toLowerCase().localeCompare(propB.toString().toLowerCase())
      } else {
        result = propA as any - (propB as any)
      }
      const factor = request.sort.order == 'asc' ? 1 : -1
      return result * factor
    })
    const start = request.page * request.size;
    const end = start + request.size;
    const pageHotels = filteredHotels.slice(start, end);
    const page = {
      content: pageHotels,
      number: request.page,
      size: pageHotels.length,
      totalElements: filteredHotels.length
    };
    return of(page).pipe(delay(500));
  }

 
}
