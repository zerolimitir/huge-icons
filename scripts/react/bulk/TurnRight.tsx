import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTurnRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M13.223 7.249c-.445.093-.699.593-.521 1.022.034.083.241.33.469.559l.408.41h-.911c-1.099 0-1.362.043-1.908.31a2.592 2.592 0 0 0-1.21 1.21c-.305.624-.31.674-.309 3.188.001 2.046.006 2.203.075 2.352a.734.734 0 0 0 .413.398c.349.146.751-.007.945-.358.059-.106.068-.378.086-2.4l.02-2.28.094-.18c.129-.245.346-.466.586-.593.198-.106.209-.107 1.16-.119l.96-.013-.408.413c-.227.228-.436.478-.47.561-.29.699.505 1.33 1.13.897.238-.165 1.502-1.461 1.644-1.686.166-.263.284-.652.284-.94 0-.288-.118-.677-.284-.94-.142-.224-1.406-1.52-1.643-1.685a.775.775 0 0 0-.61-.126'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTurnRight);
export default ForwardRef;
