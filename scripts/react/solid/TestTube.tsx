import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTestTube = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.811 1.278c-.552.134-.743.84-.336 1.246.195.196.364.236.995.236H10v2.473c0 1.735-.014 2.544-.047 2.71-.034.17-.333.81-1.059 2.267l-1.013 2.03h8.238l-1.013-2.03c-.726-1.457-1.025-2.097-1.059-2.267-.033-.166-.047-.975-.047-2.71V2.76h.53c.631 0 .8-.04.995-.236.345-.345.285-.877-.13-1.152l-.169-.112-3.143-.006c-1.729-.004-3.201.007-3.272.024M5.726 16.55c-1.45 2.905-1.487 2.992-1.486 3.487.002.891.701 1.733 1.592 1.919.299.062 12.037.062 12.336 0 .891-.186 1.59-1.028 1.592-1.919.001-.495-.036-.582-1.486-3.487l-1.393-2.79H7.119l-1.393 2.79'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTestTube);
export default ForwardRef;
