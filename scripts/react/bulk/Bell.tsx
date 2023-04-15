import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBell = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.043 18.11c.219.579.861 1.246 1.493 1.549.507.244.853.319 1.464.319s.957-.075 1.464-.319c.632-.303 1.274-.97 1.493-1.549l.041-.11H9.002l.041.11'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBell);
export default ForwardRef;
