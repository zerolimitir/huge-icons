import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSadRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.58 9.095a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m8 0a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904M11.144 14.3c-1.227.2-2.54.843-2.817 1.38-.271.526.223 1.173.81 1.063.076-.014.254-.105.396-.203a4.315 4.315 0 0 1 4.922-.005c.384.263.658.29.95.093.357-.241.454-.689.223-1.034-.296-.441-1.447-1.02-2.46-1.236-.516-.11-1.525-.139-2.024-.058'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSadRectangle);
export default ForwardRef;
