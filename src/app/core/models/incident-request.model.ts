import { IncidentSubtype } from "./incident-subtype.model";
import { IncidentType } from "./incident-type.model";
import {Location} from "./location.model";


export interface IncidentRequest{

    id: number | null; 
    description : string;  
    incidentSubtype : IncidentSubtype; 
    photoLink: string | null; 
    longitude : number; 
    latitude: number;
    approved: number;
    dateOfReport: string;

}