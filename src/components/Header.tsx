/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import reactlogo from '../img/logo192.png'


const Header = (props: any) => {
    const logoStyle = css`
        position: fixed;
        left: 19px;
        top: 21px;
    `

    const headerMargin = css`
        margin-bottom: 77px;
    `

    return (
        <header className="p-3 text-bg-dark" css={headerMargin}>
            <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <img className="bi me-2" css={logoStyle} width="40" height="32" role="img" aria-label="Bootstrap" src={reactlogo}></img>
                </a>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
                <li><a href="#" className="nav-link px-2 text-white">About</a></li>
                </ul>

                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
                </form>

                <div className="text-end">
                </div>
            </div>
            </div>
        </header>
    )
}

export default Header;