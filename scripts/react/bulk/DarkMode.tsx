import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDarkMode = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12 11.994V22h.23c.707-.001 1.845-.183 2.635-.422a9.762 9.762 0 0 0 4.196-2.517 9.446 9.446 0 0 0 1.802-2.438A9.988 9.988 0 0 0 17.72 3.806c-1.535-1.075-3.307-1.681-5.23-1.79L12 1.989v10.005'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDarkMode);
export default ForwardRef;
