import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShoppingBasketArrowOut = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.386 1.357a.75.75 0 0 1 .257 1.029l-3 5a.75.75 0 1 1-1.286-.772l3-5a.75.75 0 0 1 1.029-.257Zm9 6.286a.75.75 0 0 1-1.03-.257l-3-5a.75.75 0 0 1 1.287-.772l3 5a.75.75 0 0 1-.257 1.03Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M20.282 18.808A3.973 3.973 0 0 1 16.4 22H7.6a3.972 3.972 0 0 1-3.882-3.192l-1.635-8C1.576 8.326 3.454 6 5.965 6h12.07c2.511 0 4.39 2.326 3.882 4.808l-1.635 8Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M18.035 6H5.965C3.729 6 1.995 7.844 2 10h20c.005-2.156-1.73-4-3.965-4Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='m11.25 14.396-.72.72a.75.75 0 1 1-1.06-1.06l1.293-1.293a1.75 1.75 0 0 1 2.474 0l1.293 1.293a.75.75 0 1 1-1.06 1.06l-.72-.72v4.19a.75.75 0 0 1-1.5 0v-4.19Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasketArrowOut);
export default ForwardRef;
