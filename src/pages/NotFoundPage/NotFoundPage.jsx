import React from 'react'
import { Button } from 'react-bootstrap'
import "./NotFoundPage.style.css"

const NotFoundPage = () => {
  return (
    <div className='not-found'>

      <div className="title-section">
        <h1 className='not-found-title'>404 ERROR</h1>
        <h2>페이지를 찾을 수 없습니다.</h2>
      </div>
      <div className='description-section'>
        <h5>페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.</h5>
        <h5>입력하신 주소가 정확한지 다시 한 번 확인해주세요.</h5>
        <Button className='home-button' href="/" variant="outline-danger">Home</Button>{' '}
      </div>
    </div>
  )
}

export default NotFoundPage
