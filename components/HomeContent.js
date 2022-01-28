import Link from 'next/link';
import React from 'react';

const HomeContent = () => {
  return (
    <div className="text-center py-8 px-4 space-y-20">
      <div className="">
        <h2 className="text-white text-4xl mb-2">
          Make donating{' '}
          <span className="font-extrabold text-yellow-400">easy</span> and{' '}
          <span className="font-extrabold text-yellow-400">fun</span>.
        </h2>
        <p className="text-xl text-gray-400">
          Why bother with tax credit for $25 when you can get an NFT instead?
        </p>
      </div>
      <div>
        <p className="text-2xl text-white mb-4">
          Launching in <span className="text-yellow-400">Feb 2022</span>
        </p>
        <Link href="/faq">
          <button className="text-gray-900 bg-yellow-400 text-xl rounded px-4 py-2 w-full">
            Read the story to know more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;
