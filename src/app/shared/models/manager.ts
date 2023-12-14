import { AuthCredentials } from "./auth-credentials";
import { TrainingCenter } from "./training-center";

export interface Manager {
    id: number,
    firstName?: string,
    lastName?: string,
    dogTrainingCenter?: TrainingCenter,
    authCredential?: AuthCredentials
}

export interface ManagerViewModel {
    id: number,
    firstName?: string,
    lastName?: string,
    dogTrainingCenterName?: string
    login?: string
}