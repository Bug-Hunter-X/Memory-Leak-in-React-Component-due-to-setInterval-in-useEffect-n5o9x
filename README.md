# React setInterval useEffect Memory Leak

This example demonstrates a common error in React: using `setInterval` within the `useEffect` hook without proper cleanup. This results in a memory leak because the interval continues to run even after the component unmounts.

## Bug
The `bug.js` file contains a React component that uses `setInterval` to update a counter every second.  However, it fails to include a cleanup function in the `useEffect` hook to stop the interval when the component is unmounted.  This leads to an ever-increasing number of intervals, causing a memory leak.

## Solution
The `bugSolution.js` file demonstrates the correct usage.  The `useEffect` hook now returns a cleanup function that uses `clearInterval` to stop the interval before the component is unmounted, preventing the memory leak.

## How to run
1. Clone this repository.
2. Make sure you have Node.js and npm installed.
3. Run `npm install` in both the `bug` and `bugSolution` directories to install dependencies.
4. Run `npm start` in both directories to start the development servers.

This will allow you to observe the behavior of both the faulty and corrected code.