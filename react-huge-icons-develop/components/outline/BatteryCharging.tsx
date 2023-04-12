import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBatteryCharging = (
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
        <rect width={12} height={18} x={6} y={4} stroke='currentColor' strokeWidth={1.5} rx={2} />
        <path
            stroke='currentColor'
            strokeLinejoin='round'
            d='m9.11 13.161.908-1.108 3.185-3.89c.318-.386.904-.028.751.46l-.878 2.814c-.095.305.118.62.419.62h1.063c.379 0 .582.477.332.782l-4.093 4.997c-.318.388-.904.029-.751-.46l.878-2.813c.095-.305-.118-.62-.419-.62H9.442c-.379 0-.582-.477-.332-.782Z'
        />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M10 2h4' />
    </svg>
);
const ForwardRef = forwardRef(SvgBatteryCharging);
export default ForwardRef;
