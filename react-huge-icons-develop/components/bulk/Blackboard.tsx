import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBlackboard = (
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
        <path fill='currentColor' d='M3 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10H3V9Z' opacity={0.4} />
        <path fill='currentColor' d='M13 17a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2h-4v-2Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M1.25 19a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm5-10A.75.75 0 0 1 7 8.25h5a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBlackboard);
export default ForwardRef;
