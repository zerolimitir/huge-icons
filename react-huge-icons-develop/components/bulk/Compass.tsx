import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCompass = (
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
        <circle cx={12} cy={12} r={10} fill='currentColor' opacity={0.4} />
        <path
            fill='currentColor'
            d='m7.665 10.403 7.054-2.351a.972.972 0 0 1 1.23 1.23l-2.352 7.053c-.295.887-1.549.887-1.844 0l-.869-2.605a.972.972 0 0 0-.614-.614l-2.605-.869c-.887-.295-.887-1.549 0-1.844Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCompass);
export default ForwardRef;
