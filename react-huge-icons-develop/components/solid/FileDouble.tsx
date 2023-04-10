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
            d='M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6V5a3 3 0 0 0-3-3H5Zm0 3.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H5ZM4.25 9A.75.75 0 0 1 5 8.25h3a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 9ZM19 8h-6v14h6a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3Zm-3 3.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3ZM15.25 15a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileDouble);
export default ForwardRef;
