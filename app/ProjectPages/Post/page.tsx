"use client";
import Image from "next/image";

const posts = [
  {
    id: 1,
    image: "/post/EnergyDrink.jpg",
  },
  {
    id: 2,
    image: "/post/2.jpg",
  },
  {
    id: 3,
    image: "/post/JUST.jpg",
  },
  {
    id: 4,
    image: "/post/luxury.jpg",
  },
  {
    id: 5,
    image: "/post/jordon.jpg",
  },
  {
    id: 6,
    image: "/post/1.jpeg",

  },
  {
    id: 7,
    image: "/post/jbl final.jpg",

  },
  {
    id: 8,
    image: "/Post/DOVE.jpg",

  },
  {
    id: 9,
    image: "/Post/Hulk Final.jpg",

  },

  // Add more posts here...
];

export default function LogoDesignPage() {
  return (
    <section className="min-h-screen pt-24 px-4 sm:px-6 bg-gradient-to-b from-blue-50 via-white to-white pb-20 font-Poppins">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-12 text-center font-inter">
          Post <br /> <span>Design</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <Image
                src={post.image}
                alt={`Post ${post.id}`}
                width={1080}
                height={1080}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
