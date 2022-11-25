/** @jsxImportSource @emotion/react */
import React from 'react'
import { useEffect } from 'react';
import { css } from '@emotion/react'


let Detail = (modalData: any) => {
    useEffect(() => {
        console.log("모달 데이터 안에 전송된 정보!!!: ", modalData.modalData);
    })

    const Modal = css`
        position: fixed;
        left: 154px;
    `

    return (
        <div className="col" css={Modal}>
          <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns={modalData.modalData.url} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div className="card-body">
                    <h5>제목</h5>
                    <p>{modalData.modalData.title}</p>
                    <h5>내용</h5>
                    <p>{modalData.modalData.content}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => modalData.onClick()}>닫기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Detail;