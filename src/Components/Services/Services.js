import React from 'react'
import Header from '../Header/Header'
import "./Services.css"
import { useState } from 'react'

const Services = () => {
  const [serviceDetails, setServiceDetails] = useState([
    {
      serviceImages: '/images/dentalimplants.png',
      title: 'Dental Implants',
      description:
        'Dental implants are surgically placed in the jawbone to replace missing teeth. Symptoms of tooth loss may include difficulty chewing, speech problems, and changes in facial appearance. Dental implants act as artificial tooth roots, providing support for replacement teeth such as crowns or bridges. Treatment involves implant placement followed by the attachment of custom-made prosthetics to restore oral function and aesthetics.',
    },
    {
      serviceImages: '/images/braces.png',
      title: 'Braces',
      description:
        'Braces are devices used to align and straighten teeth and correct bite issues. They are commonly used to treat overcrowded or crooked teeth. Symptoms may include misaligned teeth or difficulty biting and chewing. Treatment involves wearing braces over a period of time, typically ranging from several months to a few years.',
    },
    {
      serviceImages: '/images/bridges.png',
      title: 'Bridges And Crowns',
      description:
        'Bridges and crowns are dental prosthetics used to restore damaged or missing teeth. Crowns are custom-made covers that encase a damaged tooth to restore its shape, size, and strength. Bridges replace missing teeth by anchoring artificial teeth to adjacent natural teeth or implants. Symptoms include missing or damaged teeth, which can lead to difficulty chewing and speech problems. Treatment involves fitting and attaching the prosthetics to restore oral function and aesthetics.',
    },
    {
      serviceImages: '/images/clearanligner.png',
      title: 'Clear Aligners / Invisible Braces',
      description:
        'Clear aligners are custom-made mouthpieces that gradually straighten teeth. They are nearly invisible and can be removed for eating and cleaning. Symptoms of misaligned teeth or bite issues are common indications for treatment. Clear aligners offer a discreet and convenient alternative to traditional braces for correcting dental alignment.',
    },
    {
      serviceImages: '/images/dentfiliing.png',
      title: 'Dental Filling',
      description:
        'Dental fillings are used to repair teeth damaged by decay or fracture. Symptoms of tooth decay may include toothache, sensitivity to hot or cold, or visible pits or holes in the teeth. During treatment, the decayed portion of the tooth is removed, and the cavity is filled with a dental filling material, restoring the tooth’s function and preventing further decay.',
    },
    {
      serviceImages: '/images/dentalsealants.jpg',
      title: 'Dental Sealants',
      description:
        `Dental sealants are thin, plastic coatings applied to the chewing surfaces of molars and premolars to prevent tooth decay. These protective coatings fill in the deep grooves and pits on the chewing surfaces of teeth, which are difficult to clean with regular brushing and flossing. Sealants act as a barrier, preventing food particles and bacteria from accumulating in these vulnerable areas and reducing the risk of cavities. Sealants are typically applied to children's permanent molars as soon as they erupt, usually between the ages of 6 and 12, to provide long-lasting protection during their cavity-prone years. However, adults may also benefit from sealants, especially if they have deep grooves in their teeth or are at higher risk of cavities. The application process is quick and painless, involving cleaning and drying the teeth before applying the sealant material, which is then hardened with a special light. Dental sealants are an effective preventive measure that can help maintain oral health and reduce the need for costly and invasive dental treatments.`
    },
    {
      serviceImages: '/images/dentures.png',
      title: 'Dentures',
      description:
        'Dentures are removable replacements for missing teeth and surrounding tissues. Symptoms of tooth loss may include difficulty chewing, speech problems, and changes in facial appearance. Dentures restore chewing function, support facial muscles, and improve aesthetics. Treatment involves custom fitting and adjustments to ensure comfort and functionality.',
    },
    // {
    //   serviceImages:'/images/gum.jpg',
    //   title: 'Gum Pigmentation',
    //   description:
    //     'Gum Pigmentation, or gum bleaching, is a cosmetic procedure to lighten or remove dark patches on the gums. Symptoms may include dark spots or patches on the gums, which can affect the smile’s appearance. Treatment involves removing the pigmented tissue using various techniques, resulting in a more uniform and aesthetically pleasing gum color.',
    // },
    {
      serviceImages: '/images/kids.png',
      title: 'Kids Dentistry',
      description:
        'Kids dentistry focuses on oral health care for children from infancy through adolescence. Symptoms may include tooth decay, gum disease, or developmental issues such as crooked teeth or improper jaw alignment. Treatment involves preventive care, such as dental cleanings and fluoride treatments, as well as restorative procedures like fillings or braces, tailored to the unique needs of children.',
    },
    {
      serviceImages: '/images/laserdentist.png',
      title: 'Laser Dentistry',
      description:
        'Laser dentistry utilizes concentrated beams of light energy to perform various dental procedures. Symptoms may include gum disease, cavities, or soft tissue abnormalities. Treatment with dental lasers offers benefits such as reduced discomfort, faster healing times, and minimal bleeding. Procedures include gum disease treatment, cavity removal, and cosmetic gum reshaping.',
    },
    {
      serviceImages: '/images/opening.png',
      title: 'Reduce Mouth Opening',
      description:
        'Reduced mouth opening, or trismus, is a condition characterized by limited jaw movement. Symptoms may include difficulty opening the mouth, jaw pain, or clicking or popping noises. Treatment aims to alleviate symptoms and improve jaw function through measures such as physical therapy, medications, or surgical interventions.',
    },
    {
      serviceImages: '/images/rootcanal.png',
      title: 'Root Canal Treatment',
      description:
        'Root canal treatment is performed to repair and save a badly damaged or infected tooth. Symptoms may include severe toothache, sensitivity to hot or cold, or swelling of the gums. During treatment, the infected or inflamed pulp inside the tooth is removed, and the root canal is cleaned, disinfected, and sealed. Root canal therapy relieves pain and preserves the natural tooth structure.',
    },
    {
      serviceImages: '/images/ulcers.png',
      title: 'Mouth Ulcers',
      description:
        'Mouth ulcers are painful sores that form on the mucous membranes inside the mouth. Symptoms may include red or white lesions, pain or discomfort, and difficulty eating or drinking. Treatment involves addressing underlying causes such as oral infections, injuries, or underlying health conditions. Measures to relieve symptoms include topical medications, oral rinses, and lifestyle modifications.',
    },
    {
      serviceImages: '/images/whitening.png',
      title: 'Teeth Whitening',
      description:
        'Teeth whitening is a cosmetic procedure to lighten the color of teeth and remove stains or discoloration. Symptoms may include yellow or stained teeth, which can affect the smile’s appearance. Treatment involves the application of bleaching agents to the teeth, either in-office or at-home, to achieve a brighter and more youthful smile. Teeth whitening is safe and effective when performed under professional supervision.',
    },
    {
      serviceImages: '/images/wisdomteeth.jpg',
      title: 'Wisdom Teeth',
      description:
        'Wisdom teeth are the third set of molars that typically emerge in late adolescence or early adulthood. Symptoms of impacted wisdom teeth may include pain, swelling, or infection. Treatment involves the surgical removal of impacted or problematic wisdom teeth to prevent complications such as impaction, crowding, or damage to adjacent teeth. Wisdom teeth extraction is a common and routine dental procedure.',
    },
    {
      serviceImages:'/images/Oral-Surgery.jpeg',
      title: 'Oral Surgery',
      description:`Oral surgery encompasses a wide range of surgical procedures performed on the mouth, jaws, and face. It includes treatments such as tooth extractions, dental implant placement, corrective jaw surgery, and treatment of oral diseases and injuries. Symptoms requiring oral surgery may vary widely, including impacted teeth, facial trauma, jaw misalignment, cysts or tumors in the jaw, and severe dental infections. Oral surgeons, also known as oral and maxillofacial surgeons, are highly trained dental specialists who perform these surgical procedures. Treatment may involve local or general anesthesia, depending on the complexity of the procedure and the patient's needs. Oral surgery aims to restore oral health, alleviate pain, and improve the function and aesthetics of the mouth and face. Patients undergoing oral surgery receive personalized care and followup to ensure optimal outcomes and recovery`
    },
    {
      serviceImages:'/images/CompositeFillings.jpg',
      title: 'Composite Fillings',
      description:
        'Composite fillings, also known as tooth-colored fillings, are a popular restorative dental treatment used to repair teeth affected by decay, fractures, or minor damage. Unlike traditional metal (amalgam) fillings, composite fillings are made of a mixture of glass or quartz filler and a resin medium that closely matches the color of natural teeth, making them virtually invisible. Symptoms of tooth decay may include toothache, sensitivity to hot or cold, or visible pits or holes in the teeth. During treatment, the decayed portion of the tooth is removed, and the composite material is applied in layers and hardened with a special light. The filling is then shaped and polished to blend seamlessly with the surrounding tooth structure. Composite fillings not only restore the function and strength of the tooth but also provide an aesthetically pleasing result, preserving the natural appearance of the smile.'
    },
    {
      serviceImages:'/images/trauma.png',
      title: 'Dental Trauma',
      description:
        'Dental trauma can manifest in various ways, such as tooth fractures, dislocations, or avulsions, often resulting from accidents or injuries. Symptoms may include pain, swelling, bleeding, or difficulty chewing. Prompt treatment is crucial to prevent further damage and restore dental health. Common treatments for dental trauma include dental bonding, root canal therapy, or tooth re-implantation, depending on the severity of the injury. Seeking immediate dental care can alleviate discomfort and prevent long-term complications associated with dental trauma.'
    },
    {
      serviceImages:'/images/jaw.png',
      title: 'Jaw Fracture',
      description:
        `A jaw fracture, also known as a mandibular fracture, occurs when there is a break or crack in the jawbone. Symptoms may include pain, swelling, difficulty opening or closing the mouth, bruising, and misalignment of the teeth or jaw. Treatment typically involves immobilizing the jaw using wires, plates, or screws to allow for proper healing. In severe cases, surgery may be necessary to realign the fractured bones. Recovery time varies depending on the severity of the fracture, but proper medical attention is essential to prevent complications and ensure full recovery.`
    },
    
  ]);
  
  return (
    <>
      <div className="servicesBack">
        <Header />
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-6 d-flex justify-content-center flex-column">
              <p className="fw-bold" style={{fontSize:"20px"}}>What We Do</p>
              <h1 style={{fontSize:"58px"}}>Our Services</h1>
              <p className='fw-bold'>Transforming Smiles, Restoring Confidence: Explore Our Comprehensive Dental Solutions</p>
            </div>
            <div className="col-lg-6 mt-3 d-flex justify-content-center">
              <img className="service1" src="./servicePic.png" alt="service" />
            </div>
          </div>
        </div>
      </div>
      <h1 className='text-center fw-bold m-4' style={{fontSize:"45px"}}>Our Specialities</h1>
      <div className="main">
        <ul className="cards">
          {
            serviceDetails.map((service) => {
              return <>
                <li className="cards_item">
                  <div className="card">
                    <div className="card_image">
                      <img src={service.serviceImages} />
                    </div>
                    <div className="card_content">
                      <h2 className="card_title">{service.title}</h2>
                      <div className="card_text">
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </div>
                </li>
              </>
            })
          }
        </ul>
      </div>


    </>
  )
}

export default Services