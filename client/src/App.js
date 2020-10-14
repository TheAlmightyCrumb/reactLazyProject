import React, { lazy, Suspense } from 'react';
import './App.css';
const Blog = lazy(() => import('./Components/Blog'));

function App() {

  return (
    <div>
      <Suspense fallback={<b>Loading...</b>}>
        <Blog />
      </Suspense>
    </div>
  );
}

export default App;
