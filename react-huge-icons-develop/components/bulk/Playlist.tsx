import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPlaylist = (
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
            d='M21 14.139V20a2 2 0 0 1-2 2H5c-.627 0-1.145-.317-1.476-.591-.281-.233-.418-.585-.461-.947L3 19.928v-.025c0-.377.303-1.767 1.863-1.9H17c3.91-.266 4-3.864 4-3.864Z'
        />
        <path
            fill='currentColor'
            d='M21 6v8a4 4 0 0 1-4 4H5a2 2 0 0 0-2 2V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m14.317 11.342-3.146 1.573A1.5 1.5 0 0 1 9 11.573V8.427a1.5 1.5 0 0 1 2.17-1.342l3.147 1.573c1.105.553 1.105 2.13 0 2.684Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlaylist);
export default ForwardRef;
