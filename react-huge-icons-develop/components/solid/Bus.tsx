import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBus = (
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
            d='M5.095 4.25A3.001 3.001 0 0 1 8 2h8a3 3 0 0 1 2.905 2.25H5.095ZM5 5.75v4.75h6.25V5.75H5Zm14 0v4.75h-6.25V5.75H19Zm0 0v-1.5h1A2.75 2.75 0 0 1 22.75 7v1a.75.75 0 0 1-1.5 0V7c0-.69-.56-1.25-1.25-1.25h-1ZM2.75 7c0-.69.56-1.25 1.25-1.25h1v-1.5H4A2.75 2.75 0 0 0 1.25 7v1a.75.75 0 0 0 1.5 0V7ZM5 12a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5Zm1 9v-1.5h4V21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Zm8-1.5V21a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.5h-4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBus);
export default ForwardRef;
