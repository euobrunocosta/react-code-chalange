import React from 'react'
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from '@testing-library/react'
import App from '../App'
import MessageItem from 'Pages/Home/Componets/MessageItem'
import { Priorities } from 'Utils/constants'
import { theme } from 'Styles/theme'

describe('Messages App', () => {
  afterAll(cleanup)

  it('should render the "Clear all" and the "Stop" buttons', () => {
    render(<App />)

    const stopButton = screen.getByText('Stop')
    expect(stopButton).toBeInTheDocument()

    const clearAllButton = screen.getByText('Clear all')
    expect(clearAllButton).toBeInTheDocument()
  })

  it('should replace the "Stop" button for the "Continue" button after clicking it', () => {
    render(<App />)

    expect(screen.getByText('Stop')).toBeInTheDocument()
    expect(screen.queryByText('Continue')).not.toBeInTheDocument()

    fireEvent.click(screen.getByText('Stop'))

    expect(screen.queryByText('Stop')).not.toBeInTheDocument()
    expect(screen.getByText('Continue')).toBeInTheDocument()
  })

  it('should render one title for each type of priority message', () => {
    render(<App />)

    const firstPriorityTitle = 'Error Type'
    expect(screen.getByText(firstPriorityTitle)).toBeInTheDocument()

    const secondPriorityTitle = 'Warning Type'
    expect(screen.getByText(secondPriorityTitle)).toBeInTheDocument()

    const thirdPriorityTitle = 'Info Type'
    expect(screen.getByText(thirdPriorityTitle)).toBeInTheDocument()
  })

  it('should render error priority messages in red boxes', async () => {
    const message = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit'

    render(
      <MessageItem index={0} message={message} priority={Priorities.ERROR} />
    )

    expect(screen.getByTestId('errorPriorityMessageBox')).toHaveTextContent(
      message
    )

    expect(screen.getByTestId('errorPriorityMessageBox')).toHaveStyle(
      `background-color: ${theme.colors.ERROR}`
    )
  })

  it('should render warning priority messages in yellow boxes', async () => {
    const message = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit'

    render(
      <MessageItem index={0} message={message} priority={Priorities.WARNING} />
    )

    expect(screen.getByTestId('warningPriorityMessageBox')).toHaveTextContent(
      message
    )

    expect(screen.getByTestId('warningPriorityMessageBox')).toHaveStyle(
      `background-color: ${theme.colors.WARNING}`
    )
  })

  it('should render info priority messages in green boxes', () => {
    const message = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit'

    render(
      <MessageItem index={0} message={message} priority={Priorities.INFO} />
    )

    expect(screen.getByTestId('infoPriorityMessageBox')).toHaveTextContent(
      message
    )

    expect(screen.getByTestId('infoPriorityMessageBox')).toHaveStyle(
      `background-color: ${theme.colors.INFO}`
    )
  })

  it('should show the count of messages of each priority type', () => {
    render(<App />)

    const errorPriorityMessagesCount = screen.queryAllByTestId(
      'errorPriorityMessageBox'
    ).length

    const warningPriorityMessagesCount = screen.queryAllByTestId(
      'warningPriorityMessageBox'
    ).length

    const infoPriorityMessagesCount = screen.queryAllByTestId(
      'infoPriorityMessageBox'
    ).length

    const errorCountText = `${errorPriorityMessagesCount} message${
      errorPriorityMessagesCount > 1 ? 's' : ''
    }`

    const warningCountText = `${warningPriorityMessagesCount} message${
      warningPriorityMessagesCount > 1 ? 's' : ''
    }`

    const infoCountText = `${infoPriorityMessagesCount} message${
      infoPriorityMessagesCount > 1 ? 's' : ''
    }`

    expect(screen.getByTestId('errorPriorityMessageCount')).toHaveTextContent(
      errorCountText
    )

    expect(screen.getByTestId('warningPriorityMessageCount')).toHaveTextContent(
      warningCountText
    )

    expect(screen.getByTestId('infoPriorityMessageCount')).toHaveTextContent(
      infoCountText
    )
  })
})
