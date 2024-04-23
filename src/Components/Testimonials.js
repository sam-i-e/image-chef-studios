import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'Mike Kimani',
      content: 'I was blown away by the stunning photos from my safari trip! The images perfectly captured the essence and beauty of Kenya. Truly talented photographers who know how to seize the moment.',
    },
    {
      id: 2,
      name: 'Faith Wanjiru',
      content: 'Hello As a local Kenyan, I have always admired the diverse landscapes of our country. The photos from The Image Chef Studios showcased Kenya in such a unique and beautiful way. They have a keen eye for detail and composition.',
    },
    {
        id: 3,
        name: 'Amina N.',
        content: 'We hired The Image Chef Studios for our ruracio (traditional Kenyan wedding) and the photos turned out to be absolutely breathtaking! They managed to capture the emotions and traditions so authentically. Highly recommended!',
      },
      {
        id: 4,
        name: 'Paul Nyareru.',
        content: 'I was initially nervous about getting my photos taken, but The Image Chef Studios made me feel at ease right from the start. Their professionalism and attention to detail are commendable. The final photographs exceeded all my expectations!',
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
