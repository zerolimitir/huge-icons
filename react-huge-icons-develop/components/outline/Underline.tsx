import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUnderline = (
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
            d='M5 19.25a.75.75 0 0 0 0 1.5v-1.5Zm14 1.5a.75.75 0 0 0 0-1.5v1.5Zm-14 0h14v-1.5H5v1.5ZM7.75 4a.75.75 0 0 0-1.5 0h1.5Zm10 0a.75.75 0 0 0-1.5 0h1.5Zm-10 7V4h-1.5v7h1.5Zm10 0V4h-1.5v7h1.5ZM12 16.75A5.75 5.75 0 0 0 17.75 11h-1.5A4.25 4.25 0 0 1 12 15.25v1.5ZM6.25 11A5.75 5.75 0 0 0 12 16.75v-1.5A4.25 4.25 0 0 1 7.75 11h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUnderline);
export default ForwardRef;
