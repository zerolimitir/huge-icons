import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWheelChair = (
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
            d='M3.25 3A.75.75 0 0 1 4 2.25h1A2.75 2.75 0 0 1 7.75 5v.25H17A2.75 2.75 0 0 1 19.75 8v7.55a2.755 2.755 0 0 1 1.431 1.836 2 2 0 1 1-1.812-.284 1.247 1.247 0 0 0-.869-.352h-5.043A6.5 6.5 0 0 0 6.25 9.543V5c0-.69-.56-1.25-1.25-1.25H4A.75.75 0 0 1 3.25 3ZM12 16a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWheelChair);
export default ForwardRef;
