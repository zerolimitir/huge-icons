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
            fillRule='evenodd'
            d='M7.75 2A4.75 4.75 0 0 0 3 6.75v12.5A2.75 2.75 0 0 0 5.75 22h14.5a.75.75 0 0 0 0-1.5H5.75a1.25 1.25 0 1 1 0-2.5h10.5A4.75 4.75 0 0 0 21 13.25v-6.5A4.75 4.75 0 0 0 16.25 2h-8.5Zm3.42 10.915 3.147-1.573c1.105-.553 1.105-2.13 0-2.684L11.17 7.085A1.5 1.5 0 0 0 9 8.427v3.146a1.5 1.5 0 0 0 2.17 1.342Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlaylist);
export default ForwardRef;
