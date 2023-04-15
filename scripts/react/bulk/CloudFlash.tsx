import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloudFlash = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.492 13.994 8.004 16.98l1.497.01 1.498.011.011 1.987.01 1.988 1.7-2.036 2.488-2.978.788-.942-1.498-.01-1.497-.011-.011-1.996-.01-1.995-2.488 2.986'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudFlash);
export default ForwardRef;
