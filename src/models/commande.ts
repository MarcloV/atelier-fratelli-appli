import { Pizza } from "./pizza";
import { Frais } from "./frais";
import { Legumes } from "./legumes";

export interface Commande {
    date: string;
    focaccia: string;
    pizza: Pizza;
    frais: Frais;
    legumes: Legumes;
    vinaigrette: string;
}