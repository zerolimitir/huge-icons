import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileDouble = (
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
            d='M12 8h7a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-7V8Zm2.25 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M2 5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v17H5a3 3 0 0 1-3-3V5Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M4.25 6A.75.75 0 0 1 5 5.25h4a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 6Zm0 3A.75.75 0 0 1 5 8.25h4a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileDouble);
export default ForwardRef;
