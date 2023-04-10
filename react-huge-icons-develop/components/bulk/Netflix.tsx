import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgNetflix = (
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
        <path fill='currentColor' d='M9 20V9.5L4 3v17h5ZM20 3h-5v10l5 7V3Z' opacity={0.4} />
        <path fill='currentColor' d='M4 3h5l11 17h-5L4 3Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgNetflix);
export default ForwardRef;
