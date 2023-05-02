import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Delicious Food and Chef Service
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="max-w-4xl">
            <p className="text-xl text-gray-500">
               consectetur adipiscing elit. Praesent pulvinar scelerisque lacus, ac dapibus mi
              faucibus sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Integer eleifend lobortis urna, a lacinia libero lobortis ac. Maecenas nec nunc lobortis, auctor lacus eu,
              consequat urna.
            </p>
            <p className="mt-4 text-xl text-gray-500">
              Sed lobortis, sapien nec fermentum velit ex semper tellus, ut blandit ex ipsum non metus.
              Praesent non augue ut odio sollicitudin mollis ut nec risus. Vivamus commodo, turpis in fringilla
              vestibulum, velit velit tincidunt tellus, id scelerisque ipsum nulla vitae nulla. Donec a luctus orci.
            </p>
            <div className="mt-10">
              <a href="#" className="text-base font-medium text-green-600 hover:text-green-500">
                Learn more about us &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;