'use client'
// import { useState } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Link from 'next/link'
// import { Document, Page, pdfjs } from 'react-pdf'
import { saveAs } from 'file-saver'
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/legacy/build/pdf.worker.min.js',
//   import.meta.url
// ).toString()

// import 'react-pdf/dist/Page/AnnotationLayer.css'
// import 'react-pdf/dist/Page/TextLayer.css'

const HeroSection = () => {
  const pdfPath = '/yves.pdf'
  // const [numPages, setNumPages] = useState(null)
  // const [pageNumber, setPageNumber] = useState(1)
  // const [showPDF, setShowPDF] = useState(false)

  // function onDocumentLoadSuccess ({ numPages }) {
  //   setNumPages(numPages)
  // }

  // function handleChangePage (offset) {
  //   setPageNumber(prevPageNumber => prevPageNumber + offset)
  // }

  // function handleButtonClick () {
  //   setShowPDF(true)
  // }

  function handleDownload () {
    saveAs(pdfPath, 'JYMarin-CV.pdf')
  }
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
        >
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-200'>
              Hello, I&apos;m{' '}
            </span>
            <br></br>
            <TypeAnimation
              sequence={['Yves', 1000, 'Web Developer', 1000]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            Empowering your web identity. I love developing web applications
            that help businesses.
          </p>
          <div>
            <Link
              href='/#contact'
              className='px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white'
            >
              Hire Me
            </Link>
            <Link
              href='/'
              className='px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3'
            >
              <span
                onClick={handleDownload}
                className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'
              >
                Download CV
              </span>
            </Link>
            {/* <div>
              <button onClick={handleButtonClick}>Display PDF</button>
              {showPDF && (
                <div>
                  <Document
                    file={pdfPath}
                    onLoadSuccess={onDocumentLoadSuccess}
                  >
                    <Page pageNumber={pageNumber} />
                  </Document>
                  <p>
                    Page {pageNumber} of {numPages}
                  </p>
                  <button
                    onClick={() => handleChangePage(-1)}
                    disabled={pageNumber <= 1}
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => handleChangePage(1)}
                    disabled={pageNumber >= numPages}
                  >
                    Next
                  </button>
                </div>
              )}
            </div> */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-4 place-self-center mt-4 lg:mt-0'
        >
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image
              priority={true}
              src='/webdev-min.png'
              alt='hero image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-auto h-auto'
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
