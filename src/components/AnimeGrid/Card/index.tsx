/* eslint-disable react/display-name */
import { forwardRef, Ref, useContext } from 'react'

import { FavContext } from '../../../context/FavContext'
import { AnimeType } from '../../../types'
import LikeButton from '../../LikeButton'
import { Flexer } from '../../shared/Flexer'
import Heading from '../../UI/Heading'
import Text from '../../UI/Text'
import { Bottom } from './Bottom'
import { Container } from './Container'
import { Position } from './Position'
import { StyledCard } from './StyledCard'

type CardProps = {
  id: number
  coverURL: string
  title: string
  status: string
  score: number
  type: AnimeType
  year: number
}

const Card = forwardRef(
  (
    { id, coverURL, title, status, score, type, year }: CardProps,
    ref: Ref<HTMLImageElement>
  ) => {
    const { favList, toggleFav } = useContext(FavContext)
    const liked = favList.find((fav) => fav.id === id) ? true : false

    return (
      <Position>
        <Container to={`/animes/${id}/${encodeURIComponent(title)}`}>
          <StyledCard role="button" aria-hidden>
            <img src={coverURL} alt={`${title} cover`} ref={ref} />
          </StyledCard>
          <Bottom>
            <Heading as="h2" size="xl">
              {title}
            </Heading>
            <Flexer>
              <div>
                <Text as="span" size="md">
                  {type === 'TV' ? '📺' : '🎥'} -
                </Text>{' '}
                <Text as="span" size="md" variant="primary">
                  {score} Score
                </Text>{' '}
                <Text as="span" size="md">
                  - {status}
                </Text>
              </div>
              <Text as="span" size="md">
                {year}
              </Text>
            </Flexer>
          </Bottom>
        </Container>
        <LikeButton
          liked={liked}
          handleLike={() =>
            toggleFav(id, { id, coverURL, title, status, score, type, year })
          }
        />
      </Position>
    )
  }
)

export default Card
