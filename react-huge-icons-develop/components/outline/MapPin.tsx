import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapPin = (
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
            d='M8 6.025c-2.097.235-4.706 2.158-5.644 2.9A.951.951 0 0 0 2 9.676v10.13c0 .854 1.028 1.349 1.736.873 1.21-.813 2.853-1.736 4.264-1.894 3.318-.371 4.682 3.562 8 3.19 2.097-.235 4.706-2.158 5.644-2.9a.951.951 0 0 0 .356-.751V8.194c0-.854-1.028-1.349-1.736-.873-1.21.813-2.853 1.736-4.264 1.894-3.318.371-4.682-3.562-8-3.19Z'
        />
        <circle cx={16} cy={4} r={2} stroke='currentColor' strokeWidth={1.5} />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M16 14V6' />
    </svg>
);
const ForwardRef = forwardRef(SvgMapPin);
export default ForwardRef;
