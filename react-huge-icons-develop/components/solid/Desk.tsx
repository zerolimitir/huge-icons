import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDesk = (
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
            d='M9 2a2 2 0 0 0-2 2v3h10V4a2 2 0 0 0-2-2H9ZM1.25 9.25A.75.75 0 0 1 2 8.5h20a.75.75 0 0 1 0 1.5h-1v6c0 .352-.09.682-.25.969V22a.75.75 0 0 1-1.5 0v-4.015A2.06 2.06 0 0 1 19 18h-1.25v2a.75.75 0 0 1-1.5 0v-2h-8.5v2a.75.75 0 0 1-1.5 0v-2H5a2.06 2.06 0 0 1-.25-.015V22a.75.75 0 0 1-1.5 0v-5.031A1.991 1.991 0 0 1 3 16v-6H2a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDesk);
export default ForwardRef;
