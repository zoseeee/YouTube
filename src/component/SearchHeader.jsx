import React, { useRef } from "react";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className="Header">
      <div className="hd_wrapper">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
          <h1>YouTube</h1>
        </div>
        <div className="search-button">
          <input
            ref={inputRef}
            type="search"
            placeholder="검색"
            onKeyPress={onKeyPress}
          />
          <button className="button" type="submit" onClick={onClick}>
            <img src="/images/search.png" alt="" />
          </button>
        </div>
        <button className="login">
          <div className="login-img">
            <img src="/images/login.png" alt="" />
          </div>
          <span>로그인</span>
        </button>
      </div>
    </header>
  );
};

export default SearchHeader;
