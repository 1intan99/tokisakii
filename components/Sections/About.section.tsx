import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">Tokisaki</p>
        <p className="mt-1 text-lg text-gray-300">
          Back-End Developer
        </p>

        <p className="mt-4 text-gray-400">
          Opening Discord Bot Commissions, Game Top Up, Design Graphic, Web Hosting, Discord Bot Hosting. With a cheap Price
        </p>

        <Link href="https://discord.gg/du5rZjJNrq" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order Now!
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>
      </div>

      <div className="hidden custom:block">
        <Image
          src="https://cdn.discordapp.com/avatars/242969117479403520/a_5c99bc8f5b30438c9828b88fee3295ad.gif?size=4096"
          width="512"
          height="512"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
