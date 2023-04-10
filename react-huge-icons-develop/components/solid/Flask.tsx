import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFlask = (
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
            d='M9 1.25a.75.75 0 0 0 0 1.5h1v5.54a7.016 7.016 0 0 0-3.912 2.96h11.824A7.016 7.016 0 0 0 14 8.29V2.75h1a.75.75 0 0 0 0-1.5H9ZM5 15c0-.787.13-1.544.37-2.25h13.26A7 7 0 1 1 5 15Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlask);
export default ForwardRef;
