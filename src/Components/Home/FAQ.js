import React, { useState } from 'react';
import './FAQ.css'; 

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionItems = [
    {
      question: 'How often should I visit the dentist for check-ups and cleanings?',
      answer:
        'It is generally recommended to visit the dentist every six months for routine check-ups and cleanings. These regular visits allow your dentist to monitor your oral health, detect any issues early on, and provide professional cleanings to remove plaque and tartar buildup, promoting long-term dental wellness.',
    },
    {
      question: 'What are the signs of good oral health?',
      answer:
        'Good oral health is characterized by several indicators, including pink and firm gums, fresh breath, absence of tooth pain or sensitivity, and clean teeth free of visible plaque or tartar buildup. Maintaining these signs typically involves practicing proper oral hygiene, such as brushing twice a day, flossing daily, and scheduling regular dental check-ups.',
    },
    {
      question: 'How can I prevent cavities and gum disease?',
      answer:
        'Preventing cavities and gum disease involves adopting a consistent oral care routine and making healthy lifestyle choices. This includes brushing your teeth with fluoride toothpaste, flossing daily, limiting sugary foods and drinks, avoiding tobacco products, and scheduling regular dental exams and cleanings. Additionally, using fluoride mouthwash and considering dental sealants can provide added protection against tooth decay.',
    },
    {
      question: 'What treatments are available for improving the appearance of my smile?',
      answer:
        ' There are various dental treatments and procedures available to enhance the aesthetics of your smile. These may include teeth whitening to brighten stained or discolored teeth, dental veneers to correct minor imperfections, orthodontic treatments like braces or clear aligners to straighten misaligned teeth, and dental implants or bridges to replace missing teeth. Your dentist can assess your smile and recommend the most suitable treatment options based on your specific needs and goals.',
    },
    // ... Add more items as needed
  ];

  return (
    <div className="accordion">
      <h1>Answers At A Glance</h1>
      <h5 className='text-center'>Frequently Asked Questions about your Dental Wellness</h5>
      {accordionItems.map((item, index) => (
        <div key={index} className="accordion-item">
          <input
            type="checkbox"
            id={`accordion${index + 1}`}
            checked={activeIndex === index}
            onChange={() => toggleAccordion(index)}
          />
          <label htmlFor={`accordion${index + 1}`} className="accordion-item-title">
            <span className="icon">{activeIndex === index ? '' : ''}</span>
            {item.question}
          </label>
          <div className="accordion-item-desc">
            {activeIndex === index && <p>{item.answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
