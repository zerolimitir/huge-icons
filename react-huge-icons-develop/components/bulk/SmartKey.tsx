import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartKey = (
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
            d='M14 2h-4a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M12.75 11.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 6.75c-.941 0-1.807.416-2.446 1.115a.75.75 0 0 1-1.108-1.012C9.343 5.873 10.598 5.25 12 5.25c1.402 0 2.657.623 3.553 1.603a.75.75 0 1 1-1.107 1.012c-.639-.7-1.505-1.115-2.446-1.115Zm0 3c-.356 0-.691.156-.947.436a.75.75 0 1 1-1.107-1.012A2.778 2.778 0 0 1 12 8.25c.816 0 1.541.363 2.053.924a.75.75 0 0 1-1.107 1.012A1.278 1.278 0 0 0 12 9.75Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M20.5 19h-7a1.5 1.5 0 0 1 0-3h7a1.5 1.5 0 0 1 0 3Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartKey);
export default ForwardRef;
