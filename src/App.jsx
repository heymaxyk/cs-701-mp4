import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import styled from "styled-components";
import Lists from './pages/Lists';
import ListDetail from './pages/ListDetail';
import ListForm from './pages/ListForm';

const StyledDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: coral;
    padding: 0;
    margin: 0;
    border: 0;
    font-family: "Cairo", sans-serif;
`;

function Root() {
    return(
        <StyledDiv>
            <Routes>
                <Route path='/*' element={<Lists />} />
                <Route path='/list/:listId/new*' element={<ListForm />} />
                <Route path='/list/:listId/*' element={<ListDetail />} />
            </Routes>
        </StyledDiv>
    )
}

const router = createBrowserRouter(
    [{path: "*", Component: Root}]
)

function App() {
  return (
      <>
          <RouterProvider router={router}/>
      </>
  )
}

export default App
