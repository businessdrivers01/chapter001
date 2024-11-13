import { ParallaxProvider } from 'react-scroll-parallax'
import ParallaxSection from '@src/Components/ParallaxSection'

export default function ParallaxPage() {
  return (
    <ParallaxProvider>
      <div className="parallax-container">
        <ParallaxSection
          id="section1"
          title="Who are we?"
          description="Welcome to Chapter 001 Pakistan, your premier marketing agency in Pakistan. We are a team of experts dedicated to helping businesses like yours succeed in the competitive market. 
          Our services include digital marketing, social media management, SEO, website development, and PR handling."
          imgSrc="/logo-white-updated.png"
          imgAlt="Inspiring Image"
          bgColor="bg-navy-500"
          textColor="text-white"
        />
        <ParallaxSection
          id="section2"
          title=" How We Can Help You?"
          description="At Chapter 001 Pakistan, we understand that every business is unique and has its own specific needs. That's why we offer customized solutions tailored to your business goals.
           Whether you're looking to increase your online presence, build a strong social media strategy, improve your website's search engine ranking, create a stunning website, or manage your reputation, we've got you covered."
          imgSrc="/logo-blue.png"
          imgAlt="Creative Image"
          bgColor="bg-white"
          textColor="text-navy-500"
          reverse={true}
        />
        <ParallaxSection
          id="section3"
          title="Our Expertise"
          description="Our team of experts has years of experience in marketing and communications, and we're dedicated to delivering exceptional results for our clients. 
          We stay up-to-date with the latest industry trends and best practices to ensure that our clients receive the best possible service."
          imgSrc="/logo-white-updated.png"
          imgAlt="Groundbreaking Image"
          bgColor="bg-navy-500"
          textColor="text-white"
        />
      </div>
    </ParallaxProvider>
  )
}