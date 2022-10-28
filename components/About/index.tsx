import { AboutContainer, AboutHeading, HeadingContainer, ContentContainer, LeftContentContainer, FlushTop, Centralised, DescriptionBox, RightContentContainer, TopImage, MiddleImage, BottomImage } from './styles'

const About = () => {
  return (
    <AboutContainer>
        <HeadingContainer>
            <AboutHeading colorScheme = 'brand'>ABOUT FINTECH MONTH</AboutHeading>
        </HeadingContainer>
        <ContentContainer>
            <LeftContentContainer>
                <FlushTop>
                    <Centralised align = 'center'>
                        <DescriptionBox >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod neque nec accumsan pulvinar. Integer suscipit leo sit amet venenatis iaculis. Fusce condimentum massa nec mauris pellentesque, sit amet placerat felis maximus. Nam eu ipsum maximus, dapibus mi vitae, tristique turpis. Suspendisse ornare nunc tortor, a elementum ligula euismod ultricies. Donec interdum dolor ut fringilla molestie. Sed ornare sapien in urna porta volutpat. Cras varius sapien quis leo tempor blandit. Nam ut malesuada tellus. Donec semper rhoncus nisl, vitae tincidunt libero efficitur eget. In laoreet, ligula a blandit porttitor, purus sapien condimentum arcu, maximus porttitor mi diam ut libero.Aliquam dapibus consectetur dolor eu sodales. Nulla rhoncus justo et ipsum porta, eget hendrerit arcu porta. Pellentesque tincidunt dolor ut magna malesuada, vitae blandit neque dictum.
                         </DescriptionBox>
                    </Centralised>
                </FlushTop>
            </LeftContentContainer>

            <RightContentContainer>
                <FlushTop>
                    <Centralised>
                    <TopImage src = 'gibbresh.png' />
                    <MiddleImage src = 'gibbresh.png'/> 
                    <BottomImage src = 'gibbresh.png'/>
                    </Centralised>
                </FlushTop>
            </RightContentContainer>
        </ContentContainer>
    </AboutContainer>
  )
}

export default About