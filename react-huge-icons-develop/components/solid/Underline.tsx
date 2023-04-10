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
            fillRule='evenodd'
            d='M7.75 4a.75.75 0 0 0-1.5 0v7a5.75 5.75 0 0 0 11.5 0V4a.75.75 0 0 0-1.5 0v7a4.25 4.25 0 0 1-8.5 0V4ZM5 19.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5H5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUnderline);
export default ForwardRef;
