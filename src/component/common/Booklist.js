import React from 'react';
import './BookList.css';

const BookList = () => {
  return (
    <div className="book-list">
    <h3>A List of book</h3>
      <ul>
        <li>
          <div className="book-title">Life of Pi</div>
          <div className="author">- <span className="author-name">Davan</span></div>
        </li>
        <li>
          <div className="book-title">Hoc code today</div>
          <div className="author">- <span className="author-name">Fpt</span></div>
        </li>
        <li>
          <div className="book-title">Lear Angular by Example</div>
          <div className="author">- <span className="author-name">FptAptech</span></div>
        </li>
        <li>
          <div className="book-title">Họ Nhà Trai</div>
          <div className="author">- <span className="author-name">Nguyễn Anh Tú</span></div>
        </li>
        <li>
          <div className="book-title">Đôi Mắt Có Lửa</div>
          <div className="author">- <span className="author-name">Nguyễn Hùng Sơn</span></div>
        </li>
      </ul>
    </div>
  );
};

export default BookList;


