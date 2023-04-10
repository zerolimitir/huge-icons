import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShoppingBasketCheck = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 25'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='M16.313 6 14.4 3.45a.75.75 0 1 1 1.2-.9l2.595 3.46a4.005 4.005 0 0 1 3.634 3.24H2.171a4.005 4.005 0 0 1 3.633-3.24L8.4 2.55a.75.75 0 0 1 1.2.9L7.688 6h8.625Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M2.173 10.75h19.654a4.08 4.08 0 0 1-.045.205l-1.966 8A4 4 0 0 1 15.93 22H8.07a4 4 0 0 1-3.885-3.045l-1.966-8a4.101 4.101 0 0 1-.045-.205Zm13.391 3.744a.75.75 0 1 0-1.129-.988l-2.87 3.28a.25.25 0 0 1-.344.03l-1.753-1.402a.75.75 0 0 0-.937 1.172l1.753 1.402a1.75 1.75 0 0 0 2.41-.214l2.87-3.28Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasketCheck);
export default ForwardRef;
