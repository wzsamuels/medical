import {useState} from 'react';
import styled from 'styled-components';

const ListStyled = styled.ul`
  list-style: none;
  width: 50%;
  height: 100%;
  padding: 0;
  border: none;
  margin: auto;

  li:last-of-type {
    border-width: 1px 1px 1px 1px;  
  }
  
  
  > li {
    margin:0;
  }
  
  overflow: auto;
  max-height: 500px;
`

const ItemStyled = styled.li`
  margin: 0;
  padding: .75em 1em;
  border-style: solid; 
  border-color: black;
  border-width: 1px 1px 0 1px;
  width: 100%;
  background-color: ${props => props.theme.colors.navBar};
  color: ${props => props.theme.colors.textOnDark};
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.colors.select}
  }
  &.active {
    background-color: darkred;
  }
`

function ListSelector({data = [], callback = (f) => f}) {
  const [active, setActive] = useState()


  const handleSelect = id => {
    setActive(id)
    callback(id)
  }

  return (
    <ListStyled>
      {data.map((item, index) =>
        <ItemStyled
          key={item.id || index}
          className={item.id === active ? 'active' : ''}
          onClick={() => handleSelect(item.id)}
        >
          {item.value}
        </ItemStyled>
      )}
    </ListStyled>
  )
}

export default ListSelector