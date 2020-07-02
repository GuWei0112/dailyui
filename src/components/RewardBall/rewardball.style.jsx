import styled from 'styled-components'
import TreeItem from "@material-ui/lab/TreeItem";

export const BallContainer = styled.div`
position: absolute;
top: 15vh;
left: 70vw;
`

export const BallTitle = styled.div`
font-size: 25px;
font-family: 'Balsamiq Sans', cursive;
`

export const BallItemsContainer = styled.div`
display: grid;
grid-template-columns: repeat(2,2fr);
font-family: 'Balsamiq Sans', cursive;
`

export const BallItemTitle= styled.div`
grid: 1;
font-family: 'Balsamiq Sans', cursive;
font-size: 12px;
padding: 3px;
`

export const BallItemPrice= styled.div`
grid: 1;
font-family: 'Balsamiq Sans', cursive;
font-size: 12px;
padding: 5px;
`

export const BallTreeItem = styled(TreeItem)`
background-color: grey;
`