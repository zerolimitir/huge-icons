import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAlarmCheck = (
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
            d='M6.715 17.417a.75.75 0 0 1 .11 1.055l-3.242 4a.75.75 0 1 1-1.166-.944l3.243-4a.75.75 0 0 1 1.055-.11Zm10.57 0a.75.75 0 0 1 1.055.11l3.243 4a.75.75 0 1 1-1.166.945l-3.242-4a.75.75 0 0 1 .11-1.055Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M21 13a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.884 1.7a.75.75 0 0 1-.387.987A11.292 11.292 0 0 0 2.625 6.78a.75.75 0 0 1-1.25-.83 12.797 12.797 0 0 1 5.521-4.637.75.75 0 0 1 .988.387Zm8.232 0a.75.75 0 0 1 .988-.387 12.797 12.797 0 0 1 5.52 4.636.75.75 0 0 1-1.249.83 11.297 11.297 0 0 0-4.872-4.092.75.75 0 0 1-.387-.987Zm-.622 8.736a.75.75 0 0 1 .07 1.058l-2.87 3.28a1.75 1.75 0 0 1-2.41.214l-1.752-1.402a.75.75 0 0 1 .937-1.172l1.752 1.403a.25.25 0 0 0 .345-.031l2.87-3.28a.75.75 0 0 1 1.058-.07Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAlarmCheck);
export default ForwardRef;
