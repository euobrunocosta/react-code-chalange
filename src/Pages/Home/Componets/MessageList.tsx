import React, { useMemo } from 'react'
import { useMessages } from 'Hooks/useMessages'
import MessageItem from './MessageItem'
import { Priorities } from 'Utils/constants'
import { Count, Header, Title, List, ListWrapper } from './styled'

type TProps = {
  priority: Priorities
}

const MessageList = (props: TProps) => {
  const { priority } = props

  const messages = useMessages()

  const title = useMemo(() => {
    if (priority === Priorities.ERROR) return 'Error'
    if (priority === Priorities.WARNING) return 'Warning'
    return 'Info'
  }, [priority])

  return (
    <ListWrapper>
      <Header>
        <Title>{title} Type</Title>
        <Count data-testid={`${priority}PriorityMessageCount`}>
          {`${messages[`${priority}Messages`].length} message${
            messages[`${priority}Messages`].length > 1 ? 's' : ''
          }`}
        </Count>
      </Header>
      <List>
        {messages[`${priority}Messages`].map((message, index) => (
          <MessageItem
            key={`${message}${index}`}
            priority={priority}
            message={message}
            index={index}
          />
        ))}
      </List>
    </ListWrapper>
  )
}

export default MessageList
