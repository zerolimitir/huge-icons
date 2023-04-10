import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSignalCellularOff = (
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
            fillRule='evenodd'
            d='M5.148 19c-1.965 0-2.894-2.331-1.434-3.596l5.696-4.933-6.94-6.94A.75.75 0 0 1 3.53 2.47l18 18a.75.75 0 1 1-1.06 1.06L17.94 19H5.147ZM21 16.937V5.067c0-1.786-2.198-2.728-3.578-1.533l-5.803 5.025 9.203 9.202a1.99 1.99 0 0 0 .178-.824Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignalCellularOff);
export default ForwardRef;
