import React from 'react'
import styled from 'styled-components'
import lb from '../assets/location-banner.jpg'

function List({ride, ...props}) {
  return (
      <Wrap>
          {
              ride.map((data) =>(
                <Container>
                <LocationBanner src = {lb} />
                <RideDetails>
                    <Detail>

                        Ride Id : {data.id}
                    </Detail>
                    <Detail>
                        Origin Station : {data.origin_station_code}
                    </Detail>
                    <Detail>
                        station_path: {data.station_path}
                    </Detail>
                    <Detail>
                        Date : {data.date}
                    </Detail>
                    <Detail>
                        Distance : 
                    </Detail>
                </RideDetails>
            </Container>
              ))
          }
        
      </Wrap>
    
  )
}
const Wrap = styled.div`
    
`
const Container = styled.div`
    margin: 24px;
    background-color: #171717;
    display: flex;
    
    border-radius: 10px;
`
const LocationBanner = styled.img`
    height: 146px;
    margin: 22px;
    border-radius: 10px;
`
const RideDetails = styled.div`
    color: white;
    margin: 22px;
`
const Detail = styled.div`
    margin:8px;

width: 475px;
height: 24px;
left: calc(50% - 475px/2 - 33.5px);
top: calc(50% - 24px/2 + 92px);


font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;

color: #CFCFCF;


`

export default List