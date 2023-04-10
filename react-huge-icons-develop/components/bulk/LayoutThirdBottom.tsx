import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLayoutThirdBottom = (
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
        <path fill='currentColor' d='M6 22h12a4 4 0 0 0 4-4v-2H2v2a4 4 0 0 0 4 4Z' />
        <path fill='currentColor' d='M18 2H6a4 4 0 0 0-4 4v10h20V6a4 4 0 0 0-4-4Z' opacity={0.4} />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutThirdBottom);
export default ForwardRef;
