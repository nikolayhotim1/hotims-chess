import React, { FC, useEffect, useState } from 'react';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import CellComponent from './CallComponent';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    function click(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMovee(cell)) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
        } else  {
            setSelectedCell(cell);
        }
    }

    function highlightCells() {
        board.highlightCells(selectedCell);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    useEffect(() => {
        highlightCells();
    }, [selectedCell]);

    return (
        <div className='board'>
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent
                            cell={cell}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                            click={click}
                            key={cell.id}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponent;