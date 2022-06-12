import { Cell } from './../Cell';
import { Colors } from './../Colors';
import { Figure, FigureNames } from './Figure';
import blacklogo from '../../assets/black-bishop.png';
import whitelogo from '../../assets/white-bishop.png';

export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
        this.name = FigureNames.BISHOP;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false;
        } else if (this.cell.isEmptyDiagonal(target)) {
            return true;
        } else {
            return false;
        }
    }
};