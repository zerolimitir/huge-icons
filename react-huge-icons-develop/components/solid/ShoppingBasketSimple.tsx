import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShoppingBasketSimple = (
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
            d='M14.4 3.45 16.313 6H7.688L9.6 3.45a.75.75 0 1 0-1.2-.9L5.805 6.01A4.005 4.005 0 0 0 2.17 9.25h19.66a4.005 4.005 0 0 0-3.634-3.24L15.6 2.55a.75.75 0 0 0-1.2.9Zm7.427 7.3H2.173c.013.068.028.136.045.205l1.967 8A4 4 0 0 0 8.069 22h7.862a4 4 0 0 0 3.885-3.045l1.966-8c.017-.069.032-.137.045-.205Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasketSimple);
export default ForwardRef;
