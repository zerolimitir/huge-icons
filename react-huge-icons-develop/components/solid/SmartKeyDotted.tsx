import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartKeyDotted = (
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
            d='M5.25 6A4.75 4.75 0 0 1 10 1.25h4A4.75 4.75 0 0 1 18.75 6v7a.75.75 0 0 1-1.5 0V6A3.25 3.25 0 0 0 14 2.75h-4A3.25 3.25 0 0 0 6.75 6v12A3.25 3.25 0 0 0 10 21.25h8a.75.75 0 0 1 0 1.5h-8A4.75 4.75 0 0 1 5.25 18V6ZM20.5 19h-7a1.5 1.5 0 0 1 0-3h7a1.5 1.5 0 0 1 0 3ZM12 6.5A.75.75 0 1 0 12 5a.75.75 0 0 0 0 1.5Zm-2-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-2 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 12.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-2-3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm6.25-3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartKeyDotted);
export default ForwardRef;
