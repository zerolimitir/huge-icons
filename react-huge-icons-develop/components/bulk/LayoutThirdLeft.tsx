import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLayoutThirdLeft = (
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
        <path fill='currentColor' d='M2 6v12a4 4 0 0 0 4 4h2V2H6a4 4 0 0 0-4 4Z' />
        <path fill='currentColor' d='M22 18V6a4 4 0 0 0-4-4H8v20h10a4 4 0 0 0 4-4Z' opacity={0.4} />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutThirdLeft);
export default ForwardRef;
