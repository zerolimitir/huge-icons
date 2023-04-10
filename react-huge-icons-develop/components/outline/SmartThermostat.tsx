import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartThermostat = (
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
        <circle cx={12} cy={19} r={1} fill='currentColor' />
        <path
            fill='currentColor'
            d='M15.712 4.288a.75.75 0 1 0 1.06-1.061l-1.06 1.06Zm-6.364 1.06A.75.75 0 1 0 10.41 6.41L9.35 5.35ZM7.227 3.227a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm6.364 3.182a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM10 10h.75H10Zm4 0h.75H14Zm0 6.764h-.75c0 .213.09.416.25.559l.5-.56Zm-4 0 .5.559a.75.75 0 0 0 .25-.56H10Zm7-8.514a.75.75 0 0 0 0 1.5v-1.5Zm1 1.5a.75.75 0 0 0 0-1.5v1.5Zm-1 1.5a.75.75 0 0 0 0 1.5v-1.5Zm3 1.5a.75.75 0 0 0 0-1.5v1.5Zm-3 1.5a.75.75 0 0 0 0 1.5v-1.5Zm1 1.5a.75.75 0 0 0 0-1.5v1.5Zm-6-13a5.23 5.23 0 0 1 3.712 1.538l1.06-1.061A6.731 6.731 0 0 0 12 1.25v1.5Zm-1.591 3.659A2.24 2.24 0 0 1 12 5.75v-1.5a3.74 3.74 0 0 0-2.652 1.098L10.41 6.41ZM8.288 4.288A5.231 5.231 0 0 1 12 2.75v-1.5a6.731 6.731 0 0 0-4.773 1.977l1.06 1.06ZM12 5.75a2.24 2.24 0 0 1 1.591.659l1.06-1.06A3.74 3.74 0 0 0 12 4.25v1.5ZM10.75 10c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 10h1.5Zm4 0A2.75 2.75 0 0 0 12 7.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm-.5 9A2.25 2.25 0 0 1 12 21.25v1.5A3.75 3.75 0 0 0 15.75 19h-1.5ZM12 21.25A2.25 2.25 0 0 1 9.75 19h-1.5A3.75 3.75 0 0 0 12 22.75v-1.5Zm1.5-3.927c.461.413.75 1.01.75 1.677h1.5c0-1.11-.484-2.11-1.25-2.795l-1 1.118ZM13.25 10v6.764h1.5V10h-1.5Zm-3.5 9c0-.666.289-1.264.75-1.677l-1-1.118A3.743 3.743 0 0 0 8.25 19h1.5Zm1-2.236V10h-1.5v6.764h1.5ZM17 9.75h1v-1.5h-1v1.5Zm0 3h3v-1.5h-3v1.5Zm0 3h1v-1.5h-1v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartThermostat);
export default ForwardRef;
