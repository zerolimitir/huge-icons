import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShoppingBasketSingleDoor = (
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
            d='M17.469 3.586a.75.75 0 1 0-.937-1.172L12.05 6H5.965C3.995 6 2.413 7.433 2.07 9.25h19.86C21.588 7.433 20.007 6 18.036 6h-3.584l3.018-2.414Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M20.282 18.808A3.972 3.972 0 0 1 16.4 22H7.6a3.972 3.972 0 0 1-3.882-3.192l-1.635-8a4.094 4.094 0 0 1-.011-.058h19.856a3.96 3.96 0 0 1-.011.058l-1.635 8ZM9 13.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm6.75.75a.75.75 0 1 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasketSingleDoor);
export default ForwardRef;
