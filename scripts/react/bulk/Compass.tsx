import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCompass = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.156 9.233c-2.656.889-3.704 1.257-3.806 1.336-.33.254-.442.771-.255 1.174.169.363.247.402 1.844.936.796.266 1.512.528 1.592.583.081.054.19.175.243.268.053.094.306.802.563 1.574.517 1.551.558 1.632.92 1.801.414.192.934.072 1.184-.273C13.588 16.43 16 9.22 16 8.985c0-.278-.086-.473-.302-.691-.222-.224-.395-.295-.698-.291-.124.002-1.314.383-3.844 1.23'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCompass);
export default ForwardRef;
