'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const projectsData = [
  {
    id: 0,
    title: 'NextJS Portfolio',
    description:
      'Customized NextJS with TailwindCSS, Embed custom contact us form. Improve lighthouse report score for performance, accessibility, best practices and SEO.',
    image: '/images/projects/yvesnext.webp',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/johnyves29/yves-nextjs-portfolio',
    previewUrl: 'https://yvesmarin-portfolio.vercel.app/',
    stack: ['NextJS', 'TailwindCSS']
  },
  {
    id: 1,
    title: 'React Portfolio',
    description:
      'Converted HTML5 into ReactJS, Embed custom contact us form. Improve lighthouse report score for performance, accessibility, best practices and SEO.',
    image: '/images/projects/portfolio.webp',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/johnyves29/react-portfolio-v3',
    previewUrl: 'https://johnyvesmarin.netlify.app/',
    stack: ['ReactJS', 'Boostrap']
  },
  {
    id: 2,
    title: 'Wilmar LLC',
    description:
      'Display product info and images from Salsify PXM, Created customized carousel image slider, Developed and customized theme using Stencil CLI.',
    image: '/images/projects/wilmar.webp',
    tag: ['All', 'Web'],
    gitUrl: '',
    previewUrl: 'https://wilmarllc.com/',
    stack: ['Bigcommerce']
  },
  {
    id: 3,
    title: 'APS',
    description:
      'Converted ASP Classic site into modern responsive HTML5 website.',
    image: '/images/projects/aps.webp',
    tag: ['All', 'Web'],
    gitUrl: '',
    previewUrl: 'https://aps-site-sample.netlify.app/',
    stack: ['HTML5', 'Bootstrap']
  },
  {
    id: 4,
    title: 'Workboard.ph',
    description:
      'CRUD Operations, User Management, Technical support, and updated software documentation.',
    image: '/images/projects/erp.webp',
    tag: ['All', 'Web'],
    gitUrl: '',
    previewUrl: 'https://workboard.ph/',
    stack: ['MEAN', 'Bootstrap']
  },
  {
    id: 5,
    title: 'Mnk.Soft',
    description: 'Redesign the website and add new features.',
    image: '/images/projects/mnk.webp',
    tag: ['All', 'Web'],
    gitUrl: '',
    previewUrl: 'https://mnksoft.com.ph/',
    stack: ['MEAN', 'Bootstrap']
  },
  {
    id: 6,
    title: 'ETC23',
    description:
      'Developed website, added plugins, and checked responsiveness for all devices.',
    image: '/images/projects/etc23.webp',
    tag: ['All', 'Web'],
    gitUrl: '',
    previewUrl: '',
    stack: ['Wordpress']
  },
  {
    id: 7,
    title: 'CE Online',
    description:
      'Developed website and checked responsiveness for all devices.',
    image: '/images/projects/ceonline.webp',
    tag: ['All', 'Web'],
    gitUrl: '',
    previewUrl: '',
    stack: ['Laravel', 'Bootstrap']
  },
  {
    id: 8,
    title: 'PH Daily',
    description:
      'Developed website and checked responsiveness for all devices.',
    image: '/images/projects/phdaily.webp',
    tag: ['All', 'Web'],
    gitUrl: '',
    previewUrl: '',
    stack: ['Symfony', 'Bootstrap']
  }
]

const ProjectsSection = () => {
  const [tag, setTag] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = newTag => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter(project =>
    project.tag.includes(tag)
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  }

  return (
    <section id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag
          onClick={handleTagChange}
          name='All'
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Web'
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Mobile'
          isSelected={tag === 'Mobile'}
        />
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              stack={project.stack}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
