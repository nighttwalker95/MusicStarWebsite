import Link from "next/link";
import {
  RiYoutubeFill,
  RiInstagramFill,
  RiSpotifyFill,
  RiSoundcloudFill,
} from "react-icons/ri";

const socials = [
  {
    path: "#",
    icon: <RiYoutubeFill />,
  },
  {
    path: "#",
    icon: <RiInstagramFill />,
  },
  {
    path: "#",
    icon: <RiSpotifyFill />,
  },
  {
    path: "#",
    icon: <RiSoundcloudFill />,
  },
];

const SocialIcons = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return <Link href={item.path}>{item.icon}</Link>;
      })}
    </div>
  );
};

export default SocialIcons;
