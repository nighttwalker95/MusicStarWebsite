"use client";

import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import Link from "next/link";

const PostList = ({ posts }) => {
  const firstThreePosts = posts.slice(0, 3);

  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="flex flex-col items-center"
    >
      <div className="flex flex-col justify-between gap-12 py-10 border-t xl:flex-row xl:pt-16 xl:pb-24 border-white/10">
        {firstThreePosts.map((post, index) => {
          const { id, date, title, description } = post;

          return (
            <div className="flex-1 " key={id}>
              {/* date */}
              <div className="mb-1 font-bold text-accent">{date}</div>
              {/* title */}
              <div className="mb-4 text-xl font-medium ">{title}</div>
              {/* description */}
              <p className="mb-6 font-light text-white/30">{description}</p>
              <Link href={"#"} className="flex items-center gap-x-2 group">
                Read More
                <BsArrowRight className="text-xl transition-all group-hover:ml-1" />
              </Link>
            </div>
          );
        })}
      </div>
      <button className="btn btn-lg btn-accent">View all posts</button>
    </motion.div>
  );
};

export default PostList;
