import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFile = (
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
            d='M3 6v12a4 4 0 0 0 4 4h6l8-8V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M13 18v4l8-8h-4a4 4 0 0 0-4 4Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgFile);
export default ForwardRef;
