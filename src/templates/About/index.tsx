import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <S.Heading>My trips</S.Heading>
    <S.Body>
      <p>Lorem ipsum</p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
