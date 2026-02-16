import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { MdOutlineArrowOutward } from "react-icons/md";

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@im4941668"
        ); // Replace with your Medium username
        const data = await response.json();
        setPosts(data.items);
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Function to create a preview from description
  const createPreview = (description) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = description;
    const text = tempDiv.innerText;
    return text.length > 150 ? text.substring(0, 250) + "..." : text;
  };

  // Function to format the date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="text-white relative">
      <div>
        <h1
          className={`${isMobile ? "text-4xl" : "text-8xl"
            } text-left font-bold`}
        >
          THOUGHTS & <br />{" "}
          <span className="text-left text-secondaryHeadingText">INSIGHTS</span>
        </h1>
      </div>
      <div className="space-y-6 mt-5">
        {posts.map((post) => (
          <div
            key={post.guid}
            className="relative flex gap-4 shadow-lg bg-secondaryHeadingText cursor-pointer p-7 rounded-xl transition-transform duration-300 transform hover:scale-105 hover:animate-blink-border text-left"
          >
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <div className={`${isMobile ? "w-80" : "w-full"}`}>
                <h1
                  className={`text-left ${isMobile ? "text-lg font-bold" : "text-3xl font-bold"
                    }`}
                >
                  {post?.title}
                </h1>
              </div>
              <p
                className={`text-secondaryText  ${isMobile ? "w-80 mt-2" : "w-10/12 mt-6"
                  }`}
              >
                {createPreview(post?.description)}
              </p>
              <strong className="text-secondaryText mt-4">
                {formatDate(post?.pubDate)}
              </strong>
              {!isMobile && (
                <div className="absolute top-0 right-0 mt-2 mr-2">
                  <MdOutlineArrowOutward
                    className="text-white transition-transform duration-300 transform hover:scale-125"
                    size={30}
                  />
                </div>
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
