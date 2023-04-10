import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCapsuleOpen = (
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
            d='M9.5 19.5c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S8 17 8 17s1.5 1.395 1.5 2.5Zm8 0c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S16 17 16 17s1.5 1.395 1.5 2.5Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M13.5 13.5c0 1.105-.672 1.5-1.5 1.5s-1.5-.395-1.5-1.5S12 11 12 11s1.5 1.395 1.5 2.5Z'
        />
        <path
            fill='currentColor'
            d='M10.071 6.828 7.243 4A3 3 0 0 0 3 8.242l2.829 2.829 4.242-4.243Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M13.929 6.828 16.757 4A3 3 0 0 1 21 8.242l-2.829 2.829-4.242-4.243Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCapsuleOpen);
export default ForwardRef;
