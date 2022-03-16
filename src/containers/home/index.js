// @flow
import React from 'react';
import { Header } from '../../views';
import { Intro } from '../../views/hero';
import { HomeContainer } from './style';

export function Home() {
  return (
    // A wrapper is need here that will warp all the view

    <HomeContainer>
      <Header />
      <Intro />
    </HomeContainer>
  );
}