import styled from 'styled-components';
import {useEffect, useReducer, useRef} from 'react';

const GridCell = styled.div`
  padding: .75em 1em;
  border-style: solid;
  border-color: black;
  border-width: 1px 0 0 1px;
  color: ${props => props.theme.colors.textOnDark};
  background-color: ${props => props.theme.colors.grid};

  overflow: auto;

  
  &.end {
    border-width: 1px 1px 0 1px;
  }
  
  &.bottom {
    border-width: 1px 0 1px 1px;
  }
  
  &.end.bottom {
    border-width: 1px 1px 1px 1px;
  }
`

const Grid = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
 // grid-template-columns: repeat(2, auto minmax(4px, 4px)) auto;  
  grid-auto-rows: ${props => props.size};
  
  ${GridCell}:last-of-type {
     
  }
  resize: both;
  overflow: auto;
`

const GridDivider = styled.div `
  margin: 0;
  border-style: solid;
  border-color: black;
  border-width: 1px 0 0 1px;
  background-color: grey;
  cursor: col-resize;
`

const GridBottom = styled.div`
  grid-column: 1 / ${props => props.size};
  //grid-column: span ${props => props.size};
  background-color: grey;
  padding-top: 4px;
  cursor: s-resize;
`

const GridSide = styled.div`
  background-color: grey;
  padding-left: 4px;
  cursor: w-resize;
  grid-row: 1 / 9;
  grid-column: 6 / 7;
`

function gridStyleInit(headerLength) {
  let newString = '200px 4px '
  for(let i = 0; i < headerLength - 1; i++) {
    newString += '200px 4px '
  }
  console.log(`Grid init: ${newString}`)
  return  {gridTemplateColumns: `${newString}`}
}

function gridStyleReducer(state, action) {
  switch(action.type) {
    case 'init':
      return gridStyleInit(action.payload)
    case 'columnResize':
      let newGridStyles = state.gridTemplateColumns.split(' ')
      const index = action.payload.leftCell % action.payload.rowSize
      let leftMove = 0
      let rightMove = 0

      leftMove = parseInt(newGridStyles[index].split('px')[0]) + (action.payload.mouseX)
      rightMove = parseInt(newGridStyles[index + 2].split('px')[0]) - (action.payload.mouseX)

      newGridStyles[index] = `${leftMove}px`
      newGridStyles[index + 2] = `${rightMove}px`
      const newGridState = newGridStyles.join(' ')
      console.log(newGridState)

      return {...state, gridTemplateColumns: newGridState}
    default:
      return state
  }
}

export default function DataGrid({data, header}) {
  const dragging = useRef(false)
  const draggingCell = useRef(1)
  const cellRefs = useRef([])
  const [gridStyle, gridStyleDispatch] = useReducer(gridStyleReducer, header.length, gridStyleInit)
   //`repeat(${header.length - 1}, auto minmax(4px, 4px)) auto`



  useEffect(() => {

    const handleMouseMove = (event) => {

      if(dragging.current && event.movementX !== 0) {

        const leftCell = draggingCell.current - 1
        const rightCell = draggingCell.current + 1
        gridStyleDispatch({type: 'columnResize', payload: {mouseX: event.movementX, leftCell: leftCell, rightCell: rightCell,
            rowSize: header.length * 2 - 1}})
      }
    }


    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // cleanup this component
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [data, header]);

  const handleMouseUp = () => {
    dragging.current = false
    console.log('Not dragging!')
  }



  const handleMouseDown = (i, event) => {
    if(cellRefs.current[i] === event.target) {
      dragging.current = true
      draggingCell.current = i

      console.log(`Dragging cell #${i}`)
    }
  }


  return (
    <Grid size={data.length} style={gridStyle}>
      {header.map((item, i, array) =>
        <>
          <GridCell
            key={i * 2}
            ref={el => cellRefs.current[i * 2] = el}
          >
            {item.name}
          </GridCell>
          { i < array.length - 1 ?
            <GridDivider
              key={i * 2 + 1}
              ref={el => cellRefs.current[i * 2 + 1] = el}
              onMouseDown={e => handleMouseDown(i * 2 + 1, e)}
            />
            :
            <GridSide size={data.length}/>
          }
        </>
      )}

      {data.map((item, i) =>
          <>
            {header.map((attr, j) =>
              <>
                <GridCell
                  key={(i + 1) * (header.length * 2 - 1) + j * 2}
                  className={i === data.length - 1 ? 'bottom' : ''}
                  ref={el => cellRefs.current[(i + 1) * (header.length * 2 - 1) + j * 2] = el}
                >
                  {item[attr.key]}
                </GridCell>
                { j < header.length - 1 &&
                  <GridDivider
                    key={(i + 1) * (header.length * 2 - 1) + j * 2 + 1}
                    ref={el => cellRefs.current[(i + 1) * (header.length * 2 - 1) + j * 2 + 1] = el}
                    onMouseDown={e => handleMouseDown((i + 1) * (header.length * 2 - 1) + j * 2 + 1, e)}
                  />
                }

              </>
            )}


          </>
        )
      }
      <GridBottom size={header.length * 2}>
      </GridBottom>


    </Grid>
  )
}