import React from 'react'
import { BsFillStopFill, BsFillPlayFill } from 'react-icons/bs'
import { BiTrash } from 'react-icons/bi'
import { MenuButton, MenuWrapper } from './styled'
import { useMessages } from 'Hooks/useMessages'

const Menu = () => {
  const messages = useMessages()

  return (
    <MenuWrapper>
      <li>
        <MenuButton onClick={messages.toggleMessageAdding}>
          {messages.isAddingMessages ? <BsFillStopFill /> : <BsFillPlayFill />}
          <span>{messages.isAddingMessages ? 'Stop' : 'Continue'}</span>
        </MenuButton>
      </li>
      <li>
        <MenuButton onClick={messages.removeAllMessages}>
          <BiTrash />
          <span>Clear all</span>
        </MenuButton>
      </li>
    </MenuWrapper>
  )
}

export default Menu
