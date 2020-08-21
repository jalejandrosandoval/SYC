import { InvoicesStatusModel } from '../InvoicesStatus/invoices-status-model';
import { ClientsModel } from '../Clients/clients-model';

export interface InvoicesModel {

    id_Factura: number,
    _IdClient: number,
    clients: ClientsModel[],
    codeStatus: number,
    invoicesStatus: InvoicesStatusModel[];
    valor: number,
    fechaFac: Date

}
