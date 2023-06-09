import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgImage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.96 4.062c-.418.089-.891.352-1.219.677a2.476 2.476 0 0 0 .001 3.525 2.486 2.486 0 0 0 3.52-.002 2.486 2.486 0 0 0 0-3.522 2.511 2.511 0 0 0-2.302-.678m8.82 5.154c-.515.1-1.106.344-1.54.635-.099.067-1.053.989-2.12 2.049-1.067 1.06-2.037 2.002-2.155 2.095-.771.601-1.629.872-2.645.834-.969-.035-1.384-.206-2.8-1.149-.539-.359-1.052-.685-1.14-.725-.447-.204-1.027.008-1.274.465-.084.156-.086.199-.086 1.68v1.52l.111.397c.421 1.509 1.576 2.591 3.095 2.9.401.082.494.083 6.774.083s6.373-.001 6.774-.083a4 4 0 0 0 3.096-2.905l.107-.392.014-1.864c.015-2.085.004-2.203-.25-2.656a2.26 2.26 0 0 0-.354-.45c-.319-.302-2.911-2.011-3.286-2.167-.526-.219-.864-.289-1.481-.306a4.297 4.297 0 0 0-.84.039'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgImage);
export default ForwardRef;
