import React from 'react'
import { BiTrash } from 'react-icons/bi'
import { useMessages } from 'Hooks/useMessages'
import { ClearButton, Item } from './styled'
import { Priorities } from 'Utils/constants'

type TProps = {
  message: string
  index: number
  priority: Priorities
}

const MessageItem = (props: TProps) => {
  const { message, index, priority } = props

  const { removeMessage } = useMessages()

  const onClickRemoveMessage = () => removeMessage(priority, index)

  return (
    <Item priority={priority} data-testid={`${priority}PriorityMessageBox`}>
      <span>{message}</span>
      <ClearButton onClick={onClickRemoveMessage} title="Remove Message">
        <BiTrash />
      </ClearButton>
    </Item>
  )
}

export default MessageItem
