const Timeline = ({ children }) => (
  <div className="relative">
    {/* Vertical line */}
    <div className="max-lg:hidden h-full absolute rounded-full w-[3px] bg-gray-300 translate-x-1/2 left-1/2" />
    <div className="flex flex-col gap-y-20 justify-around">{children}</div>
  </div>
);

export default Timeline;
