import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/Link.png"
import image4 from "../../assets/image5.jpg"

export default function BlogGrid() {
  const blogPosts = [
    {
      id: 1,
      title: 'Sustainable Practices Reducing Waste in Industrial Production',
      image: 'https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=80&w=600',
      link: '#blog-1'
    },
    {
      id: 2,
      title: 'Advanced Robotics Revolutionizing Industrial Workflows',
      image:image1 ,
      link: '#blog-2'
    },
    {
      id: 3,
      title: 'Top Benefits of the Robotics in Manufacturing',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
      link: '#blog-3'
    },
    {
      id: 4,
      title: 'Leveraging Data Analytics for Smarter Production',
      image: image2,
      link: '#blog-4'
    },
    {
      id: 5,
      title: 'Reducing Operational Costs Through Automation',
      image: image3,
      link: '#blog-5'
    },
    {
      id: 6,
      title: 'The Advantages of Customized Manufacturing Solutions',
      image: image4,
      link: '#blog-6'
    }
  ];

  return (
    <section className="w-full bg-white text-gray-900 py-16 px-16 sm:px-22 lg:px-22 font-sans">
      <div className="max-w-7xl mx-auto">
        
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group flex flex-col justify-between h-full bg-white transition-all duration-200"
            >
              <div>
                <div className="w-full aspect-square rounded-[32px] overflow-hidden bg-gray-50 mb-5 relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                <h3 className="text-start text-gray-900 text-base sm:text-lg font-bold tracking-tight leading-snug mb-3.5 group-hover:text-[#f07e13] transition-colors duration-200 line-clamp-2">
                  <a href={post.link} className="focus:outline-none">
                    {post.title}
                  </a>
                </h3>
              </div>

              <div className="flex mt-auto pt-1">
                <a 
                  href={post.link}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#f07e13] hover:text-orange-600 transition-colors duration-150 tracking-wide uppercase"
                >
                  <span className='flex text-start'>Read More</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}