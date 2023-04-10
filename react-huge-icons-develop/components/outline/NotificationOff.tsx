import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgNotificationOff = (
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
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='m3 2.75 18 18' />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M19.918 15.668a1.891 1.891 0 0 0-.373-1.788 3.816 3.816 0 0 1-.88-2.042l-.345-3.044C17.946 5.491 15.23 3 12 3c-1.33 0-2.572.422-3.6 1.15M6.502 6.252a6.668 6.668 0 0 0-.822 2.542l-.345 3.044a3.816 3.816 0 0 1-.88 2.042C3.422 15.096 4.261 17 5.83 17h11.42'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M15 19c-.437 1.165-1.615 2-3 2s-2.563-.835-3-2'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgNotificationOff);
export default ForwardRef;
