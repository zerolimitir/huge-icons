import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPayoneer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.12 2.039c-2.479.248-4.706 1.323-6.359 3.068a9.985 9.985 0 0 0-1.624 11.516 9.432 9.432 0 0 0 1.801 2.438c.992.99 2.1 1.728 3.334 2.217 3.362 1.332 7.041.802 9.928-1.433.437-.338 1.307-1.208 1.645-1.645C21.256 16.378 22 14.236 22 12c0-4.568-3.158-8.613-7.57-9.697-.984-.241-2.402-.355-3.31-.264m1.566 3.003a7.003 7.003 0 0 1 4.107 1.86c.989.915 1.765 2.29 2.048 3.627a7.267 7.267 0 0 1-.202 3.682 7.037 7.037 0 0 1-3.514 4.047 6.992 6.992 0 0 1-9.086-2.598 7.013 7.013 0 0 1 .377-7.873 6.996 6.996 0 0 1 6.27-2.745'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPayoneer);
export default ForwardRef;
