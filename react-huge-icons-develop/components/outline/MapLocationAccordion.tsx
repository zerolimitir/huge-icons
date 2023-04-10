import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapLocationAccordion = (
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
            d='M8 18.834c-1.411.158-3.054 1.081-4.264 1.894-.708.476-1.736-.019-1.736-.872v-9.67c0-.585.255-1.142.722-1.495 1.01-.763 2.914-2.069 4.635-2.499M8 18.834c3.318-.371 4.682 3.562 8 3.19m-8-3.19V9.378m8 12.646c1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.912v-9.67c0-.853-1.028-1.348-1.736-.872-.995.669-2.283 1.412-3.495 1.743M16 22.024V11.211'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M17.462 6.863c0 2.651-2.5 7.2-5 7.2s-5-4.549-5-7.2c0-2.65 2.238-4.8 5-4.8 2.761 0 5 2.15 5 4.8Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M13.962 6.563a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapLocationAccordion);
export default ForwardRef;
