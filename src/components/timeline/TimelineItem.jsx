// TODO: implement scroll animation replace group hover

const TimelineElement = ({
  date,
  icon,
  iconStyle,
  contentStyle,
  children,
  isLeft,
}) => (
  <div
    className={`relative group flex ${isLeft && 'flex-row-reverse'} justify-end`}
  >
    {/* Icon */}
    <div
      className={`
        absolute right-10
        top-4
        lg:sticky
        lg:top-[50%]
        size-14
        lg:left-1/2
        lg:-translate-x-1/2
        rounded-full!
        flex justify-center items-center 
        border-4 border-white 
        shadow-lg 
        z-20
        motion-safe:animate-rotatePop
        max-lg:rotate-0!
        ${isLeft ? 'rotate-45' : '-rotate-135'}
        lg:rounded-[50%_50%_50%_10%]!
      `}
      style={{ ...iconStyle, borderRadius: '50% 50% 50% 10%' }}
    >
      {date && (
        <div
          className={`
        absolute bottom-full mb-2
        left-1/2 -translate-x-1/2
        bg-white text-xs px-2 py-1 rounded
        opacity-0 group-hover:opacity-100
        pointer-events-none
        transition-opacity duration-200
        whitespace-nowrap
        ${isLeft ? '-rotate-45' : 'rotate-135'}
      `}
        >
          {date}
        </div>
      )}
      <span
        className={`size-full max-lg:rotate-0! ${isLeft ? '-rotate-45' : 'rotate-135'}`}
      >
        {icon}
      </span>
    </div>

    {/* Card */}
    <div
      className={`
        bg-white 
        p-6 
        rounded-xl 
        shadow-[0_4px_10px_rgba(0,0,0,0.15),inset_0_6px_14px_rgba(0,0,0,0.20)]
        lg:max-w-[42%]
        max-w-3xl
        ${isLeft ? 'motion-safe:animate-fadeInUp-inverse' : 'lg:ml-20 motion-safe:animate-fadeInUp'}
      `}
      style={contentStyle}
    >
      {date && <p className="mt-2 text-xs font-semibold lg:hidden">{date}</p>}

      {children}
    </div>
  </div>
);

export default TimelineElement;
