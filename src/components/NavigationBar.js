import React from 'react'
import styled from 'styled-components'
import FilterListIcon from '@mui/icons-material/FilterList';

export default function NavigationBar() {
  return (
        <Container>
            <Wrap>
                <Option>
                    Nearest rides
                </Option>
                <Option>
                    Upcoming rides (4)
                </Option>
                <Option>
                    past rides (2)
                </Option>
                
            </Wrap>
            <Filter>
                <FilterListIcon/>
                filter
            </Filter>
        </Container>
  )
}

const Container = styled.div`
    background-color: gray;
    display: flex;
    justify-content: space-between;
    margin-top:29px;
    color: white;
`
const Option = styled.div`
    display: flex;
    align-items: center;
    margin-left: 44px;
`
const Wrap = styled.div`
    display: flex;
    align-items: center;
    
`
const Filter = styled.div`
    margin-right: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
