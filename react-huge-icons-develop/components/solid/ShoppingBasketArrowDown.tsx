import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShoppingBasketArrowDown = (
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
            d='M16.313 6 14.4 3.45a.75.75 0 0 1 1.2-.9l2.596 3.46a4.005 4.005 0 0 1 3.633 3.24H2.171a4.005 4.005 0 0 1 3.634-3.24L8.4 2.55a.75.75 0 0 1 1.2.9L7.688 6h8.625Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M2.173 10.75h19.654a4.078 4.078 0 0 1-.045.205l-1.966 8A4 4 0 0 1 15.93 22H8.07a4 4 0 0 1-3.884-3.045l-1.967-8a4.09 4.09 0 0 1-.045-.205Zm8.357 5.72.72.72V13a.75.75 0 0 1 1.5 0v4.19l.72-.72a.75.75 0 1 1 1.06 1.06l-1.293 1.293a1.75 1.75 0 0 1-2.474 0L9.47 17.53a.75.75 0 1 1 1.06-1.06Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasketArrowDown);
export default ForwardRef;
