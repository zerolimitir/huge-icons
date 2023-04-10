import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMedicalInformation = (
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
            d='M8 11v6m3-3H5m14-2h-5m3 4h-3'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M14 6h4a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4h4m4 0V4a2 2 0 1 0-4 0v2m4 0a2 2 0 1 1-4 0'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMedicalInformation);
export default ForwardRef;
