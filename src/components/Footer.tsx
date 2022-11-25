/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'


const Footer = () => {
    const textColor = css`
        color: white !important;
    `
    
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted" css={textColor}>Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted" css={textColor}>About</a></li>
                </ul>
                <p className="text-center text-muted" css={textColor}>© 2022 권현성 제작</p>
            </footer>
        </div>
    )
}

export default Footer