import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  stack
}) => {
  return (
    <div>
      <div
        className='h-52 md:h-72 rounded-t-xl relative group'
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: 'cover'
        }}
      >
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 '>
          {gitUrl ? (
            <Link
              href={gitUrl}
              target='_blank'
              className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
            >
              <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white' />
            </Link>
          ) : null}
          {previewUrl ? (
            <Link
              href={previewUrl}
              target='_blank'
              className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
            >
              <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white' />
            </Link>
          ) : null}
        </div>
      </div>
      <div className='text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-[#ADB7BE]'>{description}</p>
        {/* <span className='inline-flex items-center py-3 text-xs font-medium text-white-700 uppercase'>
          {stack}
        </span> */}
        <div>
          <ul>
            {stack.map((item, index) => (
              <li
                className='inline-flex items-center uppercase rounded-md bg-purple-100 px-2 py-1 mt-4 mr-2 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10'
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
