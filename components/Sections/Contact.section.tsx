import type { NextComponentType } from "next";

import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  FaDiscord,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/ameliakiara" />

        <Icon
          icon={<FaDiscord />}
          url="https://discord.gg/du5rZjJNrq"
        />

        <Icon icon={<MdEmail />} url="mailto:tokisaki@kiara.my.id" />

        <Icon
          icon={<BsSpotify />}
          url="https://open.spotify.com/user/31g3ayp4qz4gfcrh4eh2yzly7ela"
        />
      </div>
    </div>
  );
};

export default Contact;
