import React, { useState } from 'react';
import ContentContainer from '../Components/ContentContainer/ContentContainer.js';
import Nav from '../Components/Nav/Nav.js';
import Layout from '../Layout/Layout.js';
import colorContext from '../Scripts/colorContext.js';
import menuContext from '../Scripts/menuContext.js';
import backgroundContext from '../Scripts/backgroundContext.js';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('');
  const [background, setBackground] = useState('');

  return (
    <backgroundContext.Provider value={{ background, setBackground }}>
      <colorContext.Provider value={{ color, setColor }}>
        <Layout>
          <menuContext.Provider value={{ open, setOpen }}>
            <Nav />
            <ContentContainer />
          </menuContext.Provider>
        </Layout>
      </colorContext.Provider>
    </backgroundContext.Provider>
  );
}
