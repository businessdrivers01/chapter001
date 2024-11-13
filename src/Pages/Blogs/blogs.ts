function getRandomDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // Current month (0-11)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the number of days in the current month
    const randomDay = Math.floor(Math.random() * daysInMonth) + 1; // Random day from 1 to daysInMonth
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(randomDay).padStart(2, '0')}`; // Format date
  }
  
  export const blogs = [
    {
      id: 1,
      title: `Embracing Remote Work: Strategies for Success`,
      date: getRandomDate(),
      bannerImage: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600", 
      content: `The shift to remote work has become a permanent fixture in the modern business landscape. Companies must adopt strategies to support their remote teams effectively. 
        This includes leveraging collaboration tools, ensuring clear communication, and fostering a culture of trust. By prioritizing employee well-being and maintaining engagement, businesses can thrive in this new environment.`,
      contentImage: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=2", 
    },
    {
      id: 2,
      title: `Web Development Trends to Watch in 2024`,
      date: getRandomDate(),
      bannerImage: "https://images.pexels.com/photos/3184321/pexels-photo-3184321.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=2", 
      content: `As we enter 2024, several trends are shaping the future of web development. The rise of low-code platforms is empowering businesses to create applications without deep programming knowledge. 
        Additionally, progressive web apps (PWAs) are enhancing user experiences by combining the best of web and mobile apps. Security remains paramount, with a focus on robust data protection practices in development.`,
      contentImage: "https://images.pexels.com/photos/3184453/pexels-photo-3184453.jpeg?auto=compress&cs=tinysrgb&w=600", 
    },
    {
      id: 3,
      title: `AI's Impact on Job Recruitment and Hiring`,
      date: getRandomDate(),
      bannerImage: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=2", 
      content: `Artificial intelligence is transforming the recruitment process, making it more efficient and data-driven. AI tools analyze resumes, identify top candidates, and help reduce bias in hiring. 
        Businesses that leverage AI in their recruitment strategies can enhance their talent acquisition efforts and find the right candidates more quickly.`,
      contentImage: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600", 
    },
    {
      id: 4,
      title: `The Importance of User Experience (UX) in Web Design`,
      date: getRandomDate(),
      bannerImage: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600", 
      content: `In today's digital landscape, user experience (UX) is crucial for web design success. A well-designed website not only attracts visitors but also keeps them engaged. 
        Incorporating user feedback, simplifying navigation, and ensuring mobile responsiveness are key elements in creating a positive UX. As businesses strive to enhance their online presence, prioritizing UX will lead to improved customer satisfaction and retention.`,
      contentImage: "https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&w=600", 
    },
    {
      id: 5,
      title: `Cloud Computing in 2024: Trends and Innovations`,
      date: getRandomDate(),
      bannerImage: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600", 
      content: `Cloud computing continues to evolve, with more businesses migrating to the cloud for its scalability and flexibility. In 2024, expect innovations in edge computing, where data processing occurs closer to the source, improving speed and reducing latency. 
        Moreover, hybrid cloud strategies are gaining traction, allowing companies to balance public and private cloud resources for optimal performance and security.`,
      contentImage: "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=600", 
    },
    {
      id: 6,
      title: `The Future of AI in Business: Opportunities and Challenges`,
      date: getRandomDate(),
      bannerImage: "https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=600",
      content: `As AI technology matures, businesses are exploring new opportunities to enhance operations and customer experiences. In 2024, AI's role in data analysis, automation, and personalized marketing will be pivotal. 
        However, companies must also navigate challenges related to ethical AI use and data privacy. Balancing innovation with responsible practices will be key for businesses seeking to leverage AI for growth.`,
      contentImage: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=600",
    }
  ];
  