import {
  HeadingContainer,
  TimelineHeading,
  TimelineImage,
  TimelinePageContainer,
} from './styles';

const HomeTimeline = () => {
  return (
    <TimelinePageContainer>
      <HeadingContainer>
        <TimelineHeading colorScheme="brand">
          TIMELINE OF EVENTS
        </TimelineHeading>
      </HeadingContainer>
      <TimelineImage src="Timeline.png" />
    </TimelinePageContainer>
  );
};

export default HomeTimeline;
