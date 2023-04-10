import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShoppingBag = (
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
            d='M8.389 3h7.223a4 4 0 0 1 3.945 3.342l1.667 10A4 4 0 0 1 17.278 21H6.722a4 4 0 0 1-3.946-4.658l1.667-10A4 4 0 0 1 8.389 3ZM12 10.75A3.75 3.75 0 0 0 15.75 7V6a.75.75 0 0 0-1.5 0v1a2.25 2.25 0 0 1-4.5 0V6a.75.75 0 1 0-1.5 0v1A3.75 3.75 0 0 0 12 10.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBag);
export default ForwardRef;
