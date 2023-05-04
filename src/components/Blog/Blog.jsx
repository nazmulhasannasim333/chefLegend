/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = React.createRef();
  return (
      <div className="max-w-7xl mx-auto">
        <div className=" my-24 md:mx-32 mx-6">
          <div ref={ref}>
            <Pdf targetRef={ref} filename="code-example.pdf">
              {({ toPdf }) => 
              <button onClick={toPdf} className="bg-slate-100 lg:mt-0 mt-3 text-black px-6 py-3 mb-5 capitalize font-bold border rounded-md">
              Download PDF
            </button>
              }
            </Pdf>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300  rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                What is the differences between uncontrolled and controlled
                components ?
              </div>
              <div className="collapse-content">
                <p>
                  In react JS Controlled components refer to components that
                  have their state and behavior controlled by the parent
                  component. These components rely on props passed down from the
                  parent component to update their state and behavior.
                  Uncontrolled components refer to components that manage their
                  own state internally.
                </p>
              </div>
            </div>
            <div
              tabIndex={1}
              className="collapse collapse-plus border border-base-300 rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                How to validate React props using PropTypes ?
              </div>
              <div className="collapse-content">
                <p>
                  We validate them by setting the propTypes property of the
                  component to an object that has the names of the props to
                  validate as the keys. And the corresponding values are the
                  data type of the props.
                </p>
              </div>
            </div>
            <div
              tabIndex={2}
              className="collapse collapse-plus border border-base-300 rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                What is the difference between nodejs and express js ?
              </div>
              <div className="collapse-content">
                <p>
                  Express is a minimal and flexible node. js web application
                  framework, providing a robust set of features for building
                  single and multi-page, and hybrid web applications. On the
                  other hand, Node. js is detailed as "A platform built on
                  Chrome's JavaScript runtime for easily building fast, scalable
                  network applications".{" "}
                </p>
              </div>
            </div>
            <div
              tabIndex={3}
              className="collapse collapse-plus border border-base-300  rounded-box"
            >
              <div className="collapse-title text-xl font-medium">
                What is a custom hook, and why will you create a custom hook ?
              </div>
              <div className="collapse-content">
                <p>
                  React JS Custom hooks are reusable functions that a React JS.
                  Developer can use to add special and unique functionality to
                  the React applications. Usually, if there is a requirement to
                  add a feature, one can install a third-party library and solve
                  the problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Blog;
