import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMaximizeCircle = (
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
            d='M15.25 3c0 .414.336.75.75.75h3.19l-9.72 9.72a.75.75 0 1 0 1.06 1.06l9.72-9.72V8a.75.75 0 0 0 1.5 0V3a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0-.75.75ZM3.75 13A7.25 7.25 0 0 1 11 5.75a.75.75 0 0 0 0-1.5A8.75 8.75 0 1 0 19.75 13a.75.75 0 0 0-1.5 0 7.25 7.25 0 1 1-14.5 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMaximizeCircle);
export default ForwardRef;
