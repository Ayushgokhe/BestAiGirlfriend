import { Box, Typography, Button, Link } from '@mui/material'
import styled from 'styled-components'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LanguageIcon from '@mui/icons-material/Language'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const MainContainer = styled(Box)`
  min-height: 100vh;
  width: 100%;
  background: #fff;
`

const ContentArea = styled(Box)`
  background: #000;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
`

const ContentWrapper = styled(Box)`
  background: ${props => props.day === 1 || props.day === 3 ? '#edd6ff' : '#d59eff'};
  display: flex;
  width: 100%;
`

const DaySidebar = styled(Box)`
  width: 30%;
  padding: 16px;
  border-right: 1px solid rgba(0, 0, 0, 0.15);
`

const MainContent = styled(Box)`
  width: 70%;
  padding: 16px 0 16px 48px;
`

const DayNumber = styled.div`
  h1 {
    font-size: 48px;
    letter-spacing: -0.04em;
    margin: 0;
    font-family: 'Space Grotesk', sans-serif;
    color: #000;
  }

  p {
    font-size: 24px;
    opacity: 0.7;
    font-family: 'Space Grotesk', sans-serif;
    display: block;
    margin-top: 8px;
    color: #000;
  }
`

const EventHeader = styled(Box)`
  display: flex;
  width: 100%;
  background: #fff;
`

const HeaderContent = styled(Box)`
  width: 100%;
  padding: 0;
  margin: 0;
`

const BackButton = styled(Button)`
  color: #000;
  text-transform: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  padding: 12px 24px;
  border-radius: 100px;
  background: #f3e5ff;
  margin-bottom: 40px;
  
  svg {
    font-size: 20px;
  }
  
  &:hover {
    background: #ead6ff;
  }
`

const EventTitle = styled.h2`
  font-size: 20px;
  margin: 0;
  padding: 12px 0;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  color: #000;
`

const EventInfo = styled(Box)`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 48px;

  .info-item {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 18px;
    font-family: 'Space Grotesk', sans-serif;
    color: #000;
    
    svg {
      width: 24px;
      height: 24px;
    }
    
    a {
      text-decoration: none;
      color: #000;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const DayTabs = styled(Box)`
  display: flex;
  gap: 12px;
  margin-bottom: 64px;
  position: relative;
  z-index: 10;
`

const DayTab = styled(Button)`
  background: ${props => props.active ? '#f3e5ff' : 'transparent'};
  color: ${props => props.active ? '#000' : '#666'};
  padding: 12px 32px;
  border-radius: 100px;
  text-transform: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 18px;
  font-weight: 500;
  border: 2px solid ${props => props.active ? '#f3e5ff' : '#666'};
  
  &:hover {
    background: ${props => props.active ? '#ead6ff' : 'rgba(243, 229, 255, 0.1)'};
    border-color: ${props => props.active ? '#ead6ff' : '#999'};
  }
`

const EventCard = styled(Box)`
  margin-bottom: 16px;

  h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 16px;
    font-family: 'Space Grotesk', sans-serif;
    color: #000;
  }
`

const EventSection = styled(Box)`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`

const EventHeading = styled(Box)`
  margin-bottom: 12px;
  color: #000;
  font-size: 20px;
`

const EventDetail = styled.div`
  display: flex;
  gap: 40px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-family: 'Space Grotesk', sans-serif;
  color: #000;
  
  .label {
    flex: 0 0 140px;
    font-size: 16px;
    opacity: 0.7;
    color: #000;
  }
  
  .value {
    flex: 1;
    font-size: 16px;
    color: #000;
    
    a {
      color: #000;
      text-decoration: underline;
      font-weight: 500;
    }
  }
`

const RedDot = styled(Box)`
  width: 8px;
  height: 8px;
  background: #ff0000;
  border-radius: 50%;
  margin-top: 8px;
`

function EventDetails() {
  const [activeDay, setActiveDay] = useState(0)
  const navigate = useNavigate()

  const handleDayChange = (day) => {
    setActiveDay(day)
  }

  return (
    <MainContainer>
      <EventHeader>
        <HeaderContent>
          <BackButton onClick={() => navigate('/')}>
            <ArrowBackIcon />
             Back to calendar
          </BackButton>
          
          <EventTitle>
            SIGMA EAST EUROPE
          </EventTitle>
          
          <EventInfo>
            <div className="info-item">
              <CalendarTodayIcon />
              <Typography>2-4 September</Typography>
            </div>
            <div className="info-item">
              <LocationOnIcon />
              <Typography>Hungexpo Budapest Congress and Exhibition Center, Budapest, Hungary</Typography>
            </div>
            <div className="info-item">
              <LanguageIcon />
              <a href="https://sigma.world" target="_blank" rel="noopener noreferrer">
                sigma.world
              </a>
            </div>
          </EventInfo>
          
          <DayTabs>
            <DayTab active={activeDay === 0} onClick={() => handleDayChange(0)}>DAY 0</DayTab>
            <DayTab active={activeDay === 1} onClick={() => handleDayChange(1)}>DAY 1</DayTab>
            <DayTab active={activeDay === 2} onClick={() => handleDayChange(2)}>DAY 2</DayTab>
            <DayTab active={activeDay === 3} onClick={() => handleDayChange(3)}>DAY 3</DayTab>
          </DayTabs>
        </HeaderContent>
      </EventHeader>
      
      <ContentArea>
        <ContentWrapper day={0}>
          <DaySidebar>
            <DayNumber>
              <h1>DAY 0</h1>
              <p>(3 Dec)</p>
            </DayNumber>
          </DaySidebar>

          <MainContent>
            <EventSection>
              <EventHeading>
                <EventTitle>5KM BKK</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className="label">When</div>
                <div className="value">Start at 9:00</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Where</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Lumphini Park
                  </a>
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Invitation</div>
                <div className="value">Strictly by Invite</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Get the Ticket</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Sign Up Here
                  </a>
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Organizer</div>
                <div className="value">Verde Ads</div>
              </EventDetail>
            </EventSection>

            <EventSection>
              <EventHeading>
                <EventTitle>TTMeetup</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className="label">When</div>
                <div className="value">Start at 13:00</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Where</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    InterContinental Bangkok
                  </a>
                  <br />
                  973 Phloen Chit Rd, Lumphini, Pathum Wan
                </div>
              </EventDetail>
            </EventSection>

            <EventSection>
              <EventHeading>
                <EventTitle>ABC MeetMarket</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className="label">When</div>
                <div className="value">10:00 - 16:00</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Where</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Waldorf Astoria Bangkok
                  </a>
                  <br />
                  151 Ratchadamri Rd, Lumphini, Pathum Wan
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Invitation</div>
                <div className="value">Strictly by Invite</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Get the Ticket</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Buy Here
                  </a>
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Organizer</div>
                <div className="value">Affiliate Business Club</div>
              </EventDetail>
            </EventSection>

            <EventSection>
              <EventHeading>
                <EventTitle>Prop Trade Mastery Meetup</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className="label">When</div>
                <div className="value">17:00 - 20:00</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Where</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Grand Hyatt Erawan
                  </a>
                  <br />
                  494 Ratchadamri Rd, Khwaeng Lumphini, Pathum Wan
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Invitation</div>
                <div className="value">Strictly by Invite</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Get the Ticket</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Sign Up Here
                  </a>
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Organizer</div>
                <div className="value">ROI Collective & SabioTrade</div>
              </EventDetail>
            </EventSection>

            <EventSection>
              <EventHeading>
                <EventTitle>Exclusive Private Dinner by Uncapped</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className="label">When</div>
                <div className="value">Start at 17:30</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Where</div>
                <div className="value">Secret Location</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Invitation</div>
                <div className="value">Strictly by Invite</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Get the Ticket</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Online Form
                  </a>
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Organizer</div>
                <div className="value">Uncapped & TTMeetup</div>
              </EventDetail>
            </EventSection>

            <EventSection>
              <EventHeading>
                <EventTitle>Affiliate Drinks Meetup</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className="label">When</div>
                <div className="value">Start at 20:00</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Where</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    The Gardens of Dinsor Palace
                  </a>
                  <br />
                  1217/2 ซอย ชุมพล Khlong Tan Nuea, Watthana
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Invitation</div>
                <div className="value">Strictly by Invite</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Get the Ticket</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Sign Up Here
                  </a>
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Organizer</div>
                <div className="value">Conversion Club</div>
              </EventDetail>
            </EventSection>

            <EventSection>
              <EventHeading>
                <EventTitle>Always Winning</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className="label">When</div>
                <div className="value">20:00 - 1:00</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Where</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Pastel Rooftop Bar & Mediterranean Dining
                  </a>
                  <br />
                  22nd floor, Aira Hotel, 14 Soi Sukhumvit 11, Khlong Toei Nuea, Watthana
                </div>
              </EventDetail>
            </EventSection>

            <EventSection>
              <EventHeading>
                <EventTitle>ClickBid SkyBar Meetup</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className="label">When</div>
                <div className="value">18:00 - 22:00</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Where</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Octave Rooftop Lounge & Bar
                  </a>
                  <br />
                  2 Soi Sukhumvit 57, Khwaeng Khlong Tan Nuea, Watthana, Krung Thep Maha Nakhon
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Invitation</div>
                <div className="value">Strictly by Invite</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Get the Ticket</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Sign Up Here
                  </a>
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Organizer</div>
                <div className="value">ClickBid World</div>
              </EventDetail>
            </EventSection>

            <EventSection>
              <EventHeading>
                <EventTitle>Party in the sky with Golden Goose</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className="label">When</div>
                <div className="value">Start at 20:00</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Where</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Saffron Sky Garden
                  </a>
                  <br />
                  52nd floor, Banyan Tree Bangkok, 21/100 S Sathon Rd, Thung Maha Mek, Sathon
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Invitation</div>
                <div className="value">Strictly by Invite</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Get the Ticket</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Sign Up Here
                  </a>
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Organizer</div>
                <div className="value">Golden Goose</div>
              </EventDetail>
            </EventSection>
          </MainContent>
        </ContentWrapper>

        <ContentWrapper day={1}>
          <DaySidebar>
            <DayNumber>
              <h1>DAY 1</h1>
              <p>(4 Dec)</p>
            </DayNumber>
          </DaySidebar>

          <MainContent>
            <EventSection>
              <EventHeading>
                <EventTitle>Affiliate Meet-ups</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className="label">When</div>
                <div className="value">Start at 20:00</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Where</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Hard Rock Cafe
                  </a>
                  <br />
                  518, ดิเอ็มไฟร์, Phloen Chit Rd, Lumphini, Pathum Wan
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Invitation</div>
                <div className="value">Strictly by Invite</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Get the Ticket</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Sign Up Here
                  </a>
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Organizer</div>
                <div className="value">Affiliate Meet-ups</div>
              </EventDetail>
            </EventSection>

            <EventSection>
              <EventHeading>
                <EventTitle>Affiliate Drinks Meetup</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className="label">When</div>
                <div className="value">Start at 20:00</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Where</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    The Gardens of Dinsor Palace
                  </a>
                  <br />
                  1217/2 ซอย ชุมพล Khlong Tan Nuea, Watthana
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Invitation</div>
                <div className="value">Strictly by Invite</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Get the Ticket</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Sign Up Here
                  </a>
                  <span style={{ marginLeft: '8px', fontStyle: 'italic' }}>*free for affiliates</span>
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Organizer</div>
                <div className="value">Conversion Club</div>
              </EventDetail>
            </EventSection>

            <EventSection>
              <EventHeading>
                <EventTitle>Always Winning</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className="label">When</div>
                <div className="value">20:00 - 1:00</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Where</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Pastel Rooftop Bar & Mediterranean Dining
                  </a>
                  <br />
                  22nd floor, Aira Hotel, 14 Soi Sukhumvit 11, Khlong Toei Nuea, Watthana
                </div>
              </EventDetail>
            </EventSection>

            <EventSection>
              <EventHeading>
                <EventTitle>Affiliate World Beach Party</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className="label">When</div>
                <div className="value">20:00 - 1:30</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Where</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Escape Bangkok
                  </a>
                  <br />
                  693-695 5th Floor, Building B, EmQuartier
                  <br />
                  Khlong Tan Nuea, Watthana
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Invitation</div>
                <div className="value">No Invitation Needed</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Organizer</div>
                <div className="value">Affiliate World</div>
              </EventDetail>
            </EventSection>

            <EventSection>
              <EventHeading>
                <EventTitle>Party & Dine</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className="label">When</div>
                <div className="value">20:30 - 1:00</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Where</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Red Sky
                  </a>
                  <br />
                  999 99 Rama I Rd, Pathum Wan
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Invitation</div>
                <div className="value">Strictly by Invite</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Get the Ticket</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Sign Up Here
                  </a>
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Organizer</div>
                <div className="value">Leadxpro</div>
              </EventDetail>
            </EventSection>

            <EventSection>
              <EventHeading>
                <EventTitle>Spicy Moon</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className="label">When</div>
                <div className="value">Coming Soon</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Where</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Tribe Sky Beach Club
                  </a>
                  <br />
                  628 Sukhumvit Rd, Khlong Tan, Khlong Toei
                </div>
              </EventDetail>
            </EventSection>

            <EventSection>
              <EventHeading>
                <EventTitle>Playstars: Extravaganza Show</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className="label">When</div>
                <div className="value">Start at 21:00</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Where</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Medici Kitchen & Bar
                  </a>
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Invitation</div>
                <div className="value">Strictly by Invite</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Get the Ticket</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Sign Up Here
                  </a>
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Organizer</div>
                <div className="value">TrafficStars</div>
              </EventDetail>
            </EventSection>
          </MainContent>
        </ContentWrapper>

        <ContentWrapper day={2}>
          <DaySidebar>
            <DayNumber>
              <h1>DAY 2</h1>
              <p>(5 Dec)</p>
            </DayNumber>
          </DaySidebar>

          <MainContent>
            <EventSection>
              <EventHeading>
                <EventTitle>AW x STM Forum Meetup</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className="label">When</div>
                <div className="value">18:00 - 20:30</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Where</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Tribe Sky Beach Club
                  </a>
                  <br />
                  628 Sukhumvit Rd, Khlong Tan, Khlong Toei
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Invitation</div>
                <div className="value">Strictly by Invite</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Get the Ticket</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Online Form
                  </a>
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Organizer</div>
                <div className="value">Affiliate World</div>
              </EventDetail>
            </EventSection>

            <EventSection>
              <EventHeading>
                <EventTitle>Affiliate White Sensation</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className="label">When</div>
                <div className="value">Start at 20:00</div>
              </EventDetail>
              <EventDetail>
                <div className="label">Where</div>
                <div className="value">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Aira Hotel Bangkok, 22nd Floor 
                  </a>
                  <br />
                  14 Soi Sukhumvit 11, Khlong Toei Nuea, Watthana
                </div>
              </EventDetail>
              <EventDetail>
                <div className="label">Invitation</div>
                <div className="value">Strictly by Invite</div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Get the Ticket</div>
                <div className='value'>
                  <a href="#" target='_blank' rel='noopener noreferrer'>             
                    Sign Up Here
                  </a>
                </div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Organizer</div>
                <div className='value'>AWSummit</div>
              </EventDetail>
            </EventSection>

            <EventSection>
              <EventHeading>
                <EventTitle>Affiliate World After Hours Closing Party</EventTitle>
              </EventHeading>
              
              <EventDetail>
                <div className='label'>When</div>
                <div className='value'>21:00 - 1:30</div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Where</div>
                <div className='value'>
                  <a href="#" target='_blank' rel='noopener noreferrer'>
                    Tribe Sky Beach Club
                  </a>
                  <br />
                  628 Sukhumvit Rd, Khlong Tan, Khlong Toei 
                </div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Invitation</div>
                <div className='value'>No Invitation Needed</div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Organizer</div>
                <div className='value'>Affiliate World</div>
              </EventDetail>
            </EventSection>

            <EventSection>
              <EventHeading>
                <EventTitle>Playstars: Devil's Playground Show</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className='label'>When</div>
                <div className='value'>Start at 21:00, 24:00</div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Where</div>
                <div className='value'>
                  <a href="#" target='_blank' rel='noopener noreferrer'>
                  Hotel Muse Bangkok
                  </a>
                  <br />
                  55, 555 Lang Suan Rd, Khwaeng Lumphini, Pathum Wan
                </div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Invitation</div>
                <div className='value'>Strictly by Invite</div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Get the Ticket</div>
                <div className='value'>
                  <a href="#" target='_blank' rel='noopener noreferrer'>Sign Up Here</a>
                </div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Organizer</div>
                <div className='value'>TrafficStars</div>
              </EventDetail>
            </EventSection>

            <EventSection>
              <EventHeading>
                <EventTitle>ABC Bangkok Fest</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className='label'>When</div>
                <div className='value'>22:00 - 3:00</div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Where</div>
                <div className='value'>
                  <a href="#" target='_blank' rel='noopener noreferrer'>
                    Levels Club
                  </a>
                  <br />
                    6th Floor of the Aloft Hotel เลขที่ 35 Soi Sukhumvit 11, Khlong Toei Nuea, Watthana
                </div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Invitation</div>
                <div className='value'>Strictly by Invite</div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Get the Ticket</div>
                <div className='value'>
                  <a href="#" target='_blank' rel='noopener noreferrer'>
                    Buy Here
                  </a>
                </div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Organizer</div>
                <div className='value'>Affiliate Business Club </div>
              </EventDetail>
            </EventSection>
          </MainContent>
        </ContentWrapper>

        <ContentWrapper day={3}>
          <DaySidebar>
            <DayNumber>
              <h1>DAY 3</h1>
              <p>(6 Dec)</p>
            </DayNumber>
          </DaySidebar>

          <MainContent>
            <EventSection>
              <EventHeading>
                <EventTitle>Affiliate Space Awards</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className='label'>When</div>
                <div className='value'>Start at 20:00</div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Where</div>
                <div className='value'>
                  <a href="#" target='_blank' rel='noopener noreferrer'>
                  Pullman Bangkok King Power
                  </a>
                  <br />
                  8, 2 Rang Nam Alley, Khwaeng Thanon Phaya Thai, Khet Ratchathewi
                </div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Invitation</div>
                <div className='value'>Strictly by Invite</div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Get the Ticket</div>
                <div className='value'>
                  <a href="#" target='_blank' rel='noopener noreferrer'>
                    Buy Here
                  </a>
                </div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Organizer</div>
                <div className='value'>Conversion Club</div>
              </EventDetail>
            </EventSection>

            <EventSection>
              <EventHeading>
                <EventTitle>Playstars: Extravaganza Show</EventTitle>
              </EventHeading>

              <EventDetail>
                <div className='label'>When</div>
                <div className='value'>Start at 21:00</div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Where</div>
                <div className='value'>
                  <a href="#" target='_blank' rel='noopener noreferrer'>
                     Fridman Tower
                  </a>
                </div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Invitation</div>
                <div className='value'>Strictly by Invite</div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Get the Ticket</div>
                <div className='value'>
                  <a href="#" target='_blank' rel='noopener noreferrer'>
                    Sign Up Here
                  </a>
                </div>
              </EventDetail>
              <EventDetail>
                <div className='label'>Organizer</div>
                <div className='value'>TrafficStars</div>
              </EventDetail>
            </EventSection>
          </MainContent>
        </ContentWrapper>
      </ContentArea>
    </MainContainer>
  )
}

export default EventDetails
