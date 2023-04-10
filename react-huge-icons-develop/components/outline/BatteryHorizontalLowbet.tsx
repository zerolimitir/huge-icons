import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBatteryHorizontalLowbet = (
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
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M22 10v4M3 3l18 18'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.19 5.25H4A2.75 2.75 0 0 0 1.25 8v8A2.75 2.75 0 0 0 4 18.75h14c.487 0 .944-.127 1.34-.349l-1.163-1.163a1.258 1.258 0 0 1-.177.012H4c-.69 0-1.25-.56-1.25-1.25V8c0-.69.56-1.25 1.25-1.25h3.69l-1.5-1.5Zm13.048 10.927c.008-.058.012-.117.012-.177V8c0-.69-.56-1.25-1.25-1.25H9.81l-1.5-1.5H18A2.75 2.75 0 0 1 20.75 8v8c0 .487-.127.944-.349 1.34l-1.163-1.163Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBatteryHorizontalLowbet);
export default ForwardRef;
