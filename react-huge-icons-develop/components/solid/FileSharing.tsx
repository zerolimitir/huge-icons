import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileSharing = (
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
            d='M3 10V4a2 2 0 0 1 2-2h2.963a2 2 0 0 1 1.317.495l1.037.907A2 2 0 0 1 11 4.908V10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm10 10v-6a2 2 0 0 1 2-2h2.963a2 2 0 0 1 1.317.495l1.037.907A2 2 0 0 1 21 14.908V20a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Zm.5-14.75a.75.75 0 0 0 0 1.5H16c.69 0 1.25.56 1.25 1.25v1.5a.75.75 0 0 0 1.5 0V8A2.75 2.75 0 0 0 16 5.25h-2.5ZM6.75 14.5a.75.75 0 0 0-1.5 0V16A2.75 2.75 0 0 0 8 18.75h2.5a.75.75 0 0 0 0-1.5H8c-.69 0-1.25-.56-1.25-1.25v-1.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileSharing);
export default ForwardRef;
