import styled from 'styled-components';
import React, {useRef, useState} from 'react';
import Flex from '../../atoms/Flex';
import {Icon} from '@iconify/react';

const List = styled.ul`
  list-style: none;

  //border: 2px solid ${props => props.theme.colors.border};
  padding: 0;
  margin: 0;
  color: ${props => props.theme.colors.accordionContentText};
  background-color: ${props => props.theme.colors.accordionContent};
`

const Item = styled.li`
  margin: 0;
  padding: .75em 1em;
  border-style: solid;
  border-color: ${props => props.theme.colors.border};
  border-width: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.accordion};
  color: ${props => props.theme.colors.textOnDark};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.accordionHover}
  }
  &.active {
    background-color: ${props => props.theme.colors.accordionHover};
    + div {
      margin: 1em;
    }
  }
`

const ItemContent = styled.div`
  margin: 0;
  overflow: hidden;
  transition: all 0.2s ease-out;
  max-height: 0;

`

function Accordion({children, style={}}) {
  const [childrenArray] = useState(React.Children.toArray(children))

  const scrollRefs = useRef([])

  const [openItems, setOpenItems] = useState(() => {
    let newOpenItems = []
    for(let i = 0; i < childrenArray.length; i++) {
      newOpenItems[i] = false;
    }
    console.log(childrenArray)
    return newOpenItems
  })

  const handleSelect = id => {
    const oldOpenItems = [...openItems]
    oldOpenItems[id] = !oldOpenItems[id]
    console.log(`${scrollRefs.current[id].scrollHeight}px`)
    setOpenItems(oldOpenItems)
  }

  return (
    <List style={{...style}}>
      {childrenArray.map((item, index) =>
        <>
          <Item
            key={item.props.title + index}
            className={openItems[index] ? 'active' : ''}
            onClick={() => handleSelect(index)}
          >
            <Flex justifyContent='space-between'>
              {item.props.title}
              {
                openItems[index] ?
                  <Icon height={20} icon="ic:baseline-expand-less" /> :
                  <Icon height={20} icon="ic:baseline-expand-more" />
              }
            </Flex>
          </Item>
          <ItemContent
            key={index}
            ref={el => scrollRefs.current[index] = el}
            style={{maxHeight: openItems[index] ? `${scrollRefs.current[index].scrollHeight}px` : null}}
          >
            {item}
          </ItemContent>
        </>
      )}
    </List>
  )
}
export default Accordion
