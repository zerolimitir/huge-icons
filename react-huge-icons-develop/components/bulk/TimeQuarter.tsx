import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTimeQuarter = (
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
            d='M12 16.75a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-1.5 0V16c0 .414.336.75.75.75Zm-6-4h4.5a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M2 12.75a.75.75 0 0 1-.75-.75C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75a.75.75 0 0 1 0-1.5A9.25 9.25 0 1 0 2.75 12a.75.75 0 0 1-.75.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M2.387 14.867a.75.75 0 0 1 .969.433c.062.162.128.321.198.479a.75.75 0 1 1-1.368.613c-.082-.183-.16-.369-.232-.557a.75.75 0 0 1 .433-.968Zm1.831 3.458a.75.75 0 0 1 1.06.03c.12.125.242.248.367.367a.75.75 0 1 1-1.03 1.09 10.72 10.72 0 0 1-.426-.427.75.75 0 0 1 .03-1.06Zm3.012 2.498a.75.75 0 0 1 .991-.377c.158.07.317.136.48.198a.75.75 0 1 1-.536 1.402 10.608 10.608 0 0 1-.557-.232.75.75 0 0 1-.378-.99Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' opacity={0.4} />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeQuarter);
export default ForwardRef;
