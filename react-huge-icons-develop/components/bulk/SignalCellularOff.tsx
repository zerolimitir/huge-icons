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
            d='M18.856 19H5.148c-1.965 0-2.894-2.331-1.434-3.596l13.708-11.87C18.802 2.339 21 3.28 21 5.067v11.87c0 1.14-.96 2.063-2.144 2.063Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M18.856 19H5.148c-1.965 0-2.894-2.331-1.434-3.596L9.979 9.98 18.856 19Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignalCellularOff);
export default ForwardRef;
