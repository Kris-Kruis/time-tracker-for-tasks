import React from 'react'
import { styled } from 'styled-components'

export const Clock: React.ComponentType<{ children: string }> = styled.div`
  width: fit-content;
  padding: 5px 50px;
  border-radius: 3px;
  box-shadow: 0 0 5px #248498;
  background-image: linear-gradient(110deg, #2fb5d2, #1dc6a4);
  color: #e0e0e0;
  font-size: 20px;
`
