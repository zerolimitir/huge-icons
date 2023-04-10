import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWarehouse = (
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
            d='M2 10.083a4 4 0 0 1 1.706-3.277l6-4.2a4 4 0 0 1 4.588 0l6 4.2A4 4 0 0 1 22 10.083V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9.917Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M16 10H8a2 2 0 0 0-2 2v2h12v-2a2 2 0 0 0-2-2Zm2 8H6v4h12v-4Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWarehouse);
export default ForwardRef;
