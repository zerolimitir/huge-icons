import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMask = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.42 6.763c-.392.053-.841.17-1.186.31-.162.066-1.278.608-2.481 1.205-2.326 1.154-2.381 1.188-2.471 1.511-.027.099-.042 1.114-.042 2.931 0 3.389.004 3.426.458 4.384.378.797.726 1.223 1.582 1.938 1.233 1.03 2.109 1.485 3.4 1.764.367.08.534.091 1.32.091s.953-.011 1.32-.091c1.274-.275 2.176-.741 3.36-1.732.907-.759 1.189-1.098 1.58-1.894.499-1.02.5-1.029.498-4.475-.002-3.114.006-3.02-.266-3.259-.186-.164-4.53-2.319-4.969-2.465-.63-.21-1.501-.3-2.103-.218'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMask);
export default ForwardRef;
