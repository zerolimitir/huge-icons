import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileAttachment = (
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
            d='M4 10v8a4 4 0 0 0 4 4h2.236a4 4 0 0 0 2.807-1.15l5.763-5.675A4 4 0 0 0 20 12.325V10a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M12 18v4l8-8h-4a4 4 0 0 0-4 4Zm0-15.25A2.25 2.25 0 0 0 9.75 5v1h-1.5V5a3.75 3.75 0 1 1 7.5 0v3.5a2.25 2.25 0 0 1-4.5 0V8a.75.75 0 0 1 1.5 0v.5a.75.75 0 0 0 1.5 0V5A2.25 2.25 0 0 0 12 2.75Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileAttachment);
export default ForwardRef;
