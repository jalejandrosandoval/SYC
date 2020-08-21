import { InvoicesStatusModel } from '../InvoicesStatus/invoices-status-model';
import { ClientsModel } from '../Clients/clients-model';

export interface InvoicesModel {

    id_Factura: number,
    _IdClient: number,
    clients: ClientsModel[],
    codeStatus: string,
    invoicesStatus: InvoicesStatusModel[];
    valor: number,
    fechaFac: Date
    
}
