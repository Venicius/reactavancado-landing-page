import React from 'react'

import Container from 'components/Container'
import Heading from 'components/Heading'

import faq from './content'
import * as S from './styles'
import { SectionFaqProps } from 'types/api'

const SectionFaq = ({questions}: SectionFaqProps) => (
  <S.Wrapper>
    <S.Content>
      <Container>
        <Heading>FAQ</Heading>

        <S.Questions>
          {questions.map((item) => (
            <S.Question key={item.question}>
              <Heading lineBottom>{item.question}</Heading>
              <div dangerouslySetInnerHTML={{ __html: item.answer }} />
            </S.Question>
          ))}
        </S.Questions>

        <S.ExtraQuestion>
          <Heading lineBottom>Eu tenho outra dúvida!</Heading>
          <p>
            Sem problemas! Você pode acessar qualquer uma das{' '}
            <a
              href="https://willianjusten.com.br/about"
              target="_blank"
              rel="noreferrer"
            >
              minhas redes sociais
            </a>{' '}
            ou entrar no{' '}
            <a
              href="https://willianjusten-cursos.slack.com/join/shared_invite/zt-g20h37hj-GnSb_y7PXCRjS92N9T8LCQ#/"
              target="_blank"
              rel="noreferrer"
            >
              slack do nosso curso.
            </a>
          </p>
        </S.ExtraQuestion>
      </Container>
    </S.Content>
  </S.Wrapper>
)

export default SectionFaq
