import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFastTime = (
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
            d='M22 12c0 5.523-4.477 10-10 10a1 1 0 0 1-1-1v-3a2 2 0 0 0-2-2H4a2 2 0 0 1-2-2v-2C2 6.477 6.477 2 12 2s10 4.477 10 10ZM12 5.25a.75.75 0 0 0-.75.75v4.145a2 2 0 1 0 1.573 3.678.747.747 0 0 0 .147.207l1.5 1.5a.75.75 0 1 0 1.06-1.06l-1.5-1.5a.751.751 0 0 0-.207-.147 2 2 0 0 0-1.073-2.678V6a.75.75 0 0 0-.75-.75ZM1.25 22a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75ZM2 18.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFastTime);
export default ForwardRef;
