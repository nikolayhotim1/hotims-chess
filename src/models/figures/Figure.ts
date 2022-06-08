import { Cell } from './../Cell';
import { Colors } from './../Colors';
import logo from '../../assets/black-king.png';

export enum FigureNames {
    FIGURE = 'FIGURE',
    KING = 'KING',
    QUEEN = 'QUEEN',
    KNIGHT = 'KNIGHT',
    ROOK = 'ROOK',
    BISHOP = 'BISHOP',
    PAWN = 'PAWN'
};

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.logo = null;
        this.cell = cell;
        this.cell.figure = this;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }

    canMovee(target: Cell): boolean {
        if (target.figure?.color === this.color || target.figure?.name === FigureNames.KING) {
            return false;
        } else {
            return true;
        }
    }

    moveFigure(target: Cell) { }
};