import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'Mike Kimani',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      name: 'Faith Wanjiru',
      content: 'Hello As a local Kenyan, I have always admired the diverse landscapes of our country. The photos from The Image Chef Studios showcased Kenya in such a unique and beautiful way. They have a keen eye for detail and composition.',
    },
    {
        id: 3,
        name: 'Amina N.',
        content: 'We hired The Image Chef Studios for our traditional Kenyan wedding, and the photos turned out to be absolutely breathtaking! They managed to capture the emotions and traditions so authentically. Highly recommended!',
      },
  ];

  return (
    <div className="testimonials-container">
      <h2>What Our Customers Say</h2>
      <div className="testimonials">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <p>{testimonial.content}</p>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
