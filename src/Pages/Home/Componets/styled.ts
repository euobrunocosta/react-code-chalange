import styled from 'styled-components'
import { Priorities } from 'Utils/constants'

const getColorByMessageType = (messageType: Priorities) => {
  if (messageType === Priorities.ERROR) return '#F56236'
  if (messageType === Priorities.WARNING) return '#FCE788'
  return '#88FCA3'
}

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 13px;
  margin-bottom: 10px;
`

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
`

export const Count = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.LIGHT};
  background-color: ${({ theme }) => theme.colors.GRAY};
  padding: 6px 12px;
  border-radius: 14px;
  font-weight: 700;
  white-space: nowrap;
`

export const ListWrapper = styled.section`
  flex: 1;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

type TItemProps = {
  priority: Priorities
}

export const Item = styled.li<TItemProps>`
  background-color: ${p => getColorByMessageType(p.priority)};
  padding: 10px 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-radius: 5px;

  span, button svg {
    color: ${p => p.priority === Priorities.ERROR ? 'white' : 'black'};
  }
`

export const ClearButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
  }
`

export const MenuWrapper = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
`

export const MenuButton = styled.button`
  background-color: #889dfc;
  border: none;
  color: ${({ theme }) => theme.colors.LIGHT};
  text-transform: uppercase;
  font-weight: 700;
  padding: 7px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
`