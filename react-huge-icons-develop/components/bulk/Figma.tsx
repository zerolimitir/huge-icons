import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFigma = (
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
        <path fill='currentColor' d='M12 3h3a3 3 0 1 1 0 6h-3V3Z' />
        <path fill='currentColor' d='M6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Z' opacity={0.4} />
        <path fill='currentColor' d='M6 12a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3Z' />
        <path fill='currentColor' d='M6 18a3 3 0 0 1 3-3h3v3a3 3 0 1 1-6 0Z' opacity={0.4} />
        <circle cx={15} cy={12} r={3} fill='currentColor' opacity={0.4} />
    </svg>
);
const ForwardRef = forwardRef(SvgFigma);
export default ForwardRef;
