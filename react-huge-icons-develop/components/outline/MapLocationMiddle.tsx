import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapLocationMiddle = (
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
            d='M16 17.975c1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 13.863v-9.67c0-.853-1.028-1.348-1.736-.872-1.21.813-2.853 1.736-4.264 1.894-3.318.371-4.682-3.562-8-3.19-1.867.209-4.14 1.757-5.278 2.617A1.86 1.86 0 0 0 2 6.137v9.67c0 .853 1.028 1.348 1.736.872.95-.639 2.169-1.345 3.331-1.696'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M17 14.8c0 2.651-2.5 7.2-5 7.2s-5-4.549-5-7.2S9.239 10 12 10s5 2.149 5 4.8Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M13.5 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapLocationMiddle);
export default ForwardRef;
