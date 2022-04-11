import * as S from './styled'
import { UserPlus } from '@styled-icons/feather'
import { Menu } from '@styled-icons/boxicons-regular'

const ITENS = 20

const Layout = () => {
  return (
    <S.Main>
      <S.Header>
        <button>
          <UserPlus />
          <span>Invite players</span>
        </button>
        <button>
          <Menu />
        </button>
      </S.Header>
      <S.Body>
        <S.Top>
          {Array.from({ length: ITENS }, (item, index) => (
            <S.PlayerContainer>
              <S.PlayerCard />
              <span>Jonatas</span>
            </S.PlayerContainer>
          ))}
        </S.Top>
        <S.Left>
          {Array.from({ length: ITENS }, (item, index) => (
            <S.PlayerContainer>
              <S.PlayerCard />
              <span>Jonatas</span>
            </S.PlayerContainer>
          ))}
        </S.Left>
        <S.Middle>
          <span>Waiting for player’s votes...</span>
        </S.Middle>
        <S.Right>
          {Array.from({ length: ITENS }, (item, index) => (
            <S.PlayerContainer>
              <S.PlayerCard />
              <span>Jonatas</span>
            </S.PlayerContainer>
          ))}
        </S.Right>
        <S.Bottom>
          {Array.from({ length: ITENS }, (item, index) => (
            <S.PlayerContainer>
              <S.PlayerCard />
              <span>Jonatas</span>
            </S.PlayerContainer>
          ))}
        </S.Bottom>
      </S.Body>
      <S.Cards>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </S.Cards>
    </S.Main>
  )
}

export default Layout
