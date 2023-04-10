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
        <path fill='currentColor' d='M3 8h18v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M19.25 18.985V22a.75.75 0 0 0 1.5 0v-4.03a2.001 2.001 0 0 1-1.5 1.015Zm-3 .015v1a.75.75 0 0 0 1.5 0v-1h-1.5Zm-10 0v1a.75.75 0 0 0 1.5 0v-1h-1.5Zm-3-1.03V22a.75.75 0 0 0 1.5 0v-3.015a2.001 2.001 0 0 1-1.5-1.015Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4H7V4Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M1.25 8A.75.75 0 0 1 2 7.25h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDesk);
export default ForwardRef;
