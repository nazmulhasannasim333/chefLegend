import React from 'react';

const UserReview = () => {
  const reviews = [
    {
      id: 1,
      name: 'Md Nasim Hosen',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum, sapien vel feugiat malesuada, felis diam lobortis dolor, eget sagittis est odio ut augue. Cras non purus sed massa dictum molestie. In ullamcorper tempor enim eget semper.',
      rating: 4,
    },
    {
      id: 2,
      name: 'Md Shorful Islam',
      review:
        'Nulla ut sagittis massa. Sed pharetra tincidunt malesuada. Donec aliquet lacinia sapien, ac consectetur arcu pulvinar ac. Aliquam interdum metus lectus, ac laoreet magna consectetur vel. Praesent hendrerit sit amet ex vitae bibendum.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Md Nahid Khan',
      review:
        'Fusce ullamcorper elit quis mauris pretium, eu porttitor nibh molestie. Nulla consequat auctor enim eu ultricies. Vestibulum ut convallis sapien. In pharetra eros vel neque venenatis, sit amet commodo sapien ultrices. Ut vel faucibus ante, vel tincidunt est.',
      rating: 3,
    },
  ];

  return (
    <div className=" py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold ">What Customer Are Saying</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-8 w-8 text-yellow-500" viewBox="0 0 24 24" fill="none">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.4 23.4l3.9-10.3L2 9.6l10.2-1 4.8-9L19.6 9l10.2 1-7.3 3.5L21 23.4l-8.1-6.2"
                      />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <p className="text-gray-900 text-sm font-medium">{review.name}</p>
                    <p className="text-gray-500 text-sm">{review.rating} out of 5 stars</p>
                  </div>
                </div>
                <div className="mt-5 text-gray-700">{review.review}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserReview;