import Button from "@/app/ui/Button";
import React from "react";

const TestimonialMain = () => {
  return (
    <div className=" border-b py-12 space-y-8 text-black max-w-6xl mx-auto">
      <p className=" text-center font-semibold capitalize">testimonials</p>
      <h2 className=" text-center font-bold text-3xl max-w-[60%] mx-auto">
        584,917 students, researchers and professionals from 200+ countries rely
        on Zendy
      </h2>
      <div className="grid max-w-[70%] gap-y-8 items-center mx-auto grid-cols-2">
        {/* box 1 */}
        <div className=" mx-auto max-w-[80%] text-gray-500 px-6 py-4 flex flex-col border gap-6 border-primary rounded-2xl">
          <p>
            Zendy online library has been very helpful in all my academics. I
            always find articles and journals that relate to my studies. It
            helped a lot with my research project and I always have a productive
            week with Zendy.
          </p>

          <div>
            <p className="font-medium capitalize text-gray-900">
              Tebatso Seshoka
            </p>
            <p>Academic Researcher</p>
          </div>
        </div>

        {/* box 2 */}
        <div className=" text-[#b3c6da] bg-[#33669d] px-6 py-4 flex flex-col gap-6 border-[4px] border-primary rounded-2xl">
          <p>
            I am a plastic surgeon in private practice. I have been using Zendy
            Plus for the last 1 year and it has proved to be a boon for my
            clinical practice and conference paper presentations. The sheer
            diversity of journals that are available at such an affordable price
            is truly a game changer, especially for independent researchers not
            affiliated with universities or institutions. Kudos to Zendy and
            here's hoping that this service grows from strength to strength.
          </p>

          <div>
            <p className="font-medium capitalize text-white">Tebatso Seshoka</p>
            <p>Academic Researcher</p>
          </div>
        </div>

        {/* box 3 */}
        <div className=" text-gray-500 px-6 py-4 flex flex-col gap-6 border border-primary rounded-2xl">
          <p>
            Zendy is fast and reliable. Provides what you're looking for during
            research. It helped me a lot in my engineering field.
          </p>

          <div>
            <p className="font-medium capitalize text-gray-900">
              Braveson Udoji
            </p>
            <p>Reader</p>
          </div>
        </div>

        {/* box 4 */}
        <div className=" mx-auto text-[#b3c6da] bg-[#33669d] max-w-[80%] px-6 py-4 flex flex-col border-[4px] gap-6 border-primary rounded-2xl">
          <p>This is the most resourceful platform to explore research</p>

          <div>
            <p className="font-medium  capitalize text-white">
              Omar Bel Mamoun
            </p>
            <p className="text-[#b3c6da]">Academic Researcher</p>
          </div>
        </div>

        {/* box 5 */}
        <div className=" mx-auto text-gray-500 max-w-[80%] px-6 py-4 flex flex-col border gap-6 border-primary rounded-2xl">
          <p>
            I found Zendy useful when searching for scholarly articles and it
            gave me several options to choose from. It's worth it
          </p>

          <div>
            <p className="font-medium  capitalize ">Stella Eze</p>
            <p>Student</p>
          </div>
        </div>
        {/* box 6 */}
        <div className=" mx-auto text-[#b3c6da] bg-[#33669d] max-w-[80%] px-6 py-4 flex flex-col border-[4px] gap-6 border-primary rounded-2xl">
          <p>This is a place to find resources for research. Fantastic!</p>

          <div>
            <p className="font-medium  capitalize text-white">John Oyekale</p>
            <p className="text-[#b3c6da]">Librarian</p>
          </div>
        </div>
        <div className=" col-span-2 mt-7 justify-self-center">
          <Button>sign in to ARA &rarr;</Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialMain;
