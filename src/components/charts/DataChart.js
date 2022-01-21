import { Heading, Pane, Spinner } from 'evergreen-ui'
import React, { useEffect, useState } from 'react'
import { Processing } from '../../data-processing/prosessing'
import { ContainerLayout, ItemContainer, ListLayout } from '../layout'
import { Bachart } from './bar'
import { Pichart } from './pie'
import { Radchart } from './radar'

const pross = new Processing()

export const Dchart = ({ data }) => {
  const [regdata, setRegData] = useState([])
  const [datadate, setDate] = useState('')
  const [bcddate, setBcdDate] = useState('')

  useEffect(() => {
    const [date, bcd_date, ...arrData] = pross.process_data(data)
    setRegData(arrData)
    setDate(date)
    setBcdDate(bcd_date)
  }, [data])

  if (regdata.length > 0) {
    return (
      <ContainerLayout>
        <Heading color="dodgerblue" size={600}>
          Date : {datadate}
        </Heading>
        <Heading color="dodgerblue" size={600}>
          BCD decoded : {bcddate}
        </Heading>

        <ListLayout>
          <ItemContainer>
            <Bachart data={regdata} />
          </ItemContainer>
          <ItemContainer>
            <Radchart data={regdata} />
          </ItemContainer>
          <ItemContainer>
            <Pichart data={regdata} />
          </ItemContainer>
        </ListLayout>
      </ContainerLayout>
    )
  } else {
    return (
      <Pane>
        <Spinner marginX="auto" marginY={120} />
      </Pane>
    )
  }
}
