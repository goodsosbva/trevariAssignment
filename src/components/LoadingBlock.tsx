/** @jsxImportSource @emotion/react */
import React from 'react'
import {css} from '@emotion/react'

const LoadingBlock = (props: any) => {

  const whiteStyle = css`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: #A4A4A4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
  const blockStyle = css`
  .loading-area {
      display: block;
      padding-bottom: 2rem;
      text-align: center;
      font-weight: bold;
      letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`
    
  return (
      <div css={whiteStyle}>
          <div css={blockStyle}>
              Loading...
          </div>
      </div>
  )
}

export default LoadingBlock;