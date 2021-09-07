import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1300px;
  margin: 0 auto;
`

export const Content = styled.main`
  display: flex;
  gap: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.MEDIUM}) {
    flex-direction: column;
    gap: 20px;
  }
`
