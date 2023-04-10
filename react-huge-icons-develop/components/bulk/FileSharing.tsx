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
            d='M3 10V4a2 2 0 0 1 2-2h2.963a2 2 0 0 1 1.317.495l1.037.907A2 2 0 0 1 11 4.908V10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm10 10v-6a2 2 0 0 1 2-2h2.963a2 2 0 0 1 1.317.495l1.037.907A2 2 0 0 1 21 14.908V20a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12.75 6a.75.75 0 0 1 .75-.75H16A2.75 2.75 0 0 1 18.75 8v1.5a.75.75 0 0 1-1.5 0V8c0-.69-.56-1.25-1.25-1.25h-2.5a.75.75 0 0 1-.75-.75ZM6 13.75a.75.75 0 0 1 .75.75V16c0 .69.56 1.25 1.25 1.25h2.5a.75.75 0 0 1 0 1.5H8A2.75 2.75 0 0 1 5.25 16v-1.5a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileSharing);
export default ForwardRef;
