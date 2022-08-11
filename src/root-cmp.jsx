import React from 'react';
import { Route, Routes } from 'react-router-dom';


import { HomePage } from './pages/homepage.jsx'
import { UserMsg } from './cmps/user-msg'
import { Table } from './cmps/dashboard/table/table.jsx';
import { Charts } from './cmps/dashboard/charts/chart.jsx';


export const RootCmp = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<HomePage />} >
          <Route path="" exact element={<Table />} />
          <Route path="/charts" exact element={<Charts />} />
        </Route>
      </Routes>
      <UserMsg />
    </section>
  )
}

