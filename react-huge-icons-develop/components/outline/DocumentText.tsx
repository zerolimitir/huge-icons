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
            stroke='currentColor'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M4 6a4 4 0 0 1 4-4h7.343a4 4 0 0 1 2.829 1.172l2.656 2.656A4 4 0 0 1 22 8.657V18a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6Z'
        />
        <path
            fill='currentColor'
            d='M9 6.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 0h8v-1.5H9v1.5Zm0 3.5a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 0h8v-1.5H9v1.5Zm0 3.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4 0h4v-1.5H9v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDocumentText);
export default ForwardRef;
