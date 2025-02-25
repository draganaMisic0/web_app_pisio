import { IncidentType } from "./incident-type.model";


export interface IncidentSubtype{

    id: number; 
    name: string; 
    incidentType: IncidentType;
}