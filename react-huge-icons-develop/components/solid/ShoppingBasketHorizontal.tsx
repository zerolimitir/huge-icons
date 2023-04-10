import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgShoppingBasketHorizontal = (
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
            d='M14.4 2.45 16.312 5H7.688L9.6 2.45a.75.75 0 1 0-1.2-.9L5.81 5.003c-1.83.075-3.296 1.464-3.7 3.247h19.78c-.404-1.783-1.87-3.172-3.7-3.247L15.6 1.55a.75.75 0 0 0-1.2.9Zm7.571 7.3H2.03c.013.119.031.239.054.358l1.635 8.5C4.098 20.584 5.719 22 7.6 22h8.8c1.88 0 3.502-1.417 3.882-3.392l1.635-8.5c.023-.12.041-.239.054-.358ZM7.25 14a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75ZM9 17.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShoppingBasketHorizontal);
export default ForwardRef;
