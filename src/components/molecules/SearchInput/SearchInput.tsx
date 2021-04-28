import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input/Input';

const Wrapper = styled.div`
* {box-sizing: border-box;}
/* Style the input container */
  display: flex;
  width: 90%;
/* Style the form icons */
.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  img {
    height: auto;
    width: 20px;
  }
}
`;

const inputStyle = {
  borderTopLeftRadius: '0px',
  borderBottomLeftRadius: '0px',
  paddingLeft: '0px',
};

interface SearchInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name: string;
  value: string;
  placeholder: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onChange,
  type = 'search',
  name,
  value,
  placeholder,
}) => (
  <Wrapper>
    <div className="icon">
      <img src="./images/searchIcon.svg" alt="Search" />
    </div>
    <Input
      style={inputStyle}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  </Wrapper>
);

export default SearchInput;
