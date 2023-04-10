import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgColorInversion = (
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
        <path fill='currentColor' d='M21 13.111C21 8.201 15.375 2 12 2v20c4.97 0 9-3.98 9-8.889Z' />
        <path
            fill='currentColor'
            d='M3 13.111C3 8.201 8.625 2 12 2v20c-4.97 0-9-3.98-9-8.889Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgColorInversion);
export default ForwardRef;
