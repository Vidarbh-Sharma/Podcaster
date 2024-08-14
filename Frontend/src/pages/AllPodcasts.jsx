import React, { useEffect, useState } from 'react'
import axios from 'axios';
//import { set } from 'mongoose';
const AllPodcasts = () => {
    const [podcasts,setPodcasts]=useState();
    useEffect(()=>{

const fetch=async()=>{
   const res= await axios.get("http://localhost:3000/api/v1/get-podcasts");
   console.log(res.data.data);
}
fetch();
},[]);
console.log(podcasts);

  return (
    <>

<div className="w-full px-4 lg:px-12 py-4 grif-cols-1 md:grid-cols-4 gap-8">Kumar Vidarbh Sharma</div>


<div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">

        
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

           
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="https://www.linkedin.com/in/vidarbh-sharma-825660286/">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                            linkedin
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        14/8/24
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                        <p class="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>

            </article>
          

        </div>
        
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="https://statuslagao.com/whatsapp/funny-videos-download.php">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                            Comedy
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        14/8/24
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                        <p class="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>

            </article>
          

        </div>
       
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

           
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="https://www.indgovtjobs.in/2015/10/Government-Jobs.html">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                        Government
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        14/8/24
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                        <p class="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>

            </article>
         

        </div>
        
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

           
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="https://wynk.in/music/song/aaj-ki-raat-from-stree-2/sa_8907212018094_INH102409256">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                            Song
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        14/8/24
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                        <p class="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>

            </article>
           
        </div>
        
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="https://www.upgrad.com/software-engineering-course/full-stack-development/">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                            Full-stack
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        14/8/24
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                        <p class="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>

            </article>
          

        </div>
       

      
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="https://github.com/Vidarbh-Sharma">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                            GitHub
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        14/8/24
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                        <p class="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>

            </article>
          

        </div>
      

    </div>
</div>














</>
  )

}

export default AllPodcasts;