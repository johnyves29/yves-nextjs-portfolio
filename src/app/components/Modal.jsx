// src/components/Modal.js
import React from 'react'

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='bg-white p-4 rounded shadow-lg relative'>
        <button
          className='absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700'
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={imageSrc}
          alt='Modal content'
          className='max-w-full max-h-full'
        />
      </div>
    </div>
  )
}

export default Modal
