import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWifiOff = (
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
        <path fill='currentColor' d='M13.445 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12.5 4.75a13.2 13.2 0 0 0-8.939 3.47.75.75 0 1 1-1.012-1.108A14.7 14.7 0 0 1 12.5 3.25a14.7 14.7 0 0 1 9.951 3.862.75.75 0 1 1-1.012 1.107A13.2 13.2 0 0 0 12.5 4.75Zm0 5a8.22 8.22 0 0 0-5.719 2.304.75.75 0 1 1-1.04-1.081A9.72 9.72 0 0 1 12.5 8.25a9.72 9.72 0 0 1 6.759 2.723.75.75 0 1 1-1.04 1.08A8.22 8.22 0 0 0 12.5 9.75Zm0 5a3.24 3.24 0 0 0-2.454 1.119.75.75 0 1 1-1.132-.985A4.74 4.74 0 0 1 12.5 13.25a4.74 4.74 0 0 1 3.585 1.634.75.75 0 1 1-1.131.985A3.24 3.24 0 0 0 12.5 14.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M3.561 8.22A.75.75 0 1 1 2.55 7.111a14.782 14.782 0 0 1 3.329-2.295L7.002 5.94a13.268 13.268 0 0 0-3.44 2.278Zm3.22 3.834a.75.75 0 0 1-1.04-1.081 9.743 9.743 0 0 1 3.974-2.32l1.24 1.241a8.225 8.225 0 0 0-4.174 2.16ZM12.5 14.75a3.24 3.24 0 0 0-2.454 1.119.75.75 0 0 1-1.132-.985A4.74 4.74 0 0 1 12.5 13.25c.941 0 1.82.274 2.557.747l1.188 1.187a.75.75 0 0 1-1.291.685A3.24 3.24 0 0 0 12.5 14.75Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWifiOff);
export default ForwardRef;
