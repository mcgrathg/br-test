import React, { useState } from 'react';

import Header from './header';
import List from './list';

const App = () => {
  const [isLoveFiltered, setIsLoveFiltered] = useState(false);

  return (
    <main>
      <Header
        isLoveFiltered={isLoveFiltered}
        toggleLoveFilter={setIsLoveFiltered}
      />
      <List isLoveFiltered={isLoveFiltered} />
    </main>
  );
};

export default App;
