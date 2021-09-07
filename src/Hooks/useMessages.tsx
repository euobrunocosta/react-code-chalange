import React, { createContext, useContext, ReactNode, useState } from 'react'
import { Priorities } from 'Utils/constants'
import { Message } from '../Api'

type TUseMessages = {
  errorMessages: string[]
  warningMessages: string[]
  infoMessages: string[]
  isAddingMessages: boolean
  addMessage(message: Message): void
  removeMessage(priority: Priorities, index: number): void
  removeAllMessages(): void
  toggleMessageAdding(): void
}

const MessagesContext = createContext<TUseMessages>({} as TUseMessages)

type TMessagesProviderProps = {
  children: ReactNode
}

const MessagesProvider = (props: TMessagesProviderProps) => {
  const { children } = props

  const [errorMessages, setErrorMessages] = useState<string[]>([])
  const [warningMessages, setWarningMessages] = useState<string[]>([])
  const [infoMessages, setInfoMessages] = useState<string[]>([])
  const [isAddingMessages, setIsAddingMessages] = useState(true)

  const addMessage = (message: Message) => {
    if (!isAddingMessages) return

    const { priority, message: text } = message

    if (priority === 0) {
      setErrorMessages(oldMessages => [text, ...oldMessages])
      return
    }

    if (priority === 1) {
      setWarningMessages(oldMessages => [text, ...oldMessages])
      return
    }

    setInfoMessages(oldMessages => [text, ...oldMessages])
  }

  const removeMessage = (priority: Priorities, index: number) => {
    const getProperState = () => {
      if (priority === Priorities.ERROR)
        return {
          list: errorMessages,
          setFn: setErrorMessages,
        }

      if (priority === Priorities.WARNING)
        return {
          list: warningMessages,
          setFn: setWarningMessages,
        }

      return {
        list: infoMessages,
        setFn: setInfoMessages,
      }
    }

    const { list, setFn } = getProperState()

    const filteredList = list.filter((message, _index) => _index !== index)
    setFn(filteredList)
  }

  const removeAllMessages = () => {
    setErrorMessages([])
    setWarningMessages([])
    setInfoMessages([])
  }

  const toggleMessageAdding = () => setIsAddingMessages(!isAddingMessages)

  return (
    <MessagesContext.Provider
      value={{
        errorMessages,
        warningMessages,
        infoMessages,
        isAddingMessages,
        addMessage,
        removeMessage,
        removeAllMessages,
        toggleMessageAdding,
      }}
    >
      {children}
    </MessagesContext.Provider>
  )
}

const useMessages = (): TUseMessages => useContext(MessagesContext)

export { useMessages, MessagesProvider }
