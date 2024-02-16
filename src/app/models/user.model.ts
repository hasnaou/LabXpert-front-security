export enum UserRole {
    Technicien = 'Technicien',
    Preleveur = 'Preleveur',
    Responsable = 'Responsable'
}

export interface User {
    id?: any;
    nom?: string;
    prenom?: string;
    dateNaissance?: Date;
    adresse?: string;
    sexe?: string;
    tel?: string;
    nomUtilisateur?: string;
    password?: string;
    role?: UserRole;
}
