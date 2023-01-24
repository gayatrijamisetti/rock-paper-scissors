import {
  ScoreContainer,
  ScoreNameContainer,
  ScoreName,
  ScoreBoardContainer,
  ScoreHeading,
  ScoreResult,
} from './styledComponents'

const ScoreCard = props => {
  const {score} = props
  return (
    <ScoreContainer>
      <ScoreNameContainer>
        <ScoreName>
          ROCK <br />
          PAPER <br />
          SCISSORS
        </ScoreName>
      </ScoreNameContainer>
      <ScoreBoardContainer>
        <ScoreHeading>Score</ScoreHeading>
        <ScoreResult>{score}</ScoreResult>
      </ScoreBoardContainer>
    </ScoreContainer>
  )
}

export default ScoreCard
