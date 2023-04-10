import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapLocation = (
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
            stroke='currentColor'
            strokeWidth={1.5}
            d='M7.07 6.222c-1.642.494-3.394 1.699-4.348 2.42A1.86 1.86 0 0 0 2 10.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 3.318-.371 4.682 3.562 8 3.19 1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.863v-9.67c0-.853-1.028-1.348-1.736-.872-1.046.703-2.414 1.487-3.678 1.79'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M17 6.8c0 2.651-2.5 7.2-5 7.2S7 9.451 7 6.8 9.239 2 12 2s5 2.149 5 4.8Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M13.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapLocation);
export default ForwardRef;
