import React from 'react';
import WaterTracker from '../containers/WaterTracker';
import Wolves from './wolves/Wolves';
import List from './List';
import Wolf from './wolves/Wolf';
import Flex from './flexible/Flex';

const wolves = [
  { name: 'scout', img: 'https://ih1.redbubble.net/image.509463701.1253/mp,840x860,gloss,f8f8f8,t-pad,1000x1000,f8f8f8.jpg' },
  { name: 'glasses', img: 'https://ih1.redbubble.net/image.423723364.3266/aps,840x830,small,transparent-pad,1000x1000,f8f8f8.u2.jpg' }
];

export default function App() {
  return (
    <>
      <h1>Hipster wolves</h1>
      {/* <List items={wolves} Component={Wolf} /> */}
      {/* <Wolves wolves={wolves} /> */}
      <Flex title="Hello" justify="space-around">
        <img src={wolves[0].img} />
        <img src={wolves[1].img} />
      </Flex>
    </>
  );
}
