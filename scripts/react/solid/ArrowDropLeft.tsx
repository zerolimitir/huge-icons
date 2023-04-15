import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowDropLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14.531 6.539a2.673 2.673 0 0 0-.42.166c-.267.135-5.884 3.407-6.223 3.625-.324.208-.546.46-.713.81-.275.578-.273 1.144.007 1.735.267.566.263.563 3.821 2.631 1.748 1.015 3.267 1.875 3.377 1.912a1.983 1.983 0 0 0 2.024-.495c.286-.286.475-.626.552-.995.062-.297.062-7.559 0-7.856-.14-.669-.626-1.22-1.296-1.469-.312-.116-.839-.146-1.129-.064'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowDropLeft);
export default ForwardRef;
