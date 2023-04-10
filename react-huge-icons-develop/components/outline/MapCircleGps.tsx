import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapCircleGps = (
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
            d='M6.299 6.5c-1.397.58-2.771 1.533-3.577 2.142A1.86 1.86 0 0 0 2 10.137v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 3.318-.371 4.682 3.562 8 3.19 1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.863v-9.67c0-.853-1.028-1.348-1.736-.872-.681.458-1.5.95-2.336 1.321'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='m10.763 8.92-1.515-.504a.5.5 0 0 1-.04-.934l4.643-1.99a.5.5 0 0 1 .657.657l-1.99 4.642a.5.5 0 0 1-.934-.039l-.505-1.515a.5.5 0 0 0-.316-.316Z'
        />
        <path stroke='currentColor' strokeWidth={1.5} d='M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgMapCircleGps);
export default ForwardRef;
