import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgNavigation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.34 4.061c-.132.03-2.911.946-6.175 2.035-5.191 1.733-5.968 2.003-6.193 2.149-1.141.744-1.304 2.442-.324 3.38.139.132.334.289.435.348.101.059 1.121.42 2.267.804 2.487.832 2.583.88 2.997 1.514.152.231.278.57.875 2.356.384 1.148.746 2.169.805 2.27a2.261 2.261 0 0 0 1.891 1.082c.769-.001 1.537-.428 1.899-1.055.064-.11 1-2.851 2.131-6.24 1.871-5.605 2.02-6.069 2.04-6.384.041-.634-.177-1.194-.645-1.659-.55-.548-1.276-.765-2.003-.6'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNavigation);
export default ForwardRef;
