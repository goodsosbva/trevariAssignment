/** @jsxImportSource @emotion/react */
import React from "react";
import { useState, useEffect } from "react";
import { css } from "@emotion/react";

let Detail = (modalData: any) => {
    // useEffect(() => {
    //     console.log(modalData.modalData.url);
    // }, [modalData])

  // 가운데로
  const Modal = css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
  `;

  return (
    <div className="col" css={Modal}>
      <div className="card shadow-sm">
        <img alt="게시글 이미지" src={modalData.modalData.url} />
        <div className="card-body">
          <h5>제목</h5>
          <p>{modalData.modalData.title}</p>
          <h5>내용</h5>
          <p>{modalData.modalData.content}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => modalData.onClick()}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
