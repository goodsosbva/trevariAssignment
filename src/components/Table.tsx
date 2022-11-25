/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { useState, useEffect } from 'react'
import Detail from './Detail'

const Table = (props: any) => {
    let [modal, setModal] = useState(false) // 스위치역할

    useEffect(() => {
        console.log(props.data[1]);
        // TODO 데이터 가공이 필요해 보임.
        console.log("모달 데이터 정보!!!: ", modalData);
        console.log(modal);
    },[modal])

    const rendering = () => {
        let result: any = [];
        let ans: any = [];
        for (let i = 0; i < props.data.length; i++) {
            result.push(
                <tr key={props.data[i].club.id} onClick={() => detailDaily(props.data[i])}>
                    <th scope="row">{i + 1}</th>
                    <td>{ props.data[i].club.name }</td>
                    <td>{ props.data[i].leaders[0].name }</td>
                    <td>{ props.data[i].partners[0].name }</td>
                    <td>{props.data[i].price}</td>
                </tr>
            )
        }
        ans.push(result);
        result = "";
        return ans;
    };

    // 상세 페이지 구현
    const [modalData, setModalData] = useState({
        kind: "",
        title: "",
        content: "",
        url: "",
        name: "",
    });

    let detailDaily = (data : any) => {
        console.log(data);
        setModalData({
            ...modalData,
            kind: "게시글 상세보기",
            title: data.club.name,
            content: data.club.description,
            url: data.club.coverUrl,
            name: data.leaders[0].name,
        })
        setModal(true);
    }

    const handleRemovePlayer = () => {
        setModal(false);
      }

    const tableMargin = (props : any) => css`
        margin-bottom: 177px;
        position: ${props.modal === true ? "fixed;" : ""}
        top: ${props.modal === true ? "0;" : ""}
        left: ${props.modal === true ? "0;" : ""}
        bottom: ${props.modal === true ? "0;" : ""}
        right: ${props.modal === true ? "0;" : ""}
        background: ${props.modal === true ? "rgba(0, 0, 0, 0.8);" : ""}
        padding: ${props.modal === true ? "2rem;" : ""}
    `

    // const modalTrue = (props) => css`
    //     position: fixed;
    //     top:0; left: 0; bottom: 0; right: 0;
    //     background: rgba(0, 0, 0, 0.8);
    //     padding: 2rem;
    // `

    return (
        <table className="table table-dark table-hover" css={tableMargin({ modal })}>
            <thead>
                <tr>
                <th scope="col">순서</th>
                <th scope="col">Title</th>
                <th scope="col">Learder</th>
                <th scope="col">Partners</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            {
      	            modal == true ? <Detail modalData={modalData} onClick={handleRemovePlayer} /> : null
            }
            <tbody>
                {/* 예시 */}
                {/* <tr>
                    <th scope="row">1</th>
                    <td>{ props.data[0].club.name }</td>
                    <td>{ props.data[0].leaders[0].name }</td>
                    <td>{ props.data[0].partners[0].name }</td>
                    <td>{ props.data[0].price }</td>
                </tr> */}
                {rendering().map((data: any) => data)}
            </tbody>
        </table>
    )

}

export default Table;