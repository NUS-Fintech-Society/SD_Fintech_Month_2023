import { AboutContainer, AboutHeading, HeadingContainer, ContentContainer, LeftContentContainer, FlushTopLeft, FlushTopRight, Centralised, DescriptionBox, RightContentContainer, TopImage, MiddleImage, BottomImage } from './styles'

const About = () => {
  return (
    <AboutContainer minHeight = '100vh'>
        <HeadingContainer>
            <AboutHeading colorScheme = 'brand'>ABOUT FINTECH MONTH</AboutHeading>
        </HeadingContainer>
        <ContentContainer>
            <LeftContentContainer>
                <FlushTopLeft>
                    <Centralised align = 'center'>
                        <DescriptionBox>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod rus sapien condimentum arcu, maximus porttitor mi diam ut libero.Aliquam dapibus consectetur dolor eu sodalesneque nec accumsan pulvinpurus sapien condimentum arcu, maximus porttitor mi diam ut libero.Aliquam dapibus consectetur dolor eu sodalesrus sapien condimentum arcu, maximus porttitor mi diam ut libero.Aliquam dapibus consectetur dolor eu sodalesrus sapien condimentum arcu, maximus porttitor mi diam ut libero.Aliquam dapibus consectetur dolor eu sodaless
                         </DescriptionBox>
                    </Centralised>
                </FlushTopLeft>
            </LeftContentContainer>

            <RightContentContainer>
                <FlushTopRight>
                    <Centralised>
                    <TopImage src = 'gibbresh.png' fallbackSrc='https://via.placeholder.com/150'/>
                    <MiddleImage src = 'gibbresh.png'fallbackSrc='https://via.placeholder.com/150'/> 
                    <BottomImage src = 'gibbresh.png'fallbackSrc='https://via.placeholder.com/150'/>
                    </Centralised>
                </FlushTopRight>
            </RightContentContainer>
        </ContentContainer>
    </AboutContainer>

  )
}

export default About