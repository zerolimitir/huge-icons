import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBluetooth = (
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
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M20 20 4 4' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.25 10.31v1.29l-5.666 3.777a.75.75 0 0 0 .832 1.248l4.834-3.222v5.463c0 1.484 1.73 2.294 2.87 1.345l3.834-3.195-1.065-1.065-3.729 3.107a.25.25 0 0 1-.41-.192v-6.463l.354-.237-1.854-1.854Zm7.274 5.153.012.012-.012-.012Zm-4.147-4.146-1.081-1.082 3.174-2.116a.25.25 0 0 0 .021-.4l-3.33-2.776a.25.25 0 0 0-.41.192V9.69l-1.5-1.5V5.135c0-1.484 1.73-2.294 2.87-1.344l3.33 2.776a1.75 1.75 0 0 1-.15 2.8l-2.924 1.95Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBluetooth);
export default ForwardRef;
