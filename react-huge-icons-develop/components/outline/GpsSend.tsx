import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGpsSend = (
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
        <circle cx={12} cy={12} r={8} stroke='currentColor' strokeWidth={1.5} />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m10.763 12.92-1.515-.504a.5.5 0 0 1-.04-.934l4.643-1.99a.5.5 0 0 1 .657.657l-1.99 4.642a.5.5 0 0 1-.934-.039l-.505-1.515a.5.5 0 0 0-.316-.316Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M12 4V2m0 20v-2m8-8h2M2 12h2'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGpsSend);
export default ForwardRef;
