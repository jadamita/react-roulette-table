import { Container, Row, Col } from 'react-grid-system';
import {
  CellType,
  InsideCell,
  OutsideTableGridCell,
  SingleOutsideTableGridCell,
  TableGridCell
} from './TableCell';

export interface GameTableProps {
  colorOne: string;
  colorTwo: string;
  tableColor: string;
}

export const GameTable = (props: GameTableProps) => {
  return (
    <Container>
      <Row>
        <Col>
          <TableGridCell
            color={'green'}
            value={'0'}
            height="76px"
            width="35px"
            paddingTop="27px"
          />
          <TableGridCell
            color={'green'}
            value={'00'}
            height="76px"
            width="35px"
            paddingTop="27px"
          />
        </Col>
        <Col>
          <InsideCell value="3" color={props.colorOne} />
          <InsideCell value="2" color={props.colorTwo} />
          <InsideCell value="1" color={props.colorOne} />
        </Col>
        <Col>
          <InsideCell value="6" color={props.colorTwo} />
          <InsideCell
            value="5"
            color={props.colorOne}
            cellType={CellType.INSIDE_CENTER}
          />
          <InsideCell value="4" color={props.colorTwo} />
        </Col>
        <Col>
          <InsideCell value="9" color={props.colorOne} />
          <InsideCell
            value="8"
            color={props.colorTwo}
            cellType={CellType.INSIDE_CENTER}
          />
          <InsideCell value="7" color={props.colorOne} />
        </Col>
        <Col>
          <InsideCell value="12" color={props.colorOne} />
          <InsideCell
            value="11"
            color={props.colorTwo}
            cellType={CellType.INSIDE_CENTER}
          />
          <InsideCell value="10" color={props.colorTwo} />
        </Col>
        <Col>
          <InsideCell value="15" color={props.colorTwo} />
          <InsideCell
            value="14"
            color={props.colorOne}
            cellType={CellType.INSIDE_CENTER}
          />
          <InsideCell value="13" color={props.colorTwo} />
        </Col>
        <Col>
          <InsideCell value="18" color={props.colorOne} />
          <InsideCell
            value="17"
            color={props.colorTwo}
            cellType={CellType.INSIDE_CENTER}
          />
          <InsideCell value="16" color={props.colorOne} />
        </Col>
        <Col>
          <InsideCell value="21" color={props.colorOne} />
          <InsideCell
            value="20"
            color={props.colorTwo}
            cellType={CellType.INSIDE_CENTER}
          />
          <InsideCell value="19" color={props.colorOne} />
        </Col>
        <Col>
          <InsideCell value="24" color={props.colorTwo} />
          <InsideCell
            value="23"
            color={props.colorOne}
            cellType={CellType.INSIDE_CENTER}
          />
          <InsideCell value="22" color={props.colorTwo} />
        </Col>
        <Col>
          <InsideCell value="27" color={props.colorOne} />
          <InsideCell
            value="26"
            color={props.colorTwo}
            cellType={CellType.INSIDE_CENTER}
          />
          <InsideCell value="25" color={props.colorOne} />
        </Col>
        <Col>
          <InsideCell value="30" color={props.colorOne} />
          <InsideCell
            value="29"
            color={props.colorTwo}
            cellType={CellType.INSIDE_CENTER}
          />
          <InsideCell value="28" color={props.colorTwo} />
        </Col>
        <Col>
          <InsideCell value="33" color={props.colorTwo} />
          <InsideCell
            value="32"
            color={props.colorOne}
            cellType={CellType.INSIDE_CENTER}
          />
          <InsideCell value="31" color={props.colorTwo} />
        </Col>
        <Col>
          <InsideCell value="36" color={props.colorOne} />
          <InsideCell value="35" color={props.colorTwo} />
          <InsideCell value="34" color={props.colorOne} />
        </Col>
        <Col>
          <InsideCell value="2-1" color={props.tableColor} />
          <InsideCell value="2-1" color={props.tableColor} />
          <InsideCell value="2-1" color={props.tableColor} />
        </Col>
      </Row>
      <Row style={{ paddingLeft: '37px' }}>
        <OutsideTableGridCell value="1st 12" color={props.tableColor} />
        <OutsideTableGridCell value="2nd 12" color={props.tableColor} />
        <OutsideTableGridCell value="3rd 12" color={props.tableColor} />
      </Row>
      <Row style={{ paddingLeft: '37px' }}>
        <SingleOutsideTableGridCell value="1-18" color={props.tableColor} />
        <SingleOutsideTableGridCell value="Even" color={props.tableColor} />
        <SingleOutsideTableGridCell value="Red" color={props.colorOne} />
        <SingleOutsideTableGridCell value="Black" color={props.colorTwo} />
        <SingleOutsideTableGridCell value="Odd" color={props.tableColor} />
        <SingleOutsideTableGridCell value="19-36" color={props.tableColor} />
      </Row>
    </Container>
  );
};
