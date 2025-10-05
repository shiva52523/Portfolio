// // @flow strict

// import { personalData } from "@/utils/data/personal-data";
// import { myBlogs } from "@/utils/data/my-blogs"; // Local blogs fallback
// import BlogCard from "../components/homepage/blog/blog-card";

// async function getBlogs() {
//   // Agar Dev.to username available hai, API call try karo
//   if (personalData.devUsername) {
//     try {
//       const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`);
//       if (!res.ok) throw new Error("Failed to fetch from Dev.to");
//       const data = await res.json();
//       return data.length ? data : myBlogs; // Agar Dev.to se kuch nahi aaya, fallback
//     } catch (error) {
//       console.warn("Dev.to API failed, using local blogs", error);
//       return myBlogs;
//     }
//   } else {
//     // Username nahi hai, local blogs use karo
//     return myBlogs;
//   }
// }

// async function page() {
//   const blogs = await getBlogs();

//   return (
//     <div className="py-8">
//       <div className="flex justify-center my-5 lg:py-8">
//         <div className="flex items-center">
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//           <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
//             Research & Developments
//           </span>
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
//         {blogs.map((blog, i) => (
//           blog?.cover_image && <BlogCard blog={blog} key={i} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default page;


// @flow strict

import { myBlogs } from "@/utils/data/my-blogs"; // Local blogs only
import BlogCard from "../components/homepage/blog/blog-card";

async function page() {
  // Directly use local blogs
  const blogs = myBlogs;

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            Research & Developments
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {blogs.map((blog, i) => (
          blog?.cover_image && <BlogCard blog={blog} key={i} />
        ))}
      </div>
    </div>
  );
}

export default page;
