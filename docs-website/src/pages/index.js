import React, { useState } from 'react';
import ContentContainer from '../Components/ContentContainer/ContentContainer.js';
import Nav from '../Components/Nav/Nav.js';
import Layout from '../Layout/Layout.js';
import menuContext from '../Scripts/createContext.js';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <menuContext.Provider value={{ open, setOpen }}>
        <Nav />
        <ContentContainer />
      </menuContext.Provider>
    </Layout>
  );
}
