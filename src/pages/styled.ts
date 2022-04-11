import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
`

export const Header = styled.header`
  display: flex;
  justify-content: end;
  gap: 1rem;
  padding: 2rem;
  height: 8.8rem;

  button {
    border: 2px solid #3993ff;
    background-color: #ebf4ff;
    color: #3993ff;
    cursor: pointer;
    border-radius: 0.8rem;
    height: 4.8rem;
    font-size: 1.6rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;

    svg {
      width: 2.5rem;
    }
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'left top right'
    'left middle right'
    'left bottom right';
  height: 100%;
`

export const Top = styled.div`
  grid-area: top;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
  padding: 1rem;
`

export const Bottom = styled.div`
  grid-area: bottom;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`

export const Left = styled.div`
  grid-area: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
`

export const Right = styled.div`
  grid-area: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
`

export const Middle = styled.div`
  grid-area: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d7e9ff;
  color: #48545d;
  border-radius: 2.8rem;

  span {
    font-size: 1.4rem;
  }
`

export const Cards = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  height: 10rem;
  padding: 1rem;

  button {
    border: 2px solid #3993ff;
    background-color: #ebf4ff;
    color: #3993ff;
    cursor: pointer;
    border-radius: 0.8rem;
    font-size: 1.9rem;
    height: 8rem;
    width: 4.8rem;
  }
`

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PlayerCard = styled.div`
  background-color: #e8e9ea;
  border-radius: 0.8rem;
  height: 7rem;
  width: 4rem;
`
