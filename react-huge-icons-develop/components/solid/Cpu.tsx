import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCpu = (
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
            d='M10 1.25a.75.75 0 0 1 .75.75v2h2.5V2a.75.75 0 0 1 1.5 0v2H16a4 4 0 0 1 4 4v1.25h2a.75.75 0 0 1 0 1.5h-2v2.5h2a.75.75 0 0 1 0 1.5h-2V16a4 4 0 0 1-4 4h-1.25v2a.75.75 0 0 1-1.5 0v-2h-2.5v2a.75.75 0 0 1-1.5 0v-2H8a4 4 0 0 1-4-4v-1.25H2a.75.75 0 0 1 0-1.5h2v-2.5H2a.75.75 0 0 1 0-1.5h2V8a4 4 0 0 1 4-4h1.25V2a.75.75 0 0 1 .75-.75ZM11 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCpu);
export default ForwardRef;
