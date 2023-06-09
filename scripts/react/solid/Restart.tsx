import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRestart = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.31 1.283a10.67 10.67 0 0 0-6.63 2.856C2.834 5.865 1.708 8.045 1.334 10.62c-.096.664-.096 2.096 0 2.76.377 2.594 1.532 4.815 3.394 6.528 1.636 1.505 3.602 2.425 5.892 2.758.659.096 2.092.096 2.76-.001 3.187-.459 5.883-2.149 7.608-4.77.415-.632.732-1.258.731-1.445a.77.77 0 0 0-.878-.746c-.278.045-.446.204-.679.642-1.409 2.65-4.004 4.438-7.014 4.832-.602.079-1.685.08-2.296.002a10.01 10.01 0 0 1-2.835-.836c-2.05-.972-3.743-2.774-4.592-4.89-1.233-3.075-.723-6.613 1.327-9.194A12.24 12.24 0 0 1 6.2 4.802a9.356 9.356 0 0 1 4.441-1.949c.643-.101 2.075-.101 2.718 0 2.62.412 4.887 1.854 6.343 4.034.548.82.994 1.818 1.233 2.754.144.563.272 1.279.228 1.279-.014 0-.456-.145-.984-.322-.86-.289-.984-.321-1.204-.309-.297.017-.503.153-.618.406a.714.714 0 0 0 .164.854c.115.113.351.202 1.759.67.894.298 1.66.541 1.703.541.32-.001.655-.256.738-.561.1-.367-.045-1.789-.278-2.739-1.037-4.223-4.509-7.415-8.786-8.077-.354-.055-1.615-.152-1.777-.137-.033.003-.29.02-.57.037'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRestart);
export default ForwardRef;
