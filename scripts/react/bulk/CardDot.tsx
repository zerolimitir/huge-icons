import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCardDot = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2 9v2h20V7H2v2m3.58 7.095a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardDot);
export default ForwardRef;
