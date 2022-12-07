import React from 'react';
import {
  HeadingContainer,
  TimelineHeading,
  TimelineImage,
  TimelineSection,
} from './styles';

export default function HackathonTimeline() {
  return (
    <TimelineSection>
      <HeadingContainer>
        <TimelineHeading colorScheme="brand">
          HACKATHON TIMELINE
        </TimelineHeading>
      </HeadingContainer>
      <TimelineImage src="HackathonTimeline.png" />
    </TimelineSection>
  );
}
