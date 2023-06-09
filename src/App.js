
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {RouterProvider} from "react-router-dom";
import default_router from "./routes/default_router";
import {tokenContext} from "./contexts/tokenContext";
import React, {useState} from "react";
import axios from "axios";
import {ConfigProvider} from "antd";
import zhCN from 'antd/es/locale/zh_CN';


const theme = extendTheme({
  colors: {
    frog: {
      400: '#7551FF',
      500: "#422afb",
      600: "#3311DB",
    },
    navy:{
      50: '#d0dcfb',
      100: '#aac0fe',
      200: '#a3b9f8',
      300: '#728fea',
      400: '#3652ba',
      500: '#1b3bbb',
      600: '#24388a'
    },
    sg:{
      100:'#E0E5F2',
      200:'#E1E9F8',
      400:'#E9EDF7',
      500:'#8F9BBA',
      600:'#A3AED0'
    },
    greyStyled:{
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#1F2733',
      800: '#1A202C',
      900: '#171923'
    },
    blueStyled: {
      50: '#EBF8FF',
      100: '#BEE3F8',
      200: '#90CDF4',
      300: '#63B3ED',
      400: '#4299E1',
      500: '#3182CE',
      600: '#2B6CB0',
      700: '#2C5282',
      800: '#2A4365',
      900: '#1A365D'
    },
    chants:{
      50: '#A0AEC0',
      100: '#748ba9',
    },
  },
})

ConfigProvider.config({
  theme: {
    primaryColor: '#2C5282',
    successColor: '#50af78',
  },
});

function App() {

  return (
      // <React.StrictMode>
      <ChakraProvider theme={theme}>
        <RouterProvider router={default_router} />
      </ChakraProvider>
      // </React.StrictMode>
  );
}

export default App;
