import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DummyTablePage } from 'pages/DummyTablePage';
import { DummyChartPage } from 'pages/DummyChartPage';
import { DummyListPage } from 'pages/DummyListPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export const App = () => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    fetch('./tabs.json')
      .then(res => res.json())
      .then(data => setTabs(data.tabs));
  }, []);
  return (
    <>
      <Routes>
        <Route path="/dummytable" element={<DummyTablePage />} />
        <Route path="/dummychart" element={<DummyChartPage />} />
        <Route path="/dummylist" element={<DummyListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
