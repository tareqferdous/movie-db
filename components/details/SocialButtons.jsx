"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SocialButtons = () => {
  const pathname = usePathname();
  const pageUrl = `https://yourwebsite.com${pathname}`;

  const text = "Checkout this movie!";
  return (
    <div className="mb-6">
      <h3 className="text-gray-400 mb-2">Share on social media</h3>
      <div className="flex flex-wrap gap-4">
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            pageUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center cursor-pointer"
        >
          <Image
            src="http://facebook.com/favicon.ico"
            alt="Facebook"
            width={100}
            height={100}
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
          />
          <p className="text-sm">Facebook</p>
        </Link>

        <Link
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            pageUrl
          )}&text=${encodeURIComponent(text)}`}
          target="_blank"
          className="text-center cursor-pointer"
        >
          <Image
            src="http://x.com/favicon.ico"
            alt="Facebook"
            width={100}
            height={100}
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
          />
          <p className="text-sm">X</p>
        </Link>

        <Link
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            pageUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center cursor-pointer"
        >
          <Image
            src="http://linkedin.com/favicon.ico"
            alt="Facebook"
            width={100}
            height={100}
            className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
          />
          <p className="text-sm">Linkedin</p>
        </Link>
      </div>
    </div>
  );
};

export default SocialButtons;
