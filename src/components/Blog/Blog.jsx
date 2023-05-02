import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-7xl mx-auto'>
          <div className=' my-24 md:mx-32 mx-6'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            When should use context api ?
            </div>
            <div className="collapse-content"> 
                <p>React Context API is a way to manage state globally. It can be used together with the useState Hook to share state between deeply nested components more easily.</p>
            </div>
            </div>
            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            What is react customs Hooks ?
            </div>
            <div className="collapse-content"> 
                <p>React customs hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem</p>
            </div>
            </div>
            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            What is useRef ?
            </div>
            <div className="collapse-content"> 
                <p>useRef is a built-in React hook that accepts one argument as the initial value and returns a reference A reference is an object having a special property current </p>
            </div>
            </div>
            <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            What is useMemo ?
            </div>
            <div className="collapse-content"> 
                <p>The React useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. </p>
            </div>
            </div>
        </div>
     </div>
    );
};

export default Blog;