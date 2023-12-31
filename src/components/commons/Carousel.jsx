import { useState } from 'react';
import * as Icons from '@heroicons/react/solid';
import { motion, AnimatePresence } from 'framer-motion';
import useMeasure from 'react-use-measure';

export default function Carousel() {
  let [count, setCount] = useState(1);
  let [ref, { width }] = useMeasure();
  let prev = usePrevious(count);

  let direction = count > prev ? 1 : -1;

  return (
    <div className='text-white'>
      <div className='mt-4 flex justify-between px-4'>
        <button onClick={() => setCount(count - 1)}>
          <Icons.ChevronLeftIcon className='h-5 w-5' />
        </button>
        <button onClick={() => setCount(count + 1)}>
          {' '}
          <Icons.ChevronRightIcon className='h-5 w-5' />
        </button>
      </div>
      <div className='mt-8 flex justify-center'>
        <div
          ref={ref}
          className='relative h-24 w-40 bg-gray-700 flex items-center justify-center overflow-hidden'
        >
          <AnimatePresence custom={{ direction, width }}>
            <motion.div
              key={count}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              custom={{ direction, width }}
              transition={{ duration: 1 }}
              className={`absolute w-20 h-20 flex items-center justify-center ${colors[Math.abs(count) % 4]
                }`}
            >
              {count}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

let variants = {
  enter: ({ direction, width }) => ({ x: direction * width }),
  center: { x: 0 },
  exit: ({ direction, width }) => ({ x: direction * -width }),
};

let colors = ['bg-red-500', 'bg-blue-500', 'bg-yellow-500'];

function usePrevious(state) {
  let [tuple, setTuple] = useState([null, state]);

  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }

  return tuple[0];
}
