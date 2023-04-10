import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMinimizeCircle = (
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
            d='M15.75 14a.75.75 0 0 0-.75-.75h-3.19l9.72-9.72a.75.75 0 0 0-1.06-1.06l-9.72 9.72V9a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75Zm-12-1A7.25 7.25 0 0 1 11 5.75a.75.75 0 0 0 0-1.5A8.75 8.75 0 1 0 19.75 13a.75.75 0 0 0-1.5 0 7.25 7.25 0 1 1-14.5 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMinimizeCircle);
export default ForwardRef;
