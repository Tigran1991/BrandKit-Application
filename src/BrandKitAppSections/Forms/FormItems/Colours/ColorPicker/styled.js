import styled from "styled-components"
import addLogo from '../../../../../images/add.png';

export const ColorIcon = styled.div`
  position: absolute;
  border: 1px solid white;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  background-image: url(${addLogo});
  background-repeat: no-repeat;
  background-position: center;

  :hover{
    border: 1px solid green;
  }
`

export const ColorPicker = styled.div`
  left: 30px;
  top: 30px;
  width: 160px;
  position: absolute;
  background-color: white;
  z-index: 3;
  top: 160px;
`

export const ColorArea = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
`

export const Container = styled.div`
  padding: 4px;
`

export const RangeContainer = styled.div`
  // width: 90%;
  height: 6px;
  margin: 9px auto;
  position: relative;
`

const pointer = `
  width: 6px;
  height: 6px;
  position: absolute;
  z-index: 1000;
  background: transparent;
  border: 4px solid white;
  outline: 1px solid grey;
  border-radius: 50%;
`

export const AreaPointer = styled.div`
  ${pointer}
  margin: -10px 0 0 -10px;
`

export const Pointer = styled.div`
  ${pointer}
  margin: 0 0 0 -10px;
`

const BackgroundStyles = `
  position: absolute;
  width: 100%;
  height: 100%;
`

export const BgMain = styled.div`
  ${BackgroundStyles}
  background: ${(props) => props.color};
`

export const BgMainGradient = styled.div`
  ${BackgroundStyles}
  border-radius: 15px;
  background: linear-gradient(
    to right,
    transparent 0%,
    ${(props) => props.color} 85%,
    ${(props) => props.color} 100%
  );
`

export const BgAll = styled.div`
  ${BackgroundStyles}
  border-radius: 15px;
  background: linear-gradient(
    to right,
    #f00 0%,
    #ff0 16.66%,
    #0f0 33.33%,
    #0ff 50%,
    #00f 66.66%,
    #f0f 83.33%,
    #f00 100%
  );
`

export const BgWhite = styled.div`
  ${BackgroundStyles}
  background: linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
`

export const BgBlack = styled.div`
  ${BackgroundStyles}
  background: linear-gradient(to bottom, transparent 0%, #000 100%);
`

export const BgLattice = styled.div`
  ${BackgroundStyles}
  border-radius: 15px;
  background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
    linear-gradient(-45deg, #ccc 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #ccc 75%),
    linear-gradient(-45deg, transparent 75%, #ccc 75%);
  background-size: 16px 16px;
  background-position: 0 0, 0 8px, 8px -8px, -8px 0px;
`

export const TextContainer = styled.div``

export const TextInput = styled.input`
  width: 100%;
  height: 7px;
  font-size: 16px;
  text-align: center;
  padding: 8px 0;
  border: 1px solid #bbb;

  :hover {
  }

  &:focus {
    outline: none;
    border: 1px solid #4da6ff;
  }
`

export const ColorList = styled.div`
display: flex;
  margin-top: 4px;
`

export const ColorListItem = styled.div`
  width: 10px;
  height: 7px;
  margin: 10px;
  border: 1px solid #777;
  border-radius: 3px;
  display: inline-block;
  background-color: ${(props) => props.color};
`
