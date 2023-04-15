import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDirectionLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M13.799 6.276a1.225 1.225 0 0 0-.196.088c-.155.092-4.251 5.233-4.314 5.415a.718.718 0 0 0 .119.665 310.55 310.55 0 0 0 2.121 2.667c2.14 2.674 2.115 2.647 2.471 2.647.508 0 .895-.557.704-1.015-.031-.074-.886-1.171-1.9-2.438l-1.844-2.304 1.86-2.326c1.382-1.729 1.871-2.368 1.903-2.487.116-.429-.192-.871-.643-.923a.827.827 0 0 0-.281.011'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionLeft);
export default ForwardRef;
