import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMasterCard = (
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
            d='M22 7a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7ZM7.75 12a2.25 2.25 0 0 1 3.125-2.074A3.734 3.734 0 0 0 10.25 12c0 .767.23 1.48.625 2.074A2.25 2.25 0 0 1 7.75 12ZM10 8.25a3.74 3.74 0 0 1 2 .577 3.75 3.75 0 1 1 0 6.345 3.75 3.75 0 1 1-2-6.923Zm2.5 2.073a2.25 2.25 0 1 1 3 3.355 2.25 2.25 0 0 1-3-3.355Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMasterCard);
export default ForwardRef;
