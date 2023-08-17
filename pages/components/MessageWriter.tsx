import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const MessageWriter = () => {
  const [text] = useTypewriter({
    words: ['Unleash your potential & achieve your aspirations', 'Unleash your potential & achieve your aspirations'],
    loop: Infinity,
  });

  return (
    <div className=''>
        <div className='text-blue-800 text-4xl font-extrabold capitalize leading-relaxed'>
      <span> <span className='text-white '></span > {text}</span>
      <Cursor  cursorStyle='_'></Cursor>

        </div>
    </div>
  );
};

export default MessageWriter;