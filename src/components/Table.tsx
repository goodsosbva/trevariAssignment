/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { useState,useEffect } from 'react'

const Table = (props: any) => {
    useEffect(() => {
        console.log(props.data[1]);
        // TODO 데이터 가공이 필요해 보임.1
    })

    return (
        <>
        <table className="table table-dark table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Learder</th>
                <th scope="col">Partners</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                    <td>{ props.data[0].club.name }</td>
                    <td>{ props.data[0].leaders[0].name }</td>
                    <td>{ props.data[0].partners[0].name }</td>
                    <td>{ props.data[0].price }</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                    <td>{ props.data[1].club.name }</td>
                    <td>{ props.data[1].leaders[0].name }</td>
                    <td>{ props.data[1].partners[0].name }</td>
                    <td>{ props.data[1].price }</td>
                </tr>
            </tbody>
        </table>
        </>
    )

}

export default Table;