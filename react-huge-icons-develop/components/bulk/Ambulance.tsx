import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAmbulance = (
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
            d='M14 19V7h3.21a2 2 0 0 1 1.367.54l2.79 2.617a2 2 0 0 1 .633 1.46V17a2 2 0 0 1-2 2 2 2 0 1 0-4 0h-2Z'
        />
        <path fill='currentColor' d='M20 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' opacity={0.4} />
        <path fill='currentColor' d='M9 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6 3h4a4 4 0 0 1 4 4v12H9a2 2 0 0 0-3.996-.125A4.002 4.002 0 0 1 2 15V7a4 4 0 0 1 4-4Zm.75 5a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-1.25h2.5V12a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v1.25h-2.5V8Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAmbulance);
export default ForwardRef;
