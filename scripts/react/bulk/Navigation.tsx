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
            d='m14.702 9.277-4.639 4.64.084.091c.272.297.382.565 1.076 2.642.384 1.146.745 2.166.804 2.267a2.261 2.261 0 0 0 1.891 1.082c.769-.001 1.537-.428 1.899-1.055.064-.11 1-2.851 2.131-6.24 1.871-5.605 2.02-6.069 2.04-6.384.035-.545-.155-1.124-.497-1.512l-.151-.172-4.638 4.641'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNavigation);
export default ForwardRef;
