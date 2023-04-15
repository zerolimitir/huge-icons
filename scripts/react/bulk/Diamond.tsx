import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDiamond = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2.64 7.637c-.294.06-.473.2-.578.453a.746.746 0 0 0 .474 1.011c.3.089 18.628.089 18.928 0a.746.746 0 0 0 .474-1.011c-.079-.191-.162-.279-.358-.384l-.16-.086-9.32-.006c-5.126-.003-9.383.008-9.46.023'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDiamond);
export default ForwardRef;
