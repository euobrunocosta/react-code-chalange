import React, { useState } from 'react'
import generateMessage, { Message } from 'Api'
import { useMessages, MessagesProvider } from 'Hooks/useMessages'
import { useEffect } from 'react'
import { Content, Wrapper } from './styles'
import MessageList from './Componets/MessageList'
import Menu from './Componets/Menu'
import { Priorities } from 'Utils/constants'

const Home = () => {
  const [lastSentMessage, setLastSentMessage] = useState<Message>()
  const { addMessage } = useMessages()

  useEffect(() => {
    const cleanup = generateMessage((message: Message) =>
      setLastSentMessage(message)
    )
    return cleanup
  }, [])

  useEffect(() => {
    if (lastSentMessage) addMessage(lastSentMessage)
  }, [lastSentMessage])

  return (
    <Wrapper>
      <Menu />
      <Content>
        <MessageList priority={Priorities.ERROR} />
        <MessageList priority={Priorities.WARNING} />
        <MessageList priority={Priorities.INFO} />
      </Content>
    </Wrapper>
  )
}

const HomeWrapper = () => (
  <MessagesProvider>
    <Home />
  </MessagesProvider>
)

export default HomeWrapper
