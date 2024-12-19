```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Solution: Check for conflicting elements or logic within Contact component */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function Contact() { 
  // Solution: Potential fix - Check for issues within this component
  // Example: If Contact uses a useEffect hook that depends on a variable that is null
  // then there could be issues rendering the component
  return <h1>Contact</h1>; 
}

export default App;
```