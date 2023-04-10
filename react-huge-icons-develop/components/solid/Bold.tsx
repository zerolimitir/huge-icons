import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBold = (
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
            d='M7 4.25a.75.75 0 0 0-.75.75v14c0 .414.336.75.75.75h6.5a4.25 4.25 0 0 0 1.11-8.354A4.25 4.25 0 0 0 11.5 4.25H7Zm4.5 7a2.75 2.75 0 1 0 0-5.5H7.75v5.5h3.75Zm-3.75 1.5v5.5h5.75a2.75 2.75 0 1 0 0-5.5H7.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBold);
export default ForwardRef;
