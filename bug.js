```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval.  The callback function does not return a cleanup function.
    setInterval(() => {
      setCount(count + 1);
    }, 1000); 
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```