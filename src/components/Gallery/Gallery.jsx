import React from "react";

const Gallery = () => {
  return (
    <div className="container mx-auto my-6 md:my-16">
      <div>
        <h3 className="text-5xl font-bold text-orange-600 text-center">
          Gallery
        </h3>
        <p className="text-sm text-center mt-5 px-6 md:px-16">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          illo, numquam voluptas est aspernatur culpa minus corporis, ullam
          doloremque expedita fuga neque cum. Exercitationem debitis
          consequuntur impedit ullam eveniet porro!
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10 pb-10 mx-4">
        <div className="relative hover:bg-slate-900 opacity-90 hover:rounded-lg hover:opacity-100">
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="./gallery_images/gallery_01.jpg"
            alt=""
          />
        </div>
        <div className="relative hover:bg-slate-900 opacity-90 hover:rounded-lg hover:opacity-100">
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="./gallery_images/gallery_02.jpg"
            alt=""
          />
        </div>
        <div className="relative hover:bg-slate-900 opacity-90 hover:rounded-lg hover:opacity-100">
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="./gallery_images/gallery_03.jpg"
            alt=""
          />
        </div>
        <div className="relative hover:bg-slate-900 opacity-90 hover:rounded-lg hover:opacity-100">
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="./gallery_images/gallery_04.jpg"
            alt=""
          />
        </div>
        <div className="relative hover:bg-slate-900 opacity-90 hover:rounded-lg hover:opacity-100">
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="./gallery_images/gallery_05.jpg"
            alt=""
          />
        </div>
        <div className="relative hover:bg-slate-900 opacity-90 hover:rounded-lg hover:opacity-100">
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="./gallery_images/gallery_06.jpg"
            alt=""
          />
        </div>
        <div className="relative hover:bg-slate-900 opacity-90 hover:rounded-lg hover:opacity-100">
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="./gallery_images/gallery_07.jpg"
            alt=""
          />
        </div>
        <div className="relative hover:bg-slate-900 opacity-90 hover:rounded-lg hover:opacity-100">
          <img
            className="block h-full w-full rounded-lg object-cover object-center"
            src="./gallery_images/gallery_09.jpg"
            alt=""
          />
        </div>

      </div>
    </div>
  );
};

export default Gallery;
