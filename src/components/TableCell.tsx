import { useState } from 'react';

export enum CellType {
  INSIDE_CENTER = 0
}

export enum CellClickPosition {
  CENTER = 0,
  TOP = 1,
  BOTTOM = 2,
  LEFT = 3,
  RIGHT = 4
}

export interface TableCellProps {
  cellType?: CellType;
  value: string;
  color: string;
  height?: string;
  width?: string;
  paddingTop?: string;
}

export const InsideCell = (props: TableCellProps) => {
  return (
    <TableGridCell
      color={props.color}
      value={props.value}
      height="50px"
      width="35px"
      cellType={props.cellType}
    />
  );
};

export const OutsideTableGridCell = (props: TableCellProps) => {
  return (
    <TableGridCell
      color={props.color}
      value={props.value}
      height="30px"
      width="146px"
      paddingTop="5px"
    />
  );
};

export const SingleOutsideTableGridCell = (props: TableCellProps) => {
  return (
    <TableGridCell
      color={props.color}
      value={props.value}
      height="30px"
      width="72px"
      paddingTop="5px"
    />
  );
};

export const TableGridCell = (props: TableCellProps) => {
  const [isHover, setIsHover] = useState(false);
  const [cellSection, setCellSection] = useState<CellClickPosition | null>(
    null
  );

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
    setCellSection(null);
  };

  const handleMouseMove = (event: any) => {
    if (isHover) {
      const divRect = event.target.getBoundingClientRect();
      const mouseX = event.clientX - divRect.left;
      const mouseY = event.clientY - divRect.top;

      const position = calculatePosition(mouseX, mouseY, props.cellType);
      setCellSection(position ?? null);
    }
  };

  const calculatePosition = (
    x: number,
    y: number,
    type: CellType | undefined
  ) => {
    switch (type) {
      case CellType.INSIDE_CENTER: {
        if (x > 8 && x < 24 && y < 7) {
          return CellClickPosition.TOP;
        }
        if (x > 8 && x < 24 && y > 40) {
          return CellClickPosition.BOTTOM;
        }
        if (x < 7 && y > 17 && y < 30) {
          return CellClickPosition.LEFT;
        }
        if (x > 27 && y > 17 && y < 30) {
          return CellClickPosition.RIGHT;
        }
        return CellClickPosition.CENTER;
      }
    }
  };

  const handleMouseClick = (event: any) => {
    const divRect = event.target.getBoundingClientRect();
    const mouseX = event.clientX - divRect.left;
    const mouseY = event.clientY - divRect.top;

    const position = calculatePosition(mouseX, mouseY, props.cellType);

    if (position != null) {
      //   console.log(`(${mouseX}, ${mouseY})`);
      console.log(`Value: ${props.value}, Position: ${position}`);
    } else {
      console.log(`Value: ${props.value}, Position: ${'center'}`);
    }
  };

  const hoveredBetSelection = (cellSection: CellClickPosition | null) => {
    return (
      <div
        style={{
          position: 'absolute',
          width: '12px',
          height: '12px',
          border: '1px dotted yellow'
        }}
      ></div>
    );
  };

  return (
    <div
      style={{
        height: props.height,
        width: props.width,
        backgroundColor: props.color,
        border: '1px solid white',
        WebkitUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={handleMouseClick}
    >
      <div
        style={{
          fontSize: '11pt',
          paddingTop: props.paddingTop ?? '14px'
        }}
      >
        <strong
          style={{ color: isHover ? 'gray' : 'white' }}
        >{`${props.value}`}</strong>
      </div>
      {isHover && hoveredBetSelection(cellSection)}
    </div>
  );
};
