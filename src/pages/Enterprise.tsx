import React from 'react'
import Heropage from './EnterprisePage/Heropage'
import SponsorCard from './EnterprisePage/SponsorCard'
import ImageComponent1 from './EnterprisePage/ImageComponent1'
import Text from './EnterprisePage/Text'
import Community from './HomePage/Community'
import Component3 from './HomePage/Components3'
import Box from './Box'
import BoxHolder from './EnterprisePage/BoxHolder'

const Enterprise = () => {
  return (
    <div>
      <Heropage/>
      <SponsorCard/>
      <BoxHolder/>
      <Text/>
      <ImageComponent1/>
      <Community/>
      <Component3/>
    </div>
  )
}

export default Enterprise
