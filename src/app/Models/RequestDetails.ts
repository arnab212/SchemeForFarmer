
export interface RequestDetails
{
    requestId:number;
    aadharCardNumber?:string;
    cropType:string;
    cropName:string;
    fertilizerType:string;
    cropQuantity:number;
    soilPhCertificateDocument:File;
    msp:number;
    currentBid:number
}