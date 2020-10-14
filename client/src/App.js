import React, { lazy, Suspense } from 'react';
const Blog = lazy(() => import('./Components/Blog'));

function App() {

  return (
    <div className="App">
      <Suspense fallback={<b>Loading...</b>}>
        <Blog />
      </Suspense>
    </div>
  );
}

export default App;
