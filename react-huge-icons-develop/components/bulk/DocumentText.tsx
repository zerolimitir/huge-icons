import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDocumentText = (
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
            d='M4 6a4 4 0 0 1 4-4h7.343a4 4 0 0 1 2.829 1.172l2.656 2.656A4 4 0 0 1 22 8.657V18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M8.25 7A.75.75 0 0 1 9 6.25h8a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 8.25 7Zm0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDocumentText);
export default ForwardRef;
