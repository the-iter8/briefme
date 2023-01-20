const Compass: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.2004 7.2C9.42839 7.2 8.80039 7.828 8.80039 8.6008C8.80039 9.3728 9.42839 10 10.2004 10C10.9724 10 11.6004 9.3728 11.6004 8.6008C11.6004 7.828 10.9724 7.2 10.2004 7.2ZM10.2004 11.2C8.76679 11.2 7.60039 10.0344 7.60039 8.6008C7.60039 7.1664 8.76679 6 10.2004 6C11.634 6 12.8004 7.1664 12.8004 8.6008C12.8004 10.0344 11.634 11.2 10.2004 11.2Z"
      fill="#A36A26"
    />
    <mask id="mask0_81_483" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="3" y="2" width="14" height="16">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.59999 2H16.7996V17.6H3.59999V2Z" fill="white" />
    </mask>
    <g mask="url(#mask0_81_483)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1996 3.2C7.22199 3.2 4.79959 5.6456 4.79959 8.6504C4.79959 12.4736 9.29879 16.1984 10.1996 16.3968C11.1004 16.1976 15.5996 12.4728 15.5996 8.6504C15.5996 5.6456 13.1772 3.2 10.1996 3.2ZM10.1996 17.6C8.76439 17.6 3.59959 13.1584 3.59959 8.6504C3.59959 4.9832 6.56039 2 10.1996 2C13.8388 2 16.7996 4.9832 16.7996 8.6504C16.7996 13.1584 11.6348 17.6 10.1996 17.6Z"
        fill="#A36A26"
      />
    </g>
  </svg>
);

export default Compass;
