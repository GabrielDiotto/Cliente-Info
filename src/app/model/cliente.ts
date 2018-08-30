import { DecimalPipe } from "@angular/common";

export default class Cliente
{
    public id: string;
    public nome: string;
    public dataNascimento: Date;
    public salario: DecimalPipe;
}