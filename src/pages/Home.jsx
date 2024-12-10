import { Container, Typography, Grid, Box, AppBar, Toolbar } from '@mui/material'
import styled from 'styled-components'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import EmailIcon from '@mui/icons-material/Email'
import TelegramIcon from '@mui/icons-material/Telegram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import { useNavigate } from 'react-router-dom'

const MainContainer = styled(Container)`
  max-width: 100% !important;
  padding: 0;
`

const VideoSection = styled(Box)`
  position: relative;
  overflow: hidden;
  isolation: isolate;
`

const BackgroundVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
`

const ContentWrapper = styled(Box)`
  display: grid;
  grid-template-columns: 40% 60%;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`

const MainContent = styled(Box)`
  padding: 4rem 2rem 4rem 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }
  
  @media (max-width: 1200px) {
    padding: 2rem;
  }
`

const MainContentInner = styled(Box)`
  position: relative;
  z-index: 2;
  max-width: 400px;
  text-align: center;

  @media (max-width: 1200px) {
    padding-left: 0;
  }
`

const CalendarSection = styled(Box)`
  min-height: calc(100vh - 64px);
  padding: 2rem;
  border-left: 1px solid #9d5eff;
  position: relative;
  background: rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    min-height: auto;
    border-left: none;
    border-top: 1px solid #9d5eff;
  }
`

const CalendarContent = styled(Box)`
  position: relative;
  z-index: 2;
`

const CalendarGrid = styled(Grid)`
  margin-top: 1rem;
`

const MonthBox = styled(Box)`
  background: rgba(0, 0, 0, 0.1);
  padding: 0.75rem;
  height: 100%;
  border-radius: 4px;
  min-height: 80px;
  font-size: 0.8rem;
  border: 1px solid #9d5eff;
`

const MonthTitle = styled(Typography)`
  color: #9d5eff;
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  text-transform: uppercase;
`

const EventCard = styled(Box)`
  background: rgba(0, 0, 0, 0.15);
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.35rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 3px;
  font-size: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.03);

  &:hover {
    transform: translateX(5px);
    background: rgba(0, 0, 0, 0.25);
    border-color: #9d5eff;
  }

  &.highlighted {
    background: rgba(157, 94, 255, 0.1);
    border-color: #9d5eff;
    
    &:hover {
      background: rgba(157, 94, 255, 0.15);
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const FeaturedEvent = styled(Box)`
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.25rem;
  margin: 1rem auto;
  position: relative;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.2);
  text-align: left;

  &:hover {
    border-color: #9d5eff;
    background: rgba(0, 0, 0, 0.3);
    .arrow-icon {
      transform: translate(5px, -50%);
    }
  }

  .arrow-icon {
    position: absolute;
    right: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.3s ease;
  }
`

const UpcomingText = styled(Typography)`
  color: #9d5eff;
  font-size: 0.8rem;
  margin: 1rem 0;
  font-weight: 600;
  letter-spacing: 2px;
`

const NewsletterSection = styled(Box)`
  padding: 6rem 2rem;
  position: relative;
  background: #000;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 2;
`

const NewsletterContent = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const NewsletterTitle = styled(Typography)`
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.1;
  background: linear-gradient(to right, #fff, #9d5eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;

  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
`

const NewsletterForm = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

const StyledInput = styled('input')`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  color: #fff;
  font-size: 1rem;
  border-radius: 4px;
  width: 100%;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #9d5eff;
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const SubmitButton = styled('button')`
  background: #9d5eff;
  color: #fff;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: #8445ff;
    transform: translateY(-2px);
  }
`

const SubmitSection = styled(Box)`
  display: flex;
  width: 100%;
  background: #ffffff;
`

const SubmitContent = styled(Box)`
  flex: 0 0 70%;
  padding: 40px;
  padding-right: 0;
  margin-right: -1px;

  @media (max-width: 900px) {
    padding: 30px;
    flex: 1;
    margin-right: 0;
  }
`

const SubmitInner = styled(Box)`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: #f3e8ff;
  height: 260px;

  @media (max-width: 900px) {
    padding: 1.5rem;
    height: auto;
  }
`

const SocialIcons = styled(Box)`
  display: flex;
  gap: 3rem;
  
  svg {
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: #9d5eff !important;
    }
  }
`

const PartnersContent = styled(Box)`
  flex: 0 0 30%;
  padding: 40px;
  padding-left: 0;

  @media (max-width: 900px) {
    padding: 30px;
    flex: 1;
  }
`

const PartnersInner = styled(Box)`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  background: #000000;
  height: 260px;

  @media (max-width: 900px) {
    padding: 1.5rem;
    height: auto;
  }
`

const PartnerLogos = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;

  .top-row {
    display: flex;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    width: 100%;

    img {
      height: 40px;
      width: auto;
      filter: brightness(0) invert(1);
      opacity: 0.85;
    }
  }

  .bottom-row {
    img {
      height: 35px;
      width: auto;
      filter: brightness(0) invert(1);
      opacity: 0.85;
    }
  }
`

const Footer = styled(Box)`
  background: #000;
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
`

const FooterLeft = styled(Box)`
  .logo {
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    
    span {
      color: #9d5eff;
    }
  }

  .description {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    line-height: 1.5;
  }
`

const FooterRight = styled(Box)`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    opacity: 0.9;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`

const FooterCopyright = styled(Typography)`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`

const events = {
  JAN: [],
  FEB: [
    { name: 'TES 2024 LIS', location: 'Lisbon' },
    { name: 'Affiliate World Dubai', location: 'Dubai' }
  ],
  MAR: [],
  APR: [
    { name: 'Conversion Conf', location: 'London' }
  ],
  MAY: [
    { name: 'Island Conference', location: 'Bali' }
  ],
  JUN: [],
  JUL: [
    { name: 'iGB Amsterdam', location: 'Amsterdam' },
    { name: 'Affiliate Summit East', location: 'New York' }
  ],
  AUG: [],
  SEP: [
    { name: 'SiGMA East Europe', location: 'Cyprus' },
    { name: 'Affiliate World Europe', location: 'Barcelona' },
    { name: 'AWSummit Bucharest', location: 'Bucharest' },
    { name: 'TES 2024 PRG', location: 'Prague' },
    { name: 'SBC Summit', location: 'Barcelona' }
  ],
  OCT: [
    { name: 'Conversion Conf Meetup', location: 'London' },
    { name: 'Affiliate Embassy Grand Party', location: 'London' }
  ],
  NOV: [
    { name: 'SiGMA Europe', location: 'Malta' }
  ],
  DEC: [
    { name: 'Affiliate World Asia', location: 'Bangkok', highlighted: true }
  ]
}

function Home() {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
  };

  const handleEventClick = () => {
    navigate('/event/sigma-east-europe');
  };

  return (
    <MainContainer>
      <VideoSection>
        <BackgroundVideo autoPlay muted loop playsInline>
          <source src="/video/hero-bg.webm" type="video/webm" />
        </BackgroundVideo>
        <ContentWrapper>
          <MainContent>
            <MainContentInner>
              <Typography variant="h1" sx={{ 
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                fontWeight: 'bold',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                mb: 1,
                textAlign: 'center'
              }}>
                YOUR EVENT MAP<br />
                FOR AFFILIATE<br />
                CONFERENCES.
              </Typography>

              <UpcomingText sx={{ textAlign: 'center' }}>
                UPCOMING
              </UpcomingText>

              <FeaturedEvent onClick={handleEventClick}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CalendarTodayIcon sx={{ color: '#666', fontSize: '0.9rem' }} />
                  <Typography sx={{ color: '#666', fontSize: '0.8rem' }}>04/12 - 05/12</Typography>
                </Box>
                <Typography variant="h4" sx={{ my: 1, fontWeight: 500, fontSize: '1.2rem' }}>
                  Affiliate World Asia
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#666' }}>
                  <LocationOnIcon sx={{ fontSize: '0.9rem' }} />
                  <Typography sx={{ fontSize: '0.8rem' }}>CentralWorld, Bangkok, Thailand</Typography>
                </Box>
                <ArrowOutwardIcon className="arrow-icon" sx={{ color: '#666', fontSize: '1rem' }} />
              </FeaturedEvent>
            </MainContentInner>
          </MainContent>

          <CalendarSection>
            <CalendarContent>
              <CalendarGrid container spacing={1}>
                {Object.entries(events).map(([month, monthEvents]) => (
                  <Grid item xs={12} sm={6} md={4} key={month}>
                    <MonthBox>
                      <MonthTitle>{month}</MonthTitle>
                      {monthEvents.map((event, index) => (
                        <EventCard 
                          key={index} 
                          className={event.highlighted ? 'highlighted' : ''}
                        >
                          <Typography sx={{ 
                            fontWeight: 500, 
                            fontSize: '0.75rem',
                            lineHeight: 1.2,
                            mb: 0.25
                          }}>
                            {event.name}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#666' }}>
                            <LocationOnIcon sx={{ fontSize: '0.7rem' }} />
                            <Typography sx={{ 
                              fontSize: '0.7rem',
                              lineHeight: 1
                            }}>{event.location}</Typography>
                          </Box>
                        </EventCard>
                      ))}
                    </MonthBox>
                  </Grid>
                ))}
              </CalendarGrid>
            </CalendarContent>
          </CalendarSection>
        </ContentWrapper>
      </VideoSection>

      <NewsletterSection id="newsletter">
        <NewsletterContent>
          <Box>
            <NewsletterTitle>
              BE THE FIRST TO KNOW & NEVER MISS A MOMENT!
            </NewsletterTitle>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', maxWidth: '600px' }}>
              Sign up to get first access to all affiliate conferences and parties around the world. No spam, just the latest and greatest events delivered straight to your inbox.
            </Typography>
          </Box>
          <NewsletterForm onSubmit={handleSubmit}>
            <StyledInput 
              type="text" 
              placeholder="Your name" 
              required 
            />
            <StyledInput 
              type="email" 
              placeholder="Email" 
              required 
            />
            <SubmitButton type="submit">
              GET ON THE LIST
            </SubmitButton>
          </NewsletterForm>
        </NewsletterContent>
      </NewsletterSection>

      <SubmitSection id="submit">
        <SubmitContent>
          <SubmitInner>
            <Box>
              <Typography variant="h2" sx={{ 
                fontSize: '3rem',
                fontWeight: 800,
                color: '#000',
                mb: 1.5,
                letterSpacing: '-0.03em'
              }}>
                SUBMIT THE EVENT
              </Typography>
              <Typography sx={{ 
                color: 'rgba(0, 0, 0, 0.8)',
                fontSize: '1.15rem',
                lineHeight: 1.7,
                maxWidth: '85%'
              }}>
                Feel free to contact us in case you would like your event to be featured on our resource.
              </Typography>
            </Box>
            <SocialIcons>
              <EmailIcon sx={{ color: 'black', fontSize: '24px' }} />
              <TelegramIcon sx={{ color: 'black', fontSize: '24px' }} />
              <LinkedInIcon sx={{ color: 'black', fontSize: '24px' }} />
            </SocialIcons>
          </SubmitInner>
        </SubmitContent>

        <PartnersContent>
          <PartnersInner>
            <Typography variant="h2" sx={{ 
              fontSize: '3rem',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.03em'
            }}>
              PARTNERS
            </Typography>
            <PartnerLogos>
              <div className="top-row">
                <img src="/partners/conversion-club.png" alt="Conversion Club" />
                <img src="/partners/win-events.png" alt="Win Events" />
              </div>
              <div className="bottom-row">
                <img src="/partners/meetup.png" alt="Meetup" />
              </div>
            </PartnerLogos>
          </PartnersInner>
        </PartnersContent>
      </SubmitSection>

      <Footer>
        <FooterLeft>
          <div className="logo">aff<span>events</span>.</div>
          <div className="description">
            The one and only useful guide through affiliate conferences,<br />
            expos and exhibitions around the world for industry players.
          </div>
        </FooterLeft>
        <FooterCopyright>
          Created by Vortex. All Rights Reserved. 2024
        </FooterCopyright>
        <FooterRight>
          <a href="https://linkedin.com/company/affevents" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{ color: 'white', fontSize: '24px' }} />
          </a>
          <a href="https://t.me/affevents" target="_blank" rel="noopener noreferrer">
            <TelegramIcon sx={{ color: 'white', fontSize: '24px' }} />
          </a>
          <a href="https://instagram.com/affevents" target="_blank" rel="noopener noreferrer">
            <InstagramIcon sx={{ color: 'white', fontSize: '24px' }} />
          </a>
        </FooterRight>
      </Footer>
    </MainContainer>
  );
}

export default Home
