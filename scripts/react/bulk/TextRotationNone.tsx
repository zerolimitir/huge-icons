import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTextRotationNone = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.807 2.279a.896.896 0 0 0-.28.15c-.137.11-.315.519-2.702 6.234-2.806 6.717-2.665 6.334-2.464 6.691.253.449.916.509 1.218.11.051-.068.427-.925.835-1.904l.741-1.78h5.69l.699 1.68c.385.924.737 1.759.784 1.855.158.329.588.495.939.363.302-.114.53-.533.457-.838-.05-.208-5.039-12.161-5.129-12.286-.16-.226-.502-.345-.788-.275m1.301 5.331 1.087 2.61-1.098.011c-.603.005-1.591.005-2.194 0l-1.098-.011 1.087-2.61C11.49 6.175 11.989 5 12 5c.011 0 .51 1.175 1.108 2.61'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTextRotationNone);
export default ForwardRef;
